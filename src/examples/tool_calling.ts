import { anthropic } from "@ai-sdk/anthropic";
import { tool } from "ai";
import z from "zod";
import { generateText } from "ai";

const model = anthropic("claude-3-5-haiku-latest");

const logToConsoleTool = tool({
  description: "Log a message to the console",
  inputSchema: z.object({
    message: z.string().describe("The message to log to the console"),
  }),
  execute: async ({ message }) => {
    console.log(message);
  },
});

const logToConsole = async (prompt: string) => {
  const { steps } = await generateText({
    model,
    prompt,
    system:
      `Your only role in life is to log ` +
      `message to the console. ` +
      `Use the tool provided to log the ` +
      `prompt to the console.`,
    tools: {
      logToConsole: logToConsoleTool,
    },
  });

  // console.dir(steps[0]?.toolCalls, { depth: null });
  // these tool results can be fed back into the llm to make this even more powerful provided more information
  console.dir(steps[0]?.toolResults, { depth: null });
};

await logToConsole("Hello world!");
