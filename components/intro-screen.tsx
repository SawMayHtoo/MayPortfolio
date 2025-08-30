"use client"

import { useState, useEffect } from "react"
import { Globe } from "lucide-react"

interface IntroScreenProps {
  onComplete: () => void
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const [showText, setShowText] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [glitchActive, setGlitchActive] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [showTyping, setShowTyping] = useState(false)

  const fullText = "www.metthew.vercel.app"

  useEffect(() => {
    const timer1 = setTimeout(() => setShowText(true), 1000)
    const timer2 = setTimeout(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 1200)
    }, 3500)
    const timer3 = setTimeout(() => setShowTyping(true), 5500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  useEffect(() => {
    if (showTyping) {
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typingInterval)
          setTimeout(() => setShowButton(true), 500)
        }
      }, 100)

      return () => clearInterval(typingInterval)
    }
  }, [showTyping, fullText])

  const handleClick = () => {
    onComplete()
  }

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full particle-animation opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Flowing Neon Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 animate-pulse"></div>
        <div
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-30 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen relative z-10">
        <div className="text-center px-6 max-w-4xl mx-auto">
          {/* Welcome Text */}
          <div
            className={`transition-all duration-2000 ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1
              className={`text-6xl md:text-8xl lg:text-9xl font-bold mb-8 holographic-text neon-text text-white ${glitchActive ? "glitch-effect" : ""}`}
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Welcome
            </h1>
            <h2
              className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 text-purple-200 fade-in-up"
              style={{ animationDelay: "1s" }}
            >
              to My Portfolio Website
            </h2>

            {/* Holographic Shimmer Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(0, 212, 255, 0.1) 50%, transparent 100%)",
                animation: "holographic-shimmer 4s linear infinite",
              }}
            ></div>
          </div>

          <div
            className={`mt-16 transition-all duration-1000 ${showTyping ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative inline-block">
              {/* Liquid Glass Button */}
              <div
                className={`relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-8 py-4 transition-all duration-1000 hover:bg-white/10 hover:border-white/20 cursor-pointer ${showButton ? "animate-float" : ""}`}
                onClick={handleClick}
                style={{
                  boxShadow: "0 0 30px rgba(139, 69, 19, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)",
                  transform: showButton ? "translateX(0)" : "translateX(100px)",
                }}
              >
                <div className="flex items-center gap-3">
                  <Globe className="w-6 h-6 text-cyan-400" />

                  <span className="text-white font-mono text-lg">
                    {typedText}
                    {showTyping && !showButton && <span className="animate-pulse text-cyan-400">|</span>}
                  </span>
                </div>

                {/* Liquid glass effect overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-pink-400/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Click Anywhere Overlay */}
      <div className="absolute inset-0 cursor-pointer z-0" onClick={handleClick}></div>
    </div>
  )
}
