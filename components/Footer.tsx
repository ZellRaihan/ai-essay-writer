import Link from "next/link"
import styles from "@/styles/Footer.module.css"

export default function Footer() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'
  
  const socialLinks = {
    twitter: `https://twitter.com/intent/tweet?text=Create%20essays%20instantly%20with%20AI%20Essay%20Writer%20-%20Free%20and%20no%20signup%20required!&url=${encodeURIComponent(siteUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(siteUrl)}&title=AI%20Essay%20Writer%20-%20Free%20Essay%20Generator&summary=Create%20well-structured%20essays%20instantly%20with%20AI`
  }

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.footerMain}>
            <Link href="/" className={styles.logo} aria-label="AI Essay Writer Homepage">
              <span className={styles.logoText}>AI Essay Writer</span>
              <span className={styles.freeBadge}>Free</span>
            </Link>

            <p className={styles.description}>
              AI-powered essay writing assistant that helps you create high-quality content in minutes. No signup, no
              credit card, completely free to use.
            </p>

            <nav aria-label="Primary Footer Navigation">
              <div className={styles.links}>
                <Link href="#generator" className={styles.link}>
                  Essay Generator
                </Link>
                <Link href="#how-it-works" className={styles.link}>
                  How It Works
                </Link>
                <Link href="#features" className={styles.link}>
                  Features
                </Link>
                <Link href="#faq" className={styles.link}>
                  FAQ
                </Link>
              </div>
            </nav>
          </div>

          <div className={styles.footerSections}>
            <div className={styles.footerSection}>
              <h3 className={styles.sectionTitle}>Essay Types</h3>
              <ul className={styles.sectionList}>
                <li><Link href="#generator?type=academic" className={styles.sectionLink}>Academic Essays</Link></li>
                <li><Link href="#generator?type=argumentative" className={styles.sectionLink}>Argumentative Essays</Link></li>
                <li><Link href="#generator?type=persuasive" className={styles.sectionLink}>Persuasive Essays</Link></li>
                <li><Link href="#generator?type=narrative" className={styles.sectionLink}>Narrative Essays</Link></li>
                <li><Link href="#generator?type=descriptive" className={styles.sectionLink}>Descriptive Essays</Link></li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h3 className={styles.sectionTitle}>Academic Levels</h3>
              <ul className={styles.sectionList}>
                <li><Link href="#generator?level=high_school" className={styles.sectionLink}>High School</Link></li>
                <li><Link href="#generator?level=undergraduate" className={styles.sectionLink}>Undergraduate</Link></li>
                <li><Link href="#generator?level=graduate" className={styles.sectionLink}>Graduate</Link></li>
                <li><Link href="#generator?level=professional" className={styles.sectionLink}>Professional</Link></li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h3 className={styles.sectionTitle}>Resources</h3>
              <ul className={styles.sectionList}>
                <li><Link href="#how-it-works" className={styles.sectionLink}>How To Write Essays</Link></li>
                <li><Link href="#features" className={styles.sectionLink}>Essay Structure Guide</Link></li>
                <li><Link href="#generator" className={styles.sectionLink}>Citation Guides</Link></li>
                <li><Link href="#faq" className={styles.sectionLink}>Common Questions</Link></li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h3 className={styles.sectionTitle}>External Links</h3>
              <ul className={styles.sectionList}>
                <li>
                  <a href="https://owl.purdue.edu/owl/general_writing/index.html" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className={styles.sectionLink}>
                    Purdue OWL
                  </a>
                </li>
                <li>
                  <a href="https://www.scribbr.com/category/academic-writing/" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className={styles.sectionLink}>
                    Scribbr Guides
                  </a>
                </li>
                <li>
                  <a href="https://www.grammarly.com/blog/category/writing-tips/" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className={styles.sectionLink}>
                    Grammarly Tips
                  </a>
                </li>
                <li>
                  <a href="https://writingcenter.unc.edu/tips-and-tools/" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className={styles.sectionLink}>
                    UNC Writing Center
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.disclaimer}>
            <h3 className={styles.disclaimerTitle}>Important Information</h3>
            <p>
              AI Essay Writer is designed to assist with writing and brainstorming. While our AI generates high-quality
              content, we recommend reviewing and editing the output to ensure it meets your specific requirements and
              standards.
            </p>
            <p>
              For academic purposes, please follow your institution's guidelines regarding the use of AI-generated
              content. Always cite sources appropriately and use this tool responsibly.
            </p>
          </div>

          <div className={styles.copyright}>
            <p>&copy; {currentYear} AI Essay Writer. This is a free tool with no login required.</p>
            <div className={styles.socialsContainer}>
              <p>Share:</p>
              <div className={styles.socials}>
                <a href={socialLinks.twitter} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className={styles.socialLink}
                   aria-label="Share on Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href={socialLinks.facebook} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className={styles.socialLink}
                   aria-label="Share on Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href={socialLinks.linkedin} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className={styles.socialLink}
                   aria-label="Share on LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

