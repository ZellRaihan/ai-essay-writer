import { NextResponse } from "next/server"
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference"
import { AzureKeyCredential } from "@azure/core-auth"

export async function POST(req: Request) {
  console.log("API endpoint called")
  const endpoint = process.env.AZURE_AI_ENDPOINT
  const githubToken = process.env.GITHUB_TOKEN
  const azureKey = process.env.AZURE_AI_KEY
  
  // Use either GitHub token or Azure key
  const token = githubToken || azureKey

  console.log("Environment variables:", { 
    endpoint: endpoint ? "present" : "missing", 
    auth: token ? "present" : "missing",
    authType: githubToken ? "GitHub" : azureKey ? "Azure" : "None"
  })

  if (!endpoint || !token) {
    console.log("Missing environment variables")
    return NextResponse.json(
      { error: "Missing required environment variables. Please check your .env.local file." },
      { status: 500 }
    )
  }

  try {
    console.log("Creating client with endpoint:", endpoint)
    const client = ModelClient(
      endpoint,
      new AzureKeyCredential(token)
    )

    const body = await req.json()
    console.log("Request body:", {
      topic: body.topic,
      essayType: body.essayType,
      wordCount: body.wordCount,
      model: body.model,
      // Log all advanced options
      formalTone: body.formalTone,
      academicLevel: body.academicLevel,
      citationStyle: body.citationStyle,
      perspective: body.perspective,
      includeThesis: body.includeThesis,
      includeCounterArguments: body.includeCounterArguments,
      keywordFocus: body.keywordFocus ? "present" : "not provided",
      outline: body.outline ? "present" : "not provided",
      humanize: body.humanize,
      isOutline: body.isOutline
    })
    
    const { 
      topic, 
      essayType, 
      wordCount, 
      formalTone, 
      academicLevel, 
      citationStyle, 
      perspective, 
      includeThesis, 
      includeCounterArguments, 
      keywordFocus, 
      outline,
      humanize,
      model,
      isOutline 
    } = body

    // Map model IDs to actual Azure model names
    const modelMapping: { [key: string]: string } = {
      "gpt-4o": "gpt-4o",
      "gpt-4o-mini": "gpt-4o-mini",
      "phi-4-multimodal": "phi-4-multimodal-instruct",
      "phi-3.5-moe": "phi-3.5-moe-instruct",
      "phi-3.5-mini": "phi-3.5-mini-instruct",
      "phi-3.5-vision": "phi-3.5-vision-instruct",
      "phi-3-medium": "phi-3-medium-128k-instruct",
      "ai21-jamba": "AI21-Jamba-1.5-Large",
      "deepseek-r1": "deepseek-r1",
      "deepseek-v3": "deepseek-v3",
      "llama-3.3-70b": "llama-3.3-70b-instruct",
      "mistral-small-2503": "mistral-small-2503",
      "ministral-3b": "Ministral-3B"
    }

    const modelName = modelMapping[model] || "gpt-4o"
    console.log("Selected model:", modelName)

    const prompt = `
      Write a ${formalTone ? "formal" : "casual"} ${isOutline ? "outline for a" : ""} ${essayType} essay about "${topic}".
      ${isOutline ? "The outline should be approximately " + Math.floor(wordCount * 0.2) + " words." : "The essay should be approximately " + wordCount + " words."}
      
      Academic level: ${academicLevel}
      ${citationStyle !== "none" ? `Use ${citationStyle} citation style.` : ""}
      ${perspective === "first" ? "Write in first person perspective." : "Write in third person perspective."}
      ${includeThesis ? "Include a clear thesis statement in the introduction." : ""}
      ${includeCounterArguments ? "Include and address counter-arguments in the essay." : ""}
      ${keywordFocus ? `Emphasize these keywords or concepts: ${keywordFocus}` : ""}
      ${outline ? `Follow this outline: ${outline}` : "Include an introduction, body paragraphs with supporting points, and a conclusion."}
      ${humanize ? "Make the writing sound natural and human-like, avoiding overly formal or robotic language." : ""}
      
      Use appropriate tone, structure, and vocabulary for a ${essayType} essay at the ${academicLevel} level.
    `

    console.log("Making API request to Azure AI")
    try {
      // Log more request details
      console.log("Request parameters:", {
        modelName,
        endpoint,
        authType: githubToken ? "GitHub Token" : "Azure Key"
      });

      // Create the API request (removed timeout)
      const response = await client.path("/chat/completions").post({
        body: {
          messages: [
            {
              role: "system",
              content: "You are an expert essay writer with extensive knowledge across various subjects. Create well-structured, engaging essays with clear arguments and supporting evidence."
            },
            {
              role: "user",
              content: prompt
            }
          ],
          temperature: 0.7,
          top_p: 1.0,
          max_tokens: 2000,
          model: modelName
        }
      });

      console.log("API response received:", {
        status: response.status, 
        hasResponseBody: !!response.body
      });

      if (isUnexpected(response)) {
        console.error("Unexpected response:", JSON.stringify(response.body));
        const error = response.body.error
        
        if (error.code === 'unauthorized' || error.code === 'Unauthorized') {
          if (githubToken) {
            return NextResponse.json(
              { error: "Authentication failed. Your GitHub token might be invalid or missing the 'models:read' permission." },
              { status: 401 }
            )
          } else {
            return NextResponse.json(
              { error: "Authentication failed. Your Azure AI key might be invalid." },
              { status: 401 }
            )
          }
        }
        
        return NextResponse.json(
          { error: `API error: ${error.code} - ${error.message}` },
          { status: 500 }
        );
      }

      // Validate response format
      if (!response.body.choices || !response.body.choices[0].message) {
        console.error("Invalid response format:", JSON.stringify(response.body));
        return NextResponse.json(
          { error: "API returned an invalid response format" },
          { status: 500 }
        );
      }

      const essayContent = response.body.choices[0].message.content;
      console.log("Successfully generated essay:", {
        contentLength: essayContent ? essayContent.length : 0,
        firstFewWords: essayContent ? essayContent.substring(0, 30) + "..." : "No content"
      });

      return NextResponse.json({
        essay: essayContent
      })
    } catch (apiError: any) {
      console.error("API Error:", apiError)
      
      // Check if it's a network error
      if (apiError.message && apiError.message.includes('fetch')) {
        return NextResponse.json(
          { error: "Network error connecting to Azure AI. Check your internet connection and try again." },
          { status: 500 }
        )
      }
      
      throw apiError
    }
  } catch (error) {
    console.error("Error generating essay:", error)
    return NextResponse.json(
      { error: "Failed to generate essay: " + (error instanceof Error ? error.message : "Unknown error") },
      { status: 500 }
    )
  }
} 