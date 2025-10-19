import { openai } from "@ai-sdk/openai";
import { embedMany, embed, cosineSimilarity } from "ai";
import { cohere } from "@ai-sdk/cohere";

// we can get one lm studio from our locally running model as well
// const model = openai.embedding("text-embedding-3-small");
const model = cohere.embedding("embed-english-v3.0");

const values = ["Dog", "Cat", "Car", "Bike"];

const { embeddings } = await embedMany({
  model: model,
  values,
});

const vectorDatabase = embeddings.map((embedding, index) => ({
  value: values[index],
  embedding,
}));

const searchTerm = await embed({
  model: model,
  value: "Clutch",
});

const entries = vectorDatabase.map((entry) => {
  return {
    value: entry.value,
    similarity: cosineSimilarity(entry.embedding, searchTerm.embedding),
  };
});

// this will return Dog at the top, because that's the one that's most similar or rather close to the word Canine
const sortedEntries = entries.sort((a, b) => b.similarity - a.similarity);

console.dir(sortedEntries, { depth: null });

// console.dir(embeddings, { depth: null });
