import { anthropic } from "@ai-sdk/anthropic";
import { streamText, tool } from "ai";
import z from "zod";

const model = anthropic("claude-3-5-haiku-latest");

const getWeatherTool = tool({
  description: "Get the current weather in the specified city",
  inputSchema: z.object({
    city: z.string().describe("The city to get the weather for"),
  }),
  execute: async ({ city }) => {
    return `The weather in ${city} is 25 deg C and sunny.`;
  },
});

const askAQuestion = async (prompt: string) => {
  const { textStream, steps } = streamText({
    model,
    prompt,
    tools: {
      getWeather: getWeatherTool,
    },
    stopWhen: () => false,
  });

  for await (const text of textStream) {
    process.stdout.write(text);
  }

  // console.dir(await steps, { depth: null });
};

await askAQuestion("What's the weather like in Bengaluru?");
