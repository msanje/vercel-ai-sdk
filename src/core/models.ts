import { anthropic } from "@ai-sdk/anthropic";

export const smallAnthropicModel = anthropic("claude-3-5-haiku-latest");

export const smallToolCallingModel = smallAnthropicModel;
