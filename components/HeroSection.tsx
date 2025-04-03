import Link from "next/link"
import styles from "@/styles/HeroSection.module.css"

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.freeBadge}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.sparkleIcon}
          >
            <path
              d="M12 3L13.5 8.5H19L14.5 12L16 17.5L12 14L8 17.5L9.5 12L5 8.5H10.5L12 3Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          100% Free - No Signup Required
        </div>

        <h1 className={styles.title}>
          <span className={styles.mainTitle}>AI Essay Writer</span>
          <span className={styles.tagline}>Write Better Essays, Faster</span>
        </h1>

        <p className={styles.subtitle}>
          Create well-structured, engaging essays on any topic with our free AI Essay Writer. No signup required. Perfect for students, professionals, and content creators.
        </p>

        <div className={styles.features}>
          <div className={styles.featureItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 13L9 17L19 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Multiple essay types</span>
          </div>
          <div className={styles.featureItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 13L9 17L19 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Adjustable length & tone</span>
          </div>
          <div className={styles.featureItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 13L9 17L19 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Instant results</span>
          </div>
        </div>

        <Link href="#generator" className={styles.ctaButton}>
          <span className={styles.btnContent}>
            <span className={styles.sparkleWrapper}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.btnSparkle}>
                <path d="M12 3L13.5 8.5H19L14.5 12L16 17.5L12 14L8 17.5L9.5 12L5 8.5H10.5L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="white" />
              </svg>
            </span>
            Generate Essay
          </span>
        </Link>

        <div className={styles.noLimits}>No credit card • No account • No limitations</div>
      </div>
    </section>
  )
}

