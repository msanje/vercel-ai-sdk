import { anthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";
import { readFileSync } from "node:fs";
import path from "node:path";

const model = anthropic("claude-3-5-haiku-latest");

const systemPrompt =
  `You will receive an image. ` +
  `Please create an alt text for the image. ` +
  `Be concise. ` +
  `Use adjacetives only when necessary. ` +
  `Do not pass 160 characters. ` +
  `Use simple language. `;

export const describeImage = async (imagePath: string) => {
  const imageAsUint8Array = readFileSync(imagePath);

  const { text } = await generateText({
    model,
    system: systemPrompt,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image",
            image: imageAsUint8Array,
          },
        ],
      },
    ],
  });

  return text;
};

export const describeImagewithURL = async (imageUrl: string) => {
  const { text } = await generateText({
    model,
    system: systemPrompt,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image",
            image: new URL(imageUrl),
          },
        ],
      },
    ],
  });

  return text;
};

// const description = await describeImage(
//   path.join(import.meta.dirname, "./fireworks.jpg"),
// );

const description = await describeImagewithURL(
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
);

console.log("description: ", description);
