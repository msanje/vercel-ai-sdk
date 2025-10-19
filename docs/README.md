# Vercel AI SDK Exploration Project

A comprehensive exploration of the Vercel AI SDK showcasing various AI capabilities including text generation, image analysis, PDF extraction, tool calling, structured outputs, vector embeddings, and local LLM integration.

## 🚀 Features Explored

### 1. **Basic Text Generation & Server Setup**

- **Files**: `src/core/main.ts`, `src/core/server.ts`, `src/core/models.ts`
- **Capabilities**:
  - HTTP server with Hono framework
  - Basic text completion using Anthropic Claude models
  - Message-based conversation handling
  - RESTful API endpoints for AI completions

### 2. **Tool Calling & Function Execution**

- **Files**: `src/examples/agent.ts`, `src/examples/tool_calling.ts`
- **Capabilities**:
  - Dynamic tool creation with Zod schemas
  - Weather API simulation
  - Console logging tools
  - Stream-based tool execution
  - Step-by-step tool call tracking

### 3. **Image Analysis & Description**

- **File**: `src/examples/describe-images.ts`
- **Capabilities**:
  - Image-to-text description generation
  - Support for local files and URLs
  - Alt-text generation for accessibility
  - Image analysis with custom prompts

### 4. **PDF Document Processing**

- **File**: `src/examples/extract-from-pdf.ts`
- **Capabilities**:
  - PDF text extraction and analysis
  - Structured data extraction from invoices
  - Schema-based data validation with Zod
  - Invoice parsing (total, currency, addresses, etc.)

### 5. **Structured Output Generation**

- **File**: `src/examples/structured-output.ts`
- **Capabilities**:
  - Recipe generation with streaming
  - Complex nested object creation
  - Real-time partial object streaming
  - Schema-driven content generation

### 6. **Enum Classification**

- **File**: `src/examples/generate-enum.ts`
- **Capabilities**:
  - Sentiment analysis (positive/negative/neutral)
  - Enum-based classification
  - Simple prompt-based categorization

### 7. **Local LLM Integration**

- **File**: `src/examples/local-llm.single-file.ts`
- **Capabilities**:
  - LM Studio integration
  - Local model hosting support
  - OpenAI-compatible API usage
  - Localhost model connections

### 8. **Vector Embeddings & Similarity Search**

- **File**: `src/examples/vector_embeddings.ts`
- **Capabilities**:
  - Text embedding generation
  - Cosine similarity calculations
  - Vector database simulation
  - Semantic search functionality

## 🛠️ Technology Stack

- **Runtime**: Bun (v1.2.12+)
- **AI SDK**: Vercel AI SDK v5.0.76
- **Models**:
  - Anthropic Claude 3.5 Haiku
  - Cohere Embeddings
  - OpenAI Compatible (LM Studio)
- **Frameworks**:
  - Hono (web framework)
  - Zod (schema validation)
- **Language**: TypeScript with strict configuration

## 📦 Dependencies

```json
{
  "@ai-sdk/anthropic": "^2.0.33",
  "@ai-sdk/cohere": "^2.0.14",
  "@ai-sdk/openai": "^2.0.52",
  "@ai-sdk/openai-compatible": "^1.0.22",
  "@ai-sdk/vercel": "^1.0.23",
  "@hono/node-server": "^1.19.5",
  "ai": "^5.0.76",
  "hono": "^4.10.1",
  "zod": "^4.1.12"
}
```

## 🚀 Quick Start

### Installation

```bash
bun install
```

### Running Examples

#### Basic Text Generation

```bash
bun run src/core/main.ts
```

#### PDF Data Extraction

```bash
bun run src/examples/extract-from-pdf.ts
```

#### Image Description

```bash
bun run src/examples/describe-images.ts
```

#### Tool Calling

```bash
bun run src/examples/agent.ts
```

#### Structured Output (Recipe Generation)

```bash
bun run src/examples/structured-output.ts
```

#### Sentiment Analysis

```bash
bun run src/examples/generate-enum.ts
```

#### Local LLM

```bash
bun run src/examples/local-llm.single-file.ts
```

#### Vector Embeddings

```bash
bun run src/examples/vector_embeddings.ts
```

## 🔧 Configuration

### Environment Setup

- Ensure you have API keys configured for:
  - Anthropic (for Claude models)
  - Cohere (for embeddings)
  - OpenAI (if using OpenAI models)
- API keys should be stored in `config/keys.txt`

### Local LLM Setup

- Install and run LM Studio on localhost:1234
- Or configure any OpenAI-compatible endpoint
- Configuration files are located in `config/` directory

## 📁 Project Structure

```
vercel-ai-sdk/
├── src/
│   ├── examples/           # All example implementations
│   │   ├── agent.ts
│   │   ├── describe-images.ts
│   │   ├── extract-from-pdf.ts
│   │   ├── generate-enum.ts
│   │   ├── local-llm.single-file.ts
│   │   ├── structured-output.ts
│   │   ├── tool_calling.ts
│   │   └── vector_embeddings.ts
│   ├── core/              # Core application files
│   │   ├── main.ts
│   │   ├── models.ts
│   │   └── server.ts
│   └── utils/             # Utility functions
│       └── utils.ts
├── assets/                # Static assets
│   ├── images/
│   │   └── fireworks.jpg
│   └── documents/
│       └── sale_invoice.pdf
├── config/                # Configuration files
│   ├── tsconfig.json
│   └── keys.txt
├── data/                  # Sample data
│   └── example.json
├── docs/                  # Documentation
│   └── README.md
├── package.json
├── bun.lock
└── node_modules/
```

### 🏗️ **Structure Benefits**

- **📁 Organized Examples**: All AI SDK examples are grouped in `src/examples/` for easy discovery
- **🔧 Core Logic Separation**: Main application files are in `src/core/` for better maintainability
- **🛠️ Utility Functions**: Shared utilities are in `src/utils/` for reusability
- **📦 Asset Management**: Images and documents are properly organized in `assets/`
- **⚙️ Configuration**: All config files are centralized in `config/`
- **📊 Sample Data**: Example data is separated in `data/`
- **📚 Documentation**: README and docs are in `docs/` for better organization

## 🎯 Key Concepts Demonstrated

### 1. **Streaming vs Non-Streaming**

- `generateText()` for simple completions
- `streamText()` for real-time streaming
- `streamObject()` for structured streaming

### 2. **Schema Validation**

- Zod schemas for input/output validation
- Type-safe AI interactions
- Structured data extraction

### 3. **Multi-Modal AI**

- Text generation
- Image analysis
- PDF processing
- File handling

### 4. **Tool Integration**

- Function calling capabilities
- External API integration
- Custom tool creation

### 5. **Vector Operations**

- Embedding generation
- Similarity calculations
- Semantic search

## 🔍 Advanced Features

### Streaming Objects

Real-time generation of complex nested objects with partial updates:

```typescript
const result = streamObject({
  model,
  schema,
  prompt,
  schemaName: "Recipe",
  schemaDescription: "",
  system: "You are helping a user create a recipe...",
});

for await (const obj of result.partialObjectStream) {
  console.dir(obj, { depth: null });
}
```

### Tool Calling with Steps

Track tool execution steps and results:

```typescript
const { steps } = await generateText({
  model,
  prompt,
  tools: { getWeather: getWeatherTool },
});

console.dir(steps[0]?.toolResults, { depth: null });
```

### Vector Similarity Search

Semantic search using embeddings:

```typescript
const entries = vectorDatabase.map((entry) => ({
  value: entry.value,
  similarity: cosineSimilarity(entry.embedding, searchTerm.embedding),
}));
```

## 🎨 Project Ideas & Future Development

Based on the explored features, here are exciting projects you can build:

### 🤖 **AI-Powered Applications**

1. **Smart Document Processor**

   - Multi-format document analysis (PDF, images, text)
   - Automated data extraction and validation
   - Document classification and routing

2. **Intelligent Recipe Assistant**

   - Ingredient substitution suggestions
   - Nutritional analysis
   - Cooking time optimization
   - Dietary restriction filtering

3. **AI Content Moderation System**

   - Real-time sentiment analysis
   - Content classification
   - Automated moderation workflows

4. **Personal Knowledge Base**
   - Vector-based document search
   - Semantic question answering
   - Knowledge graph construction

### 🛠️ **Developer Tools**

5. **AI Code Assistant**

   - Code generation with tool calling
   - Automated testing and debugging
   - Documentation generation

6. **API Documentation Generator**

   - Automatic endpoint documentation
   - Example generation
   - Interactive API explorer

7. **Local LLM Management Dashboard**
   - Model switching interface
   - Performance monitoring
   - Cost optimization

### 🎯 **Business Applications**

8. **Invoice Processing Automation**

   - Automated invoice data extraction
   - Approval workflows
   - Financial reporting

9. **Customer Support Bot**

   - Multi-modal support (text, images)
   - Tool integration for account actions
   - Escalation management

10. **E-commerce Product Assistant**
    - Image-based product search
    - Recommendation engine
    - Inventory management

### 🎨 **Creative Projects**

11. **AI Art Gallery**

    - Image description and tagging
    - Style analysis and classification
    - Artist recommendation system

12. **Interactive Story Generator**

    - Character development
    - Plot generation
    - Reader interaction tools

13. **Music Recommendation Engine**
    - Lyric analysis
    - Mood classification
    - Playlist generation

### 🔬 **Research & Analytics**

14. **Research Paper Analyzer**

    - PDF content extraction
    - Citation analysis
    - Research trend identification

15. **Social Media Analytics**

    - Sentiment tracking
    - Trend analysis
    - Influencer identification

16. **Market Research Assistant**
    - Document analysis
    - Competitive intelligence
    - Report generation

### 🏥 **Specialized Applications**

17. **Medical Document Processor**

    - Patient record analysis
    - Symptom classification
    - Treatment recommendation

18. **Legal Document Analyzer**

    - Contract review
    - Compliance checking
    - Risk assessment

19. **Educational Content Generator**
    - Quiz creation
    - Learning material generation
    - Progress tracking

### 🌐 **Web Applications**

20. **AI-Powered Search Engine**

    - Semantic search capabilities
    - Multi-modal search
    - Personalized results

21. **Real-time Collaboration Platform**

    - AI meeting assistant
    - Document collaboration
    - Task automation

22. **Personal AI Assistant**
    - Calendar management
    - Email processing
    - Task automation

### 🎮 **Interactive Experiences**

23. **AI Game Master**

    - Dynamic story generation
    - Character interaction
    - World building

24. **Virtual Tutor**

    - Personalized learning
    - Progress tracking
    - Interactive lessons

25. **AI Fitness Coach**
    - Workout generation
    - Progress analysis
    - Nutrition planning

---

## 🚀 Getting Started with Your Own Project

1. **Choose a focus area** from the project ideas above
2. **Start with a simple version** using the existing examples
3. **Iterate and expand** with additional AI capabilities
4. **Integrate tools and APIs** for enhanced functionality
5. **Deploy and scale** your application

Each project can leverage the powerful features demonstrated in this codebase:

- **Structured outputs** for consistent data
- **Tool calling** for external integrations
- **Streaming** for real-time experiences
- **Multi-modal AI** for rich interactions
- **Vector embeddings** for semantic understanding

Happy building! 🎉
