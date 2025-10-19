import { anthropic } from "@ai-sdk/anthropic";
import { generateObject } from "ai";
import z from "zod";
import { readFileSync } from "node:fs";
import path from "node:path";

const model = anthropic("claude-3-5-haiku-latest");

const schema = z
  .object({
    total: z.number().describe("The total amount of the invoice"),
    currency: z.string().describe("The currency of the total amount."),
    invoiceNumber: z.string().describe("The invoice number."),
    companyAddress: z
      .string()
      .describe("The address of the company or person issuing the invoice"),
    companyName: z
      .string()
      .describe("The name of the company issuing the invoice"),
    invocieAddress: z
      .string()
      .describe("The address of the company or person receiving the invoice."),
  })
  .describe("The extracted data from the invoice.");

export const extractDataFromInvoice = async (invoicePath: string) => {
  const { object } = await generateObject({
    model,
    system:
      `You will receive an invoice. ` +
      `Please extract the data from the invoice.`,
    schema,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "file",
            data: readFileSync(invoicePath),
            mediaType: "application/pdf",
          },
        ],
      },
    ],
  });

  return object;
};

const result = await extractDataFromInvoice(
  path.join(import.meta.dirname, "./sale_invoice.pdf"),
);

console.log("result: ", result);
