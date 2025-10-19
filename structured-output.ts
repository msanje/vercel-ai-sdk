import { z } from "zod";
import { smallToolCallingModel } from "./models.ts";
import { generateObject, streamObject } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

const model = anthropic("claude-3-5-haiku-latest");

const schema = z.object({
  recipe: z.object({
    name: z.string().describe("The title of the recipe"),
    ingredients: z.array(
      z
        .object({
          name: z.string(),
          amount: z.string(),
        })
        .describe("The ingredients needed for the recipe"),
    ),
    steps: z.array(z.string()).describe("The steps to make the recipe"),
  }),
});

export const createRecipe = async (prompt: string) => {
  const result = streamObject({
    model,
    schema,
    prompt,
    schemaName: "Recipe",
    schemaDescription: "",
    system:
      `You are helping a user create a recipe. ` +
      `Use British English variantsof ingredient names, ` +
      `like Coriander over Cilantro`,
  });

  for await (const obj of result.partialObjectStream) {
    console.clear();
    console.dir(obj, { depth: null });
  }

  const finalObject = await result.object;

  return finalObject.recipe;
};

const recipe = await createRecipe("How to make ragi muddhe and koli saaru");

// const recipe = await createRecipe("How to make baba ganoush");
//
// console.log("recipe: ", recipe);
