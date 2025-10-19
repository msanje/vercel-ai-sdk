import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { getLocalhost } from "./utils";
import { generateText } from "ai";

const lmstudio = createOpenAICompatible({
  name: "lmstudio",
  // to connect to locally running models (this example is with LM Studio)
  // or ones hosted at any url
  baseURL: `http://${getLocalhost()}:1234/v1`,
});

const model = lmstudio("");

export const askLocalLLMQuestion = async (input: string) => {
  const { text } = await generateText({
    model,
    prompt: input,
    maxRetries: 0,
  });

  return text;
};

const input = `Tell me a story about your grandmother.`;

const localLLMResult = await askLocalLLMQuestion(input);

console.log(localLLMResult);
