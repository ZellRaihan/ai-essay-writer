# AI Essay Writer

A powerful AI-powered essay generation tool built with Next.js, TypeScript, and Azure AI. Generate well-structured, engaging essays on any topic with customizable settings.

## Features

- Generate essays on any topic
- Multiple essay types (academic, argumentative, descriptive, etc.)
- Customizable settings:
  - Word count (250-2000 words)
  - Academic level (high school to professional)
  - Citation styles (MLA, APA, Chicago, etc.)
  - Tone (formal/casual)
  - Perspective (first/third person)
- Outline generation option
- Keyword focus capability
- Copy and download functionality
- Responsive design
- Dark/light theme support

## Prerequisites

- Node.js 18.x or later
- npm or pnpm package manager
- Azure AI API key or GitHub token

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-essay-writer.git
   cd ai-essay-writer
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Create a `.env.local` file in the root directory with your API credentials:
   ```
   # Azure AI Configuration
   AZURE_AI_ENDPOINT="https://models.inference.ai.azure.com"
   AZURE_AI_MODEL="gpt-4o"
   AZURE_AI_KEY="your-key-here"  # Replace with your Azure AI key

   # GitHub Configuration (if using GitHub token)
   GITHUB_TOKEN="your-token-here"  # Replace with your GitHub token
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Enter your essay topic in the text area
2. Select your essay type and academic level
3. Adjust the word count using the slider
4. (Optional) Click "Show Advanced Options" to customize:
   - Citation style
   - Writing perspective
   - Keyword focus
   - Tone and structure options
5. Click "Generate Essay" to create your essay
6. Use the copy or download buttons to save your essay

## API Integration

This project uses Azure AI's inference API for essay generation. You can configure the API endpoint and model in the `.env.local` file.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This tool is intended to assist with essay writing and should be used in accordance with academic integrity policies. Always review and fact-check generated content before using it for academic purposes. 