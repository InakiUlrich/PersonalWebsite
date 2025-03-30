import React from 'react'
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer-container">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/inaki-ulrich-6069a286/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/logo-linkedin.png"
            alt="Linked In"
            width={160}
            height={16}
          />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/iulrich1?tab=overview&from=2025-03-01&to=2025-03-17"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/GitHub-logo.png"
            alt="GitHub"
            width={160}
            height={16}
          />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:inaki.ulrich@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/email-icon.jpg"
            alt="Email icon"
            width={160}
            height={16}
          />
        </a>
        <a
          className="flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/copyright-logo.png"
            alt="GitHub"
            width={16}
            height={16}
          />
          2025
        </a>
      </footer>
  )
}

export default Footer
