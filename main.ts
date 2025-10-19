import { generateText, type LanguageModel } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { openai } from "@ai-sdk/openai";

export const ask = async (prompt: string, model: LanguageModel) => {
  const { text } = await generateText({
    model,
    prompt,
  });

  return text;
};

const prompt = `Tell me a story about your grandmother.`;

const anthropicResult = await ask(prompt, anthropic("claude-3-5-haiku-latest"));

const openaiResult = await ask(prompt, openai("gpt-4o-mini-2024-07-18"));
