import { anthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";

const model = anthropic("claude-3-5-haiku-latest");

export const answerMyQuestion = async (prompt: string) => {
  const { text } = await generateText({
    model,
    // this prepends a message with the role of system under the hood
    // system:
    //   `You are a text summarizer. ` +
    //   `Summarize the text you receive. ` +
    //   `Be concise. ` +
    //   `Return only the summary. ` +
    //   `Do not use the phrase "here is a summary". ` +
    //   `Highlight relevant phrases in bold. ` +
    //   `The summary should be two sentences long. `,

    // this can be done in generateText streamText and all of the other api's
    messages: [
      {
        role: "system",
        content:
          `You are a text summarizer. ` +
          `Summarize the text you receive. ` +
          `Be concise. ` +
          `Return only the summary. ` +
          `Do not use the phrase "here is a summary". ` +
          `Highlight relevant phrases in bold. ` +
          `The summary should be two sentences long. `,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return text;
};
