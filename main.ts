import { anthropic } from "@ai-sdk/anthropic";
import { generateText, streamText } from "ai";

const model = anthropic("claude-3-5-haiku-latest");

export const answerMyQuestion = async (prompt: string) => {
  const { textStream, text } = streamText({
    model,
    prompt,
  });

  // complete answer
  const finalText = await text;

  // streaming to stdout - terminal/console
  for await (const text of textStream) {
    process.stdout.write(text);
  }

  return textStream;
};

await answerMyQuestion("What is the color of the sun ?");
