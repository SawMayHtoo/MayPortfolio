"use client"

import { useState, useEffect } from "react"
import { Globe } from "lucide-react"

interface IntroductionProps {
  onComplete: () => void
}

export default function Introduction({ onComplete }: IntroductionProps) {
  const [showWelcome, setShowWelcome] = useState(false)
  const [showUrl, setShowUrl] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const [moveHeaderUp, setMoveHeaderUp] = useState(false)

  const fullUrl = "www.matthew.vercel.app"

  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(true)
    }, 1000)

    const urlTimer = setTimeout(() => {
      setShowUrl(true)
      setTimeout(() => setMoveHeaderUp(true), 800)
    }, 4000)

    return () => {
      clearTimeout(welcomeTimer)
      clearTimeout(urlTimer)
    }
  }, [])

  useEffect(() => {
    if (showUrl && typedText.length < fullUrl.length) {
      const timer = setTimeout(() => {
        setTypedText(fullUrl.slice(0, typedText.length + 1))
      }, 100)
      return () => clearTimeout(timer)
    } else if (showUrl && typedText.length === fullUrl.length) {
      setTimeout(() => setIsComplete(true), 500)
    }
  }, [showUrl, typedText, fullUrl])

  const handleClick = () => {
    onComplete()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer" onClick={handleClick}>
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4K%20100%20Royalty-Free%20Stock%20Footage%20%20Technology%20HUD%20Element%20Intro%20Background%20%20No%20Copyright%20Video%20-%20NoCopyrightFootages%20%281080p%2C%20h264%2C%20youtube%29-fqiU2ROoqWS1wXZxftx4QIVgZqiWFY.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-8">
        <div
          className={`mb-16 transition-all duration-2000 ease-out ${
            showWelcome ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } ${moveHeaderUp ? "-translate-y-8" : ""}`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse-glow">
            Welcome to My
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-neon-glow">
            Portfolio Website
          </h1>

          <div className="absolute inset-0 pointer-events-none">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cyan-400 opacity-20 animate-glitch-1">
              Welcome to My Portfolio Website
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-pink-400 opacity-20 animate-glitch-2">
              Welcome to My Portfolio Website
            </h1>
          </div>
        </div>

        {showUrl && (
          <div
            className={`mt-12 transition-all duration-1000 ease-out transform ${
              showUrl ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
              <Globe className="w-4 h-4 text-cyan-400 animate-spin-slow" />
              <span className="text-base md:text-lg font-mono text-white">
                {typedText}
                <span className="animate-pulse text-cyan-400">|</span>
              </span>

              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
            </div>
          </div>
        )}

        {isComplete && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-96 h-96 border border-cyan-400/30 rounded-full animate-ping" />
              <div className="w-80 h-80 border border-purple-400/30 rounded-full animate-ping animation-delay-200" />
              <div className="w-64 h-64 border border-pink-400/30 rounded-full animate-ping animation-delay-400" />
            </div>
          </div>
        )}
      </div>

      {isComplete && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm animate-bounce">
          Click anywhere to enter
        </div>
      )}
    </div>
  )
}
