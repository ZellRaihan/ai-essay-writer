import Link from "next/link"
import styles from "@/styles/MarketingContent.module.css"

export default function MarketingContent() {
  return (
    <div className={styles.container}>
      <section className={`${styles.section} ${styles.introSection}`} aria-label="Introduction to AI Essay Writer">
        <div className={styles.sectionTitleContainer}>
          <h2 className={styles.sectionTitle}>About AI Essay Writer</h2>
        </div>
        <div className={styles.introContent}>
          <div className={styles.introText}>
            <p className={styles.paragraph}>
              AI Essay Writer is an AI tool that can transform your ideas into well-structured, engaging essays. This
              transformation ensures your essays are well organized, well-researched, and clear, saving you hours of research
              and writing time.
            </p>
            <p className={styles.paragraph}>
              Our AI Essay Generator helps you generate essays with various features such as academic formatting, proper citations, logical
              structure, engaging introductions, and strong conclusions, all contributing to the creation of essays that
              meet academic standards while maintaining your unique perspective.
            </p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className={styles.section} aria-label="How Our Essay Generator Works">
        <h2 className={styles.sectionTitle}>How Can You Generate Essays for Free?</h2>
        <p className={styles.paragraph}>
          Creating high-quality essays is now effortless and free with our AI Essay Writer, following these simple
          steps:
        </p>
        <div className={styles.steps} itemScope itemType="https://schema.org/HowTo">
          <meta itemProp="name" content="How to Generate Essays with AI Essay Writer" />
          <meta itemProp="description" content="Step-by-step guide to creating essays using our free AI Essay Writer tool" />
          
          <div className={styles.step} itemProp="step" itemScope itemType="https://schema.org/HowToStep">
            <meta itemProp="position" content="1" />
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent} itemProp="text">
              <p>Enter your essay topic in the designated area.</p>
            </div>
          </div>
          <div className={styles.step} itemProp="step" itemScope itemType="https://schema.org/HowToStep">
            <meta itemProp="position" content="2" />
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent} itemProp="text">
              <p>Select your essay type, academic level, and customize other settings to match your requirements.</p>
            </div>
          </div>
          <div className={styles.step} itemProp="step" itemScope itemType="https://schema.org/HowToStep">
            <meta itemProp="position" content="3" />
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent} itemProp="text">
              <p>Click the "Generate Essay" button to initiate the creation process.</p>
            </div>
          </div>
          <div className={styles.step} itemProp="step" itemScope itemType="https://schema.org/HowToStep">
            <meta itemProp="position" content="4" />
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent} itemProp="text">
              <p>Review the well-structured, plagiarism-free essay that meets academic standards.</p>
            </div>
          </div>
          <div className={styles.step} itemProp="step" itemScope itemType="https://schema.org/HowToStep">
            <meta itemProp="position" content="5" />
            <div className={styles.stepNumber}>5</div>
            <div className={styles.stepContent} itemProp="text">
              <p>Copy the essay, edit as necessary, and use it as a foundation for your work.</p>
            </div>
          </div>
        </div>
        <p className={styles.paragraph}>
          And there you have it! A well-structured essay that can serve as an excellent starting point for your academic
          or professional writing needs.
        </p>
      </section>

      <section className={styles.section} aria-label="Benefits of AI Essay Writer">
        <h2 className={styles.sectionTitle}>Advantages of the AI Essay Writer Tool</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <h3>Creates Well-Structured Essays</h3>
            <p>
              Generates essays with proper introduction, body paragraphs, and conclusion, ensuring logical flow and
              coherence.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <h3>Guaranteed Plagiarism-Free Content</h3>
            <p>
              Originality is crucial in academic writing. Our tool provides unique content, ensuring your essays stand
              out.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <h3>Multiple Essay Types</h3>
            <p>
              Supports various essay types including academic, argumentative, descriptive, narrative, and more to suit
              your specific needs.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <h3>Customizable Output</h3>
            <p>
              Adjust tone, length, academic level, and citation style to match your specific requirements and
              preferences.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <h3>Boosts Productivity</h3>
            <p>Save time and effort with this tool, increasing your efficiency in creating well-structured essays.</p>
          </div>
          <div className={styles.benefitCard}>
            <h3>Exceptional Content Quality</h3>
            <p>
              Expect high-quality content with proper grammar, coherent arguments, and smooth transitions between
              paragraphs.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className={styles.section} aria-label="Features of AI Essay Writer">
        <h2 className={styles.sectionTitle}>Features of the AI Essay Writer Tool</h2>
        <div className={styles.featuresGrid} itemScope itemType="https://schema.org/ItemList">
          <meta itemProp="itemListOrder" content="Unordered" />
          <meta itemProp="name" content="AI Essay Writer Features" />
          
          <div className={styles.featureItem} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <meta itemProp="position" content="1" />
            <div itemProp="item" itemScope itemType="https://schema.org/Thing">
              <h3 itemProp="name">Multiple Essay Types</h3>
              <p itemProp="description">
                Generate various essay types including academic, argumentative, narrative, descriptive, persuasive,
                comparative, analytical, and more.
              </p>
            </div>
          </div>
          <div className={styles.featureItem} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <meta itemProp="position" content="2" />
            <div itemProp="item" itemScope itemType="https://schema.org/Thing">
              <h3 itemProp="name">Adjustable Word Count</h3>
              <p itemProp="description">Control the length of your essay from 250 to 2000 words to meet specific requirements.</p>
            </div>
          </div>
          <div className={styles.featureItem} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <meta itemProp="position" content="3" />
            <div itemProp="item" itemScope itemType="https://schema.org/Thing">
              <h3 itemProp="name">Academic Level Selection</h3>
              <p itemProp="description">
                Choose from high school, undergraduate, graduate, or professional levels to match your educational needs.
              </p>
            </div>
          </div>
          <div className={styles.featureItem} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <meta itemProp="position" content="4" />
            <div itemProp="item" itemScope itemType="https://schema.org/Thing">
              <h3 itemProp="name">Citation Style Options</h3>
              <p itemProp="description">Select from MLA, APA, Chicago, Harvard, or IEEE citation styles for properly formatted references.</p>
            </div>
          </div>
          <div className={styles.featureItem} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <meta itemProp="position" content="5" />
            <div itemProp="item" itemScope itemType="https://schema.org/Thing">
              <h3 itemProp="name">Outline Generation</h3>
              <p itemProp="description">
                Option to generate a detailed outline before creating the full essay, allowing you to review and refine
                the structure.
              </p>
            </div>
          </div>
          <div className={styles.featureItem} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <meta itemProp="position" content="6" />
            <div itemProp="item" itemScope itemType="https://schema.org/Thing">
              <h3 itemProp="name">Keyword Focus</h3>
              <p itemProp="description">Specify keywords or concepts you want emphasized in your essay for more targeted content.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Who Can Benefit from the AI Essay Writer Tool?</h2>
        <div className={styles.beneficiariesGrid}>
          <div className={styles.beneficiaryItem}>
            <h3>Students</h3>
            <p>
              From high school to graduate level, students can use our tool to help with assignments, research papers,
              and thesis projects.
            </p>
          </div>
          <div className={styles.beneficiaryItem}>
            <h3>Researchers & Academics</h3>
            <p>
              Generate initial drafts for research papers, literature reviews, or academic articles to save time on
              structuring.
            </p>
          </div>
          <div className={styles.beneficiaryItem}>
            <h3>Content Creators & Writers</h3>
            <p>Streamline your writing process by generating structured content that you can refine and personalize.</p>
          </div>
          <div className={styles.beneficiaryItem}>
            <h3>Business Professionals</h3>
            <p>Create well-structured reports, proposals, or business communications efficiently.</p>
          </div>
          <div className={styles.beneficiaryItem}>
            <h3>Non-Native English Speakers</h3>
            <p>Get assistance with proper English structure, grammar, and academic conventions for your essays.</p>
          </div>
          <div className={styles.beneficiaryItem}>
            <h3>Educators & Tutors</h3>
            <p>Generate example essays to help teach essay structure and writing techniques to students.</p>
          </div>
        </div>
      </section>

      <section id="faq" className={styles.section} aria-label="Frequently Asked Questions">
        <h2 className={styles.sectionTitle}>Frequently Asked Questions (FAQ) about AI Essay Writer</h2>
        <div className={styles.faqContainer}>
          <div className={styles.faqItem}>
            <h3>Q1: What is AI Essay Writer?</h3>
            <p>
              A1: AI Essay Writer is a leading online essay generation tool that creates well-structured, coherent
              essays on any topic. It's ideal for students, researchers, and professionals looking to save time and
              overcome writer's block.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Q2: How does the AI Essay Writer tool work?</h3>
            <p>
              A2: The tool uses advanced AI language models to generate essays based on your topic and preferences.
              Simply enter your topic, select essay type and other settings, and our AI creates a well-structured essay
              tailored to your requirements.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Q3: Is the AI Essay Writer tool free to use?</h3>
            <p>
              A3: Yes, our AI Essay Writer is completely free, offering unlimited access without any hidden charges.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Q4: Can I use the essays for academic purposes?</h3>
            <p>
              A4: Our AI Essay Writer is designed to be a helpful tool for research, brainstorming, and learning. While
              the essays can provide valuable insights and structure, we recommend using them as a starting point rather
              than submitting them directly as your own work. Always follow your institution's academic integrity
              policies.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Q5: How accurate is the information in the generated essays?</h3>
            <p>
              A5: Our AI strives to provide accurate information based on its training data, but it may occasionally
              contain errors or outdated information. We recommend fact-checking important claims, especially for
              academic or professional use.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3>Q6: What essay types does the tool support?</h3>
            <p>
              A6: Our tool supports multiple essay types including academic, argumentative, narrative, descriptive,
              persuasive, comparative, analytical, research, and more to suit your specific needs.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-label="Call to Action">
        <h2>Ready to Create Your Essay?</h2>
        <p>Generate well-structured, engaging essays on any topic in seconds - no signup required.</p>
        <Link href="#generator" className={styles.ctaButton}>
          Try AI Essay Writer Now
        </Link>
      </section>
    </div>
  )
}

