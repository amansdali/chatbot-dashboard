'use client'

import { useEffect } from 'react'

export default function ThemeToggle() {
  useEffect(() => {
    // Initialize theme on page load
    const savedTheme = localStorage.getItem('theme') || 'light'
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const currentTheme = root.getAttribute('data-theme')
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    root.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
      <button id="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        <svg id="sun" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="13.3103" cy="13.0291" rx="5.5" ry="6" strokeWidth="2" className="icon-secondary"/>
          <path d="M21.053 19.1184L24.3103 22.0291" strokeWidth="2" className="icon-primary"/>
          <path d="M6.91277 20.4629L4.3103 24.0291" strokeWidth="2" className="icon-primary"/>
          <path d="M23.3103 3.02908L20.5339 6.11561" strokeWidth="2" className="icon-primary"/>
          <path d="M14.3583 22.7077L14.8103 27.0291" strokeWidth="2" className="icon-primary"/>
          <path d="M13.7761 1.52588e-05L13.7761 4.02908" strokeWidth="2" className="icon-primary"/>
          <path d="M-1.27772e-05 13.0036L4.3103 13.0036" strokeWidth="2" className="icon-primary"/>
          <path d="M23.2897 13.0036L27.3102 13.0036" strokeWidth="2" className="icon-primary"/>
          <path d="M4.16748 2.81546L6.8103 6.02908" strokeWidth="2" className="icon-primary"/>
          <line x1="8.44777" y1="12.4527" x2="17.4527" y2="11.5522" strokeLinecap="round" className="icon-primary"/>
          <path d="M12.4999 12.5L9 12.5C9.5 14 10 14.5888 10.9999 14.5C11.8404 14.4254 12.4999 13.5 12.4999 12.5Z" className="icon-primary"/>
          <path d="M17.4999 12.3082L14 12.3082C14.5 13.8082 15 14.3969 15.9999 14.3082C16.8404 14.2336 17.4999 13.3082 17.4999 12.3082Z" className="icon-primary"/>
          <path d="M12 16C12 16 12.6529 16.5 13.5 16.5C14.3471 16.5 15 16 15 16" strokeLinecap="round" className="icon-primary"/>
        </svg>
        <svg id="moon" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.8837 4.51223C30.1802 8.39789 31.6209 16.0437 25.3034 19.7955C20.4901 22.6541 14.4768 22.3764 13.4236 17.2432C16.2426 17.4744 18.4145 16.9431 19.6162 15.2679C20.8179 13.5927 21.5865 10.9553 20.46 9.30644C19.3335 7.65756 15.7579 6.08291 12.394 7.56953C12.1419 2.59358 22.3895 -0.785003 26.8837 4.51223Z" strokeWidth="2" className="icon-primary"/>
          <path d="M6.29407 8L7.41664 11.4549H11.0493L8.11042 13.5902L9.23299 17.0451L6.29407 14.9098L3.35514 17.0451L4.47771 13.5902L1.53878 11.4549H5.1715L6.29407 8Z" className="icon-primary"/>
        </svg>
      </button>
  )
}
