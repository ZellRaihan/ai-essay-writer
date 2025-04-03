"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "@/styles/Header.module.css"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={styles.header} role="banner">
      <div className={styles.container}>
        <Link 
          href="/" 
          className={styles.logo}
          aria-label="AI Essay Writer Homepage">
          <Image 
            src="/logo.png" 
            alt="AI Essay Writer Logo" 
            width={40} 
            height={40} 
            className={styles.logoImage} 
          />
          <span className={styles.logoText}>AI Essay Writer</span>
          <span className={styles.freeBadge}>Free</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <a href="#generator" onClick={(e) => { e.preventDefault(); scrollToSection('generator'); }} className={styles.navLink}>
            Essay Generator
          </a>
          <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }} className={styles.navLink}>
            How It Works
          </a>
          <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className={styles.navLink}>
            Features
          </a>
          <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }} className={styles.navLink}>
            FAQ
          </a>
        </nav>

        <div className={styles.actions}>
          <button 
            className={styles.menuButton} 
            onClick={() => setMenuOpen(!menuOpen)} 
            aria-label="Toggle menu"
            aria-expanded={menuOpen}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className={styles.mobileMenu} role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className={styles.mobileMenuHeader}>
            <Link href="/" className={styles.logo} aria-label="AI Essay Writer Homepage">
              <Image 
                src="/logo.png" 
                alt="AI Essay Writer Logo" 
                width={32} 
                height={32} 
                className={styles.logoImage} 
              />
              <span className={styles.logoText}>AI Essay Writer</span>
              <span className={styles.freeBadge}>Free</span>
            </Link>
            <button 
              className={styles.closeButton} 
              onClick={() => setMenuOpen(false)} 
              aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <nav className={styles.mobileNav} aria-label="Mobile Navigation">
            <a href="#generator" onClick={(e) => { e.preventDefault(); scrollToSection('generator'); }} className={styles.mobileNavLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14"/>
              </svg>
              Essay Generator
            </a>
            <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }} className={styles.mobileNavLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12" y2="17"/>
              </svg>
              How It Works
            </a>
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className={styles.mobileNavLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              Features
            </a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }} className={styles.mobileNavLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12" y2="17"/>
              </svg>
              FAQ
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

