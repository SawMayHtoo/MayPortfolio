"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Introduction from "@/components/introduction"
import Link from "next/link"
import { Github, Linkedin, Instagram, Mail, MapPin, Code, Users, Lightbulb, ArrowRight } from "lucide-react"

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [scrollLocked, setScrollLocked] = useState(false)
  const [reverseAnimationActive, setReverseAnimationActive] = useState(false)
  const scrollPosition = useRef(0)
  const wheelDelta = useRef(0)

  const handleIntroComplete = () => {
    setShowIntro(false)
    setTimeout(() => setIsVisible(true), 100)
  }

  useEffect(() => {
    if (!showIntro) {
      setIsVisible(true)
    }
  }, [showIntro])

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollY = window.scrollY

      if (scrollY === 0 && isScrolled && !reverseAnimationActive && wheelDelta.current < 0) {
        e.preventDefault()
        setReverseAnimationActive(true)
        setScrollLocked(true)

        // Lock the page at top position
        document.body.style.overflow = "hidden"
        document.body.style.position = "fixed"
        document.body.style.top = "0"
        document.body.style.width = "100%"

        setTimeout(() => {
          setIsScrolled(false)
          setAnimationComplete(false)
          setReverseAnimationActive(false)
          setScrollLocked(false)
          document.body.style.overflow = "auto"
          document.body.style.position = "static"
          document.body.style.top = "auto"
        }, 700)

        return false
      }

      if (reverseAnimationActive) {
        e.preventDefault()
        window.scrollTo(0, 0)
        return false
      }

      if (!animationComplete && scrollY > 10 && !scrollLocked) {
        e.preventDefault()
        setScrollLocked(true)
        setIsScrolled(true)

        // Lock the page at current position
        document.body.style.overflow = "hidden"
        document.body.style.position = "fixed"
        document.body.style.top = "0"
        document.body.style.width = "100%"

        setTimeout(() => {
          setAnimationComplete(true)
          document.body.style.overflow = "auto"
          document.body.style.position = "static"
          document.body.style.top = "auto"
        }, 700)

        return false
      }

      if (scrollLocked && !animationComplete) {
        e.preventDefault()
        window.scrollTo(0, 0)
        return false
      }

      if (animationComplete) {
        setIsScrolled(scrollY > 50)
      }
    }

    const handleWheel = (e) => {
      wheelDelta.current = e.deltaY
      handleScroll(e)
    }

    window.addEventListener("scroll", handleScroll, { passive: false })
    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("touchmove", handleScroll, { passive: false })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("touchmove", handleScroll)
      document.body.style.overflow = "auto"
      document.body.style.position = "static"
      document.body.style.top = "auto"
    }
  }, [animationComplete, scrollLocked, isScrolled, reverseAnimationActive])

  if (showIntro) {
    return <Introduction onComplete={handleIntroComplete} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/40 to-slate-900"></div>
      <div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>

      <div className="relative z-10">
        <Navigation />

        <section className="h-screen flex items-center justify-center relative overflow-hidden pt-20">
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>

          <div
            className={`container mx-auto px-6 z-10 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div
              className={`flex items-center justify-between transition-all duration-700 ${
                isScrolled ? "max-w-7xl" : "max-w-4xl justify-center"
              } mx-auto`}
            >
              <div
                className={`transition-all duration-700 ${
                  isScrolled
                    ? "w-1/2 text-left transform scale-75 -translate-x-8"
                    : "w-full text-center transform scale-100"
                }`}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Hi, I'm a Future CS Student
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white/80">
                  High School Graduate | Myanmar Student in Thailand
                </h2>

                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-white/90 text-balance">
                  An international student from Myanmar studying in Thailand, passionate about technology and
                  innovation. Currently applying for computer science programs at universities, ready to transform ideas
                  into digital reality through creativity, leadership, and determination.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  <Link href="/about">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
                      Learn About Me
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/projects">
                    <Button
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
                    >
                      View My Work
                    </Button>
                  </Link>
                </div>
              </div>

              <div
                className={`transition-all duration-700 ${
                  isScrolled ? "w-1/2 opacity-100 translate-x-0" : "w-0 opacity-0 translate-x-full"
                } flex flex-col items-center justify-center`}
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 blur-xl opacity-60 animate-pulse"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 blur-lg opacity-40"></div>

                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-gradient-to-br from-slate-800 to-slate-900">
                    <img
                      src="/professional-headshot-of-young-myanmar-student-wit.png"
                      alt="Profile Photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {"Saw May Htoo"}
                </h3>
                <p className="text-white/70 text-lg">Future CS Student</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 pt-32">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Explore My Journey</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "About Me",
                  description: "My story, background, and aspirations",
                  href: "/about",
                  icon: Users,
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  title: "Skills",
                  description: "Technical abilities and soft skills",
                  href: "/skills",
                  icon: Code,
                  gradient: "from-cyan-500 to-blue-500",
                },
                {
                  title: "Projects",
                  description: "My work and creative endeavors",
                  href: "/projects",
                  icon: Lightbulb,
                  gradient: "from-pink-500 to-red-500",
                },
                {
                  title: "Experience",
                  description: "Leadership roles and activities",
                  href: "/experience",
                  icon: MapPin,
                  gradient: "from-green-500 to-teal-500",
                },
              ].map((section, index) => (
                <Link key={index} href={section.href}>
                  <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group cursor-pointer h-full">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${section.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <section.icon className="h-full w-full text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-white/70 text-sm">{section.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <Card className="bg-white/5 backdrop-blur-lg border-white/10 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Let's Connect!</h2>
                <p className="text-white/80 mb-6">
                  I'm excited to connect with universities, mentors, and fellow students. Let's discuss opportunities in
                  computer science!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    { icon: Github, label: "GitHub", href: "#" },
                    { icon: Linkedin, label: "LinkedIn", href: "#" },
                    { icon: Instagram, label: "Instagram", href: "#" },
                    { icon: Mail, label: "Email", href: "mailto:your.email@example.com" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all duration-300"
                    >
                      <social.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="py-8 border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-white/60 text-sm">
                © 2024 Portfolio. Crafted with passion and dreams of studying computer science.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/about" className="text-sm text-white/60 hover:text-cyan-400 transition-colors">
                  About
                </Link>
                <Link href="/projects" className="text-sm text-white/60 hover:text-cyan-400 transition-colors">
                  Projects
                </Link>
                <Link href="/experience" className="text-sm text-white/60 hover:text-cyan-400 transition-colors">
                  Experience
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
