import { generateObject } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

const model = anthropic("claude-3-5-haiku-latest");

export const classifySentiment = async (text: string) => {
  const { object } = await generateObject({
    model,
    output: "enum",
    enum: ["positive", "negative", "neutral"],
    prompt: text,
    system:
      `Classify the sentiment of the text as either ` +
      `positive, negative, or neutral.`,
    //     system: `You are a sentiment classification assistant.
    // Classify the text strictly as one of: positive, negative, or neutral.
    // Do not include any extra text, explanation, or punctuation. Only return the single word that matches the sentiment.`,
  });

  return object;
};

// const result = await classifySentiment(`I'm not sure how I feel`); // neutral
const result = await classifySentiment(`This is terrible.`); // negative

console.log("result: ", result);
