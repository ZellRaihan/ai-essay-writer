"use client"

import { useState, useRef, useEffect } from "react"
import styles from "@/styles/EssayGenerator.module.css"

export default function EssayGenerator() {
  const [topic, setTopic] = useState("")
  const [essayType, setEssayType] = useState("basic")
  const [wordCount, setWordCount] = useState(500)
  const [formalTone, setFormalTone] = useState(true)
  const [loading, setLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState("")
  const [essay, setEssay] = useState("")
  const [academicLevel, setAcademicLevel] = useState("undergraduate")
  const [citationStyle, setCitationStyle] = useState("none")
  const [perspective, setPerspective] = useState("third")
  const [includeThesis, setIncludeThesis] = useState(true)
  const [includeCounterArguments, setIncludeCounterArguments] = useState(false)
  const [keywordFocus, setKeywordFocus] = useState("")
  const [showOutlineFirst, setShowOutlineFirst] = useState(false)
  const [outline, setOutline] = useState("")
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false)
  const [readingTime, setReadingTime] = useState(0)
  const [humanize, setHumanize] = useState(true)
  const [selectedModel, setSelectedModel] = useState("gpt-4o")
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [generatedOutline, setGeneratedOutline] = useState<string | null>(null)
  const [generatedEssay, setGeneratedEssay] = useState<string | null>(null)
  const [generationSteps, setGenerationSteps] = useState<string[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  const [copySuccess, setCopySuccess] = useState(false)
  const [downloadSuccess, setDownloadSuccess] = useState(false)
  const [shareSuccess, setShareSuccess] = useState(false)
  const [sparkles, setSparkles] = useState<{ id: number; style: React.CSSProperties }[]>([])
  const loadingRef = useRef<HTMLDivElement>(null)
  const essayRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const sparkleCount = useRef(0)

  const models = [
    { id: "gpt-4o", name: "GPT-4o", description: "OpenAI's most advanced multimodal model" },
    { id: "gpt-4o-mini", name: "GPT-4o-mini", description: "Affordable, efficient AI solution" },
    { id: "phi-4-multimodal", name: "Phi-4-multimodal-instruct", description: "First small multimodal model with 3 modality inputs" },
    { id: "phi-3.5-moe", name: "Phi-3.5-MoE-instruct", description: "New mixture of experts model" },
    { id: "phi-3.5-mini", name: "Phi-3.5-mini-instruct", description: "Compact model with strong capabilities" },
    { id: "phi-3.5-vision", name: "Phi-3.5-vision-instruct", description: "Vision-enabled reasoning model" },
    { id: "phi-3-medium", name: "Phi-3-medium-128k-instruct", description: "Extended context model for longer documents" },
    { id: "ai21-jamba", name: "AI21-Jamba-1.5-Large", description: "Powerful language model with strong reasoning" },
    { id: "deepseek-r1", name: "DeepSeek-R1", description: "Excels at reasoning tasks" },
    { id: "deepseek-v3", name: "DeepSeek-V3", description: "Strong Mixture-of-Experts model" },
    { id: "llama-3.3-70b", name: "Llama-3.3-70B-Instruct", description: "Enhanced reasoning and math capabilities" },
    { id: "mistral-small-2503", name: "mistral-small-2503", description: "Compact model with strong performance" },
    { id: "ministral-3b", name: "Ministral-3B", description: "Optimized for edge computing" }
  ]

  // Function to add sparkle effect
  const addSparkle = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const button = buttonRef.current
      const rect = button.getBoundingClientRect()
      
      // Get position relative to the button
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // Create 5 sparkles at once
      const newSparkles = Array.from({ length: 5 }, (_, i) => {
        // Calculate random position around click point
        const sparkleX = x + (Math.random() * 20 - 10)
        const sparkleY = y + (Math.random() * 20 - 10)
        
        return {
          id: sparkleCount.current++,
          style: {
            left: `${sparkleX}px`,
            top: `${sparkleY}px`,
            animationDelay: `${Math.random() * 300}ms`
          }
        }
      })
      
      setSparkles(prev => [...prev, ...newSparkles])
      
      // Remove sparkles after animation completes
      setTimeout(() => {
        setSparkles(prev => 
          prev.filter(sparkle => !newSparkles.find(s => s.id === sparkle.id))
        )
      }, 1000)
    }
  }

  // Scroll to section after essay generation starts
  useEffect(() => {
    if (loading && loadingRef.current) {
      loadingRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else if (generatedEssay && essayRef.current) {
      essayRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [loading, generatedEssay])

  const handleGenerate = async () => {
    if (!topic) return

    setLoading(true)
    setIsGenerating(true)
    setProgress(0)
    setCurrentStep(0)
    setGenerationSteps([])
    setError(null)
    setGeneratedEssay(null)
    setGeneratedOutline(null)

    try {
      // Step 1: Initializing
      setLoadingMessage("Initializing essay generation...")
      setGenerationSteps(prev => [...prev, "Initializing"])
      setProgress(10)
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Step 2: Analyzing topic
      setLoadingMessage("Analyzing your topic...")
      setGenerationSteps(prev => [...prev, "Analyzing topic"])
      setCurrentStep(1)
      setProgress(20)
      await new Promise(resolve => setTimeout(resolve, 1500))

      if (showOutlineFirst && !outline) {
        // Step 3: Generating outline
        setLoadingMessage("Creating essay outline...")
        setGenerationSteps(prev => [...prev, "Generating outline"])
        setCurrentStep(2)
        setProgress(30)
        
        try {
          const outlineResponse = await fetch("/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              topic,
              essayType,
              wordCount: Math.floor(wordCount * 0.2),
              formalTone,
              academicLevel,
              citationStyle,
              perspective,
              includeThesis,
              includeCounterArguments,
              keywordFocus,
              isOutline: true,
              model: selectedModel
            })
          })

          if (!outlineResponse.ok) {
            const errorData = await outlineResponse.json()
            console.error("Outline API error:", errorData)
            throw new Error(errorData.error || `Failed to generate outline: ${outlineResponse.status}`)
          }

          const outlineData = await outlineResponse.json()
          setGeneratedOutline(outlineData.essay)
          setProgress(40)
        } catch (outlineError) {
          console.error("Outline generation error:", outlineError)
          throw new Error(outlineError instanceof Error ? outlineError.message : "Failed to generate outline")
        }
      }

      // Step 4: Researching
      setLoadingMessage("Researching relevant information...")
      setGenerationSteps(prev => [...prev, "Researching content"])
      setCurrentStep(3)
      setProgress(50)
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Step 5: Writing essay
      setLoadingMessage("Writing your essay...")
      setGenerationSteps(prev => [...prev, "Writing essay"])
      setCurrentStep(4)
      setProgress(60)

      try {
        console.log("Sending API request for essay generation with options:", {
          topic,
          essayType,
          wordCount,
          formalTone,
          academicLevel,
          citationStyle,
          perspective,
          includeThesis,
          includeCounterArguments,
          keywordFocus: keywordFocus || "none",
          outline: generatedOutline ? "Using generated outline" : "No outline",
          humanize,
          model: selectedModel
        });
        
        const response = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
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
            outline: generatedOutline,
            humanize,
            model: selectedModel
          })
        }).catch(err => {
          console.error("Fetch error:", err);
          throw new Error(`Network error: ${err.message}`);
        });

        if (!response.ok) {
          const errorData = await response.json().catch(e => ({ error: `Failed to parse error response: ${e.message}` }));
          console.error("Essay API error:", errorData);
          
          // Check for specific authentication errors and display helpful message
          if (errorData.error && errorData.error.includes("Authentication failed")) {
            throw new Error("API Authentication failed: Please check your GitHub token in .env.local and make sure it has the 'models:read' permission.");
          }
          
          throw new Error(errorData.error || `Failed to generate essay: HTTP ${response.status}`);
        }

        console.log("Response received, parsing JSON...");
        const data = await response.json().catch(e => {
          console.error("JSON parse error:", e);
          throw new Error(`Failed to parse response: ${e.message}`);
        });
        
        console.log("Received data:", data ? "Data exists" : "No data");
        if (!data || !data.essay) {
          console.error("Invalid API response:", data);
          throw new Error("Received invalid response from API - missing essay content");
        }
        
        console.log("Setting essay data...");
        setGeneratedEssay(data.essay);
        setEssay(data.essay);
        
        // Calculate estimated reading time
        const estimatedReadingTime = Math.ceil(wordCount / 225);
        setReadingTime(estimatedReadingTime);

        // Step 6: Refining
        setLoadingMessage("Refining and polishing...");
        setGenerationSteps(prev => [...prev, "Refining content"]);
        setCurrentStep(5);
        setProgress(80);
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Step 7: Finalizing
        setLoadingMessage("Finalizing your essay...");
        setGenerationSteps(prev => [...prev, "Finalizing"]);
        setCurrentStep(6);
        setProgress(90);
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Step 8: Complete
        setProgress(100);
        setLoadingMessage("Essay generated successfully!");
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (apiError) {
        console.error("Essay generation API error:", apiError);
        throw new Error(apiError instanceof Error ? apiError.message : "Failed to generate essay");
      }
    } catch (error) {
      console.error("Error:", error)
      // Display a more user-friendly error message
      if (error instanceof Error) {
        if (error.message.includes("Authentication failed") || error.message.includes("Unauthorized")) {
          setError("Authentication error: Please check your GitHub token or Azure key in .env.local. Make sure your GitHub token has the 'models:read' permission.");
        } else if (error.message.includes("timeout") || error.message.includes("Network error")) {
          setError("Connection error: Please check your internet connection and try again. The API request timed out.");
        } else {
          setError(error.message);
        }
      } else {
        setError("Failed to generate essay: Unknown error");
      }
    } finally {
      setLoading(false)
      setIsGenerating(false)
      setLoadingMessage("")
      setProgress(0)
      setCurrentStep(0)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(essay)
    setCopySuccess(true)
    setTimeout(() => setCopySuccess(false), 2000)
  }

  const handleDownload = () => {
    const blob = new Blob([essay], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `essay-${topic.replace(/\s+/g, "-").toLowerCase()}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    setDownloadSuccess(true)
    setTimeout(() => setDownloadSuccess(false), 2000)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `AI Essay: ${topic}`,
          text: essay,
        })
        setShareSuccess(true)
      } catch (error) {
        console.error('Error sharing:', error)
      }
    } else {
      // Fallback for browsers that don't support navigator.share
      handleCopy()
      alert('Essay copied to clipboard! You can now paste it to share.')
    }
    setTimeout(() => setShareSuccess(false), 2000)
  }

  const handleContinueFromOutline = () => {
    setLoading(true)
    handleGenerate()
  }

  const handleResetOutline = () => {
    setOutline("")
  }

  const handleReset = () => {
    setTopic("")
    setEssayType("basic")
    setWordCount(500)
    setFormalTone(true)
    setAcademicLevel("undergraduate")
    setCitationStyle("none")
    setPerspective("third")
    setIncludeThesis(true)
    setIncludeCounterArguments(false)
    setKeywordFocus("")
    setShowOutlineFirst(false)
    setOutline("")
    setEssay("")
    setReadingTime(0)
    setHumanize(true)
  }

  // Add this function to get model provider
  const getModelProvider = (modelId: string) => {
    if (modelId.includes('gpt') || modelId.includes('o1') || modelId.includes('o3')) return 'OpenAI'
    if (modelId.includes('mistral')) return 'Mistral AI'
    if (modelId.includes('llama')) return 'Meta'
    if (modelId.includes('phi')) return 'Microsoft'
    if (modelId.includes('deepseek')) return 'DeepSeek'
    if (modelId.includes('codestral')) return 'Mistral AI'
    if (modelId.includes('ministral')) return 'Mistral AI'
    return 'Other'
  }

  // Add this function to get model logo
  const getModelLogo = (provider: string) => {
    switch (provider) {
      case 'OpenAI':
        return '/openai-logo.png'
      case 'Mistral AI':
        return '/mistral-logo.png'
      case 'Meta':
        return '/meta-logo.png'
      case 'Microsoft':
        return '/microsoft-logo.png'
      case 'DeepSeek':
        return '/deepseek-logo.png'
      default:
        return '/ai-logo.png'
    }
  }

  return (
    <section id="generator" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>AI Essay Writer</h2>
          <p className={styles.tagline}>Write Better Essays, Faster</p>
        </div>

        <div className={styles.mainCard}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Essay Settings</h3>
          </div>

          <div className={styles.cardContent}>
            <div className={styles.inputForm}>
              <div className={styles.formGroup}>
                <label htmlFor="topic" className={styles.label}>
                  Essay Topic
                  <span className={styles.required}>*</span>
                </label>
                <p className={styles.helpText}>
                  Be specific about your topic for better results. Include key points or questions you want addressed in
                  the essay.
                </p>
                <textarea
                  id="topic"
                  placeholder="E.g., The impact of artificial intelligence on modern education..."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className={styles.textarea}
                />
              </div>

              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="essay-type" className={styles.label}>
                    Essay Type
                  </label>
                  <select
                    id="essay-type"
                    value={essayType}
                    onChange={(e) => setEssayType(e.target.value)}
                    className={styles.select}
                  >
                    <option value="basic">Basic - Simple structure and language</option>
                    <option value="descriptive">Descriptive - Creates a vivid picture with words</option>
                    <option value="narrative">Narrative - Tells a story or experience</option>
                    <option value="persuasive">Persuasive - Convinces the reader of a viewpoint</option>
                    <option value="comparative">Comparative - Compares multiple subjects or ideas</option>
                    <option value="argumentative">Argumentative - Presents a position with evidence</option>
                    <option value="analytical">Analytical - Breaks down complex topics</option>
                    <option value="research">Research - Incorporates scholarly sources</option>
                    <option value="compare">Compare - Focuses on similarities between subjects</option>
                    <option value="academic">Academic - Formal analysis with research</option>
                    <option value="memoir">Memoir - Personal reflection or experience</option>
                    <option value="critical">Critical - Evaluates strengths and weaknesses</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="academic-level" className={styles.label}>
                    Academic Level
                  </label>
                  <select
                    id="academic-level"
                    value={academicLevel}
                    onChange={(e) => setAcademicLevel(e.target.value)}
                    className={styles.select}
                  >
                    <option value="high-school">High School</option>
                    <option value="undergraduate">Undergraduate (College)</option>
                    <option value="graduate">Graduate / Master's</option>
                    <option value="professional">Professional / Expert</option>
                  </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="word-count" className={styles.label}>
                  Word Count: <span className={styles.wordCountValue}>{wordCount}</span>
                </label>
                <p className={styles.helpText}>
                  Adjust the length of your essay. Shorter essays are concise while longer ones allow for more detailed
                  exploration.
                </p>
                <input
                  type="range"
                  id="word-count"
                  min="250"
                  max="2000"
                  step="50"
                  value={wordCount}
                  onChange={(e) => setWordCount(Number(e.target.value))}
                  className={styles.slider}
                />
                <div className={styles.sliderLabels}>
                  <span>250</span>
                  <span>2000</span>
                </div>
              </div>

                <div className={styles.formGroup}>
                  <label htmlFor="model" className={styles.label}>
                    AI Model
                  </label>
                  <select
                    id="model"
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className={styles.select}
                  >
                    {models.map((model) => (
                      <option key={model.id} value={model.id}>
                        {model.name}
                      </option>
                    ))}
                  </select>
                  <p className={styles.helpText}>
                    {models.find(m => m.id === selectedModel)?.description}
                  </p>
                </div>

                <div className={styles.advancedOptionsSection}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>
                      Advanced Options
                <button
                  type="button"
                  onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
                  className={styles.toggleButton}
                >
                        {showAdvancedOptions ? "Hide" : "Show"}
                </button>
                    </label>
              </div>

              {showAdvancedOptions && (
                <div className={styles.advancedOptions}>
                    <div className={styles.formGroup}>
                      <label htmlFor="citation-style" className={styles.label}>
                        Citation Style
                      </label>
                      <select
                        id="citation-style"
                        value={citationStyle}
                        onChange={(e) => setCitationStyle(e.target.value)}
                        className={styles.select}
                      >
                          <option value="none">No Citations</option>
                          <option value="mla">MLA</option>
                          <option value="apa">APA</option>
                          <option value="chicago">Chicago</option>
                          <option value="harvard">Harvard</option>
                          <option value="ieee">IEEE</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="perspective" className={styles.label}>
                        Perspective
                      </label>
                      <select
                        id="perspective"
                        value={perspective}
                        onChange={(e) => setPerspective(e.target.value)}
                        className={styles.select}
                      >
                          <option value="third">Third Person</option>
                          <option value="first">First Person</option>
                      </select>
                  </div>

                      <div className={styles.checkboxGroup}>
                        <div className={styles.checkboxSection}>
                          <div className={styles.checkboxSectionHeader}>
                            <span className={styles.checkboxSectionIcon}>✍️</span>
                            <h4 className={styles.checkboxSectionTitle}>Writing Style</h4>
                  </div>
                          <div className={styles.checkboxOptions}>
                    <label className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={formalTone}
                        onChange={(e) => setFormalTone(e.target.checked)}
                        className={styles.checkbox}
                      />
                              <div className={styles.checkboxContent}>
                                <span className={styles.checkboxTitle}>Formal Tone</span>
                                <span className={styles.checkboxDescription}>Use professional and academic language</span>
                              </div>
                            </label>
                            <label className={styles.checkboxLabel}>
                              <input
                                type="checkbox"
                                checked={humanize}
                                onChange={(e) => setHumanize(e.target.checked)}
                                className={styles.checkbox}
                              />
                              <div className={styles.checkboxContent}>
                                <span className={styles.checkboxTitle}>Humanize</span>
                                <span className={styles.checkboxDescription}>Make the content sound more natural</span>
                              </div>
                    </label>
                          </div>
                        </div>

                        <div className={styles.checkboxSection}>
                          <div className={styles.checkboxSectionHeader}>
                            <span className={styles.checkboxSectionIcon}>📑</span>
                            <h4 className={styles.checkboxSectionTitle}>Essay Structure</h4>
                          </div>
                          <div className={styles.checkboxOptions}>
                    <label className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={includeThesis}
                        onChange={(e) => setIncludeThesis(e.target.checked)}
                        className={styles.checkbox}
                      />
                              <div className={styles.checkboxContent}>
                                <span className={styles.checkboxTitle}>Include Thesis Statement</span>
                                <span className={styles.checkboxDescription}>Add a clear main argument</span>
                              </div>
                    </label>
                    <label className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={includeCounterArguments}
                        onChange={(e) => setIncludeCounterArguments(e.target.checked)}
                        className={styles.checkbox}
                      />
                              <div className={styles.checkboxContent}>
                                <span className={styles.checkboxTitle}>Include Counter Arguments</span>
                                <span className={styles.checkboxDescription}>Address opposing viewpoints</span>
                              </div>
                    </label>
                    <label className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={showOutlineFirst}
                        onChange={(e) => setShowOutlineFirst(e.target.checked)}
                        className={styles.checkbox}
                      />
                              <div className={styles.checkboxContent}>
                                <span className={styles.checkboxTitle}>Generate Outline First</span>
                                <span className={styles.checkboxDescription}>Create a structured plan before writing</span>
                              </div>
                    </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className={styles.buttonGroup}>
                  <div className={styles.sparkleWrapper}>
                    <button
                      ref={buttonRef}
                      type="button"
                      onClick={(e) => {
                        addSparkle(e)
                        handleGenerate()
                      }}
                      disabled={loading || !topic}
                      className={`${styles.button} ${styles.primaryButton} ${styles.sparkleButton}`}
                      onMouseMove={addSparkle}
                    >
                      {loading ? "Generating..." : "Generate Essay"}
                      {sparkles.map(sparkle => (
                        <span 
                          key={sparkle.id} 
                          className={styles.sparkle} 
                          style={sparkle.style}
                        />
                      ))}
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className={`${styles.button} ${styles.secondaryButton}`}
                  >
                    Reset
                  </button>
                </div>
              </div>

              {outline && (
                <div className={styles.outlineSection}>
                  <h3 className={styles.outlineTitle}>Generated Outline</h3>
                  <div className={styles.outlineContent}>{outline}</div>
                  <div className={styles.outlineActions}>
                    <button
                      type="button"
                      onClick={handleContinueFromOutline}
                      disabled={loading}
                      className={`${styles.button} ${styles.primaryButton}`}
                    >
                      Continue with Essay
                    </button>
                    <button
                      type="button"
                      onClick={handleResetOutline}
                      className={`${styles.button} ${styles.secondaryButton}`}
                    >
                      Reset Outline
                    </button>
                  </div>
                </div>
              )}

              {loading && (
                <div ref={loadingRef} className={styles.loadingContainer}>
                  <div className={styles.loadingProgress}>
                    <div className={styles.progressBar}>
                      <div 
                        className={styles.progressFill} 
                        style={{ width: `${progress}%` }}
                      />
            </div>
                    <div className={styles.progressText}>{progress}%</div>
          </div>
                  <div className={styles.loadingSpinner} />
                  <p className={styles.loadingText}>{loadingMessage}</p>
                  <div className={styles.generationSteps}>
                    {generationSteps.map((step, index) => (
                      <div 
                        key={index}
                        className={`${styles.step} ${index <= currentStep ? styles.stepActive : ''}`}
                      >
                        <span className={styles.stepIcon}>
                          {index < currentStep ? '✓' : index === currentStep ? '⟳' : '○'}
                        </span>
                        <span className={styles.stepText}>{step}</span>
        </div>
                    ))}
            </div>
          </div>
        )}

              {generatedEssay && (
                <div ref={essayRef} className={styles.essaySection}>
                  <div className={styles.essayHeader}>
                    <h3 className={styles.essayTitle}>Generated Essay</h3>
                    <div className={styles.essayStats}>
                      <span className={styles.wordCountBadge}>
                        {generatedEssay.split(/\s+/).filter(Boolean).length} words
                      </span>
                      <span className={styles.essayMeta}>
                        <span>Reading time: {readingTime} min</span>
                      </span>
            </div>
              </div>

                  {/* Top buttons */}
                  <div className={styles.essayTopActions}>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className={`${styles.button} ${styles.secondaryButton} ${copySuccess ? styles.successButton : ''}`}
                      disabled={copySuccess}
                    >
                      {copySuccess ? (
                        <>
                          <span className={styles.buttonIcon}>✓</span>
                          Copied!
                        </>
                      ) : (
                        <>
                          <span className={styles.buttonIcon}>📋</span>
                          Copy
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handleDownload}
                      className={`${styles.button} ${styles.secondaryButton} ${downloadSuccess ? styles.successButton : ''}`}
                      disabled={downloadSuccess}
                    >
                      {downloadSuccess ? (
                        <>
                          <span className={styles.buttonIcon}>✓</span>
                          Downloaded!
                        </>
                      ) : (
                        <>
                          <span className={styles.buttonIcon}>📥</span>
                          Download
                        </>
                      )}
                </button>
                    <button
                      type="button"
                      onClick={handleShare}
                      className={`${styles.button} ${styles.secondaryButton} ${shareSuccess ? styles.successButton : ''}`}
                      disabled={shareSuccess}
                    >
                      {shareSuccess ? (
                        <>
                          <span className={styles.buttonIcon}>✓</span>
                          Shared!
                        </>
                      ) : (
                        <>
                          <span className={styles.buttonIcon}>🔗</span>
                          Share
                        </>
                      )}
                </button>
              </div>
                  
                  <div className={styles.essayContent}>
                    {generatedEssay.split('\n').map((paragraph, index, paragraphs) => {
                      // Check if this is a section separator (---)
                      if (paragraph.trim() === "---") {
                        return <hr key={index} className={styles.sectionDivider} />;
                      }
                      
                      // If empty line and not following a section heading or divider, skip it to reduce spacing
                      if (!paragraph.trim()) {
                        const prevParagraph = index > 0 ? paragraphs[index-1].trim() : '';
                        // Skip empty lines unless they're essential for structure
                        if (!prevParagraph.startsWith('**') && prevParagraph !== '---') {
                          return null;
                        }
                        return <br key={index} />;
                      }
                      
                      // Handle markdown bold formatting for titles and headings
                      const processedParagraph = paragraph.replace(/\*\*(.*?)\*\*/g, (match, content) => {
                        // If the whole paragraph is bold, it's likely a heading
                        if (match === paragraph.trim()) {
                          return content; // Return just the content to be rendered as heading
                        } else {
                          // For inline bold text, wrap in a span with bold styling
                          return `<span class="boldText">${content}</span>`;
                        }
                      });
                      
                      // Check if this is a main title or section heading pattern 
                      const isTitleFormat = paragraph.trim().startsWith("**") && paragraph.trim().endsWith("**") && 
                                          !paragraph.trim().slice(2, -2).includes("**");
                      const isPreviousEmpty = index > 0 && (paragraphs[index-1].trim() === "" || paragraphs[index-1].trim() === "---");
                      const isMainTitle = (index === 0 || paragraph.trim().startsWith("### ")) && 
                                         (isTitleFormat || paragraph.trim().startsWith("### "));
                                         
                      // Handle Markdown headings (###)
                      if (paragraph.trim().startsWith("### ")) {
                        const headingText = paragraph.trim().replace(/^### /, '');
                        return <h2 key={index} className={styles.essayMainTitle}>{headingText}</h2>;
                      }
                      
                      if (isMainTitle && isTitleFormat) {
                        return <h2 key={index} className={styles.essayMainTitle}>{processedParagraph}</h2>;
                      } else if (isTitleFormat || (isPreviousEmpty && paragraph.trim().startsWith("**") && paragraph.trim().endsWith("**"))) {
                        return <h3 key={index} className={styles.essaySectionHeading}>{processedParagraph}</h3>;
                      } else {
                        // For regular paragraphs, parse any inline bold formatting
                        return <p key={index} dangerouslySetInnerHTML={{ __html: processedParagraph }} />;
                      }
                    }).filter(Boolean)} {/* Filter out null elements */}
            </div>
          </div>
        )}

              {error && (
                <div className={styles.errorContainer}>
                  <div className={styles.errorIcon}>⚠️</div>
                  <h4 className={styles.errorTitle}>Error Generating Essay</h4>
                  <p className={styles.errorMessage}>{error}</p>
                  {error.includes("Authentication") && (
                    <div className={styles.errorHelp}>
                      <p>To fix authentication issues:</p>
                      <ol>
                        <li>Go to <a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer">GitHub Tokens</a></li>
                        <li>Create a new token with <strong>models:read</strong> permission</li>
                        <li>Copy the token to your .env.local file</li>
                        <li>Restart your application</li>
                      </ol>
            </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

