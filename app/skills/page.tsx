"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Code, Users, Music, Zap, Globe, MessageSquare } from "lucide-react"
import { techSkillPhotos } from "@/components/tech-skill-photos"

export default function SkillsPage() {
  const techSkills = [
    { name: "v0.dev", level: 85, icon: "🚀" },
    { name: "Vercel", level: 80, icon: "▲" },
    { name: "Cursor IDE", level: 75, icon: "💻" },
    { name: "GitHub", level: 70, icon: "🐙" },
    { name: "Supabase", level: 65, icon: "🗄️" },
    { name: "Stripe", level: 60, icon: "💳" },
    { name: "ChatGPT", level: 90, icon: "🤖" },
    { name: "Video Editing", level: 75, icon: "🎬" },
    { name: "Microsoft Office", level: 85, icon: "📊" },
  ]

  const softSkills = [
    { name: "Communication", description: "Effective verbal and written communication across cultures" },
    { name: "Leadership", description: "Experience leading teams and organizing events" },
    { name: "Problem Solving", description: "Analytical thinking and creative solution finding" },
    { name: "Adaptability", description: "Thriving in diverse environments and embracing change" },
    { name: "Teamwork", description: "Collaborative approach to achieving common goals" },
    { name: "Time Management", description: "Balancing academics, activities, and personal projects" },
    { name: "Cultural Awareness", description: "Understanding and respecting diverse perspectives" },
    { name: "Public Speaking", description: "Confident presentation and performance skills" },
  ]

  const creativeSkills = [
    { name: "Violin", level: 80, years: "8+ years" },
    { name: "Guitar", level: 70, years: "3+ years" },
    { name: "Volleyball", level: 75, years: "5+ years" },
    { name: "Swimming", level: 70, years: "6+ years" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/40 to-slate-900"></div>
      <div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="p-6">
          <Link href="/">
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </nav>

        {/* Main Content */}
        <div className="container mx-auto px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Skills & Expertise
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                A comprehensive overview of my technical abilities, soft skills, and creative talents.
              </p>
            </div>

            {/* Tech & Digital Skills */}
            <Card className="bg-white/5 backdrop-blur-lg border-white/10 mb-12 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <Code className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white">Tech & Digital Skills</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {techSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-cyan-400/5 group-hover:via-purple-400/5 group-hover:to-pink-400/5 transition-all duration-300"></div>
                      <div className="relative p-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md overflow-hidden bg-white/10 border border-white/20 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-110">
                          <img
                            src={techSkillPhotos[skill.name as keyof typeof techSkillPhotos] || "/placeholder.svg"}
                            alt={`${skill.name} logo`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-medium text-white group-hover:text-cyan-300 transition-colors duration-300">
                          {skill.name}
                        </span>
                        <div className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-60 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="bg-white/5 backdrop-blur-lg border-white/10 mb-12 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <Users className="w-6 h-6 text-purple-400" />
                  <h2 className="text-2xl font-bold text-white">Soft Skills</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {softSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{skill.name}</h3>
                        <p className="text-white/70 text-sm">{skill.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Creative & Sports Skills */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Music className="w-6 h-6 text-pink-400" />
                    <h3 className="text-xl font-bold text-white">Music</h3>
                  </div>
                  <div className="grid gap-4">
                    <div className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-red-500/10 border border-white/10 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-400/25">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-400/0 via-purple-400/0 to-red-400/0 group-hover:from-pink-400/5 group-hover:via-purple-400/5 group-hover:to-red-400/5 transition-all duration-300"></div>
                      <div className="relative p-4 flex items-center gap-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🎻</span>
                        <div className="flex-1">
                          <span className="font-medium text-white group-hover:text-pink-300 transition-colors duration-300 block">
                            Violin
                          </span>
                          <span className="text-sm text-white/60">Classical & Contemporary</span>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-60 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-pink-400/50 transition-all duration-300"></div>
                      </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-red-500/10 border border-white/10 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-400/25">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-400/0 via-purple-400/0 to-red-400/0 group-hover:from-pink-400/5 group-hover:via-purple-400/5 group-hover:to-red-400/5 transition-all duration-300"></div>
                      <div className="relative p-4 flex items-center gap-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🎸</span>
                        <div className="flex-1">
                          <span className="font-medium text-white group-hover:text-pink-300 transition-colors duration-300 block">
                            Guitar
                          </span>
                          <span className="text-sm text-white/60">Acoustic & Electric</span>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-60 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-pink-400/50 transition-all duration-300"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Zap className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-xl font-bold text-white">Sports</h3>
                  </div>
                  <div className="grid gap-4">
                    <div className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-teal-500/10 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-blue-400/0 to-teal-400/0 group-hover:from-cyan-400/5 group-hover:via-blue-400/5 group-hover:to-teal-400/5 transition-all duration-300"></div>
                      <div className="relative p-4 flex items-center gap-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🏐</span>
                        <div className="flex-1">
                          <span className="font-medium text-white group-hover:text-cyan-300 transition-colors duration-300 block">
                            Volleyball
                          </span>
                          <span className="text-sm text-white/60">Team Player & Strategy</span>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-60 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300"></div>
                      </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-teal-500/10 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-blue-400/0 to-teal-400/0 group-hover:from-cyan-400/5 group-hover:via-blue-400/5 group-hover:to-teal-400/5 transition-all duration-300"></div>
                      <div className="relative p-4 flex items-center gap-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🏊</span>
                        <div className="flex-1">
                          <span className="font-medium text-white group-hover:text-cyan-300 transition-colors duration-300 block">
                            Swimming
                          </span>
                          <span className="text-sm text-white/60">Endurance & Technique</span>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-60 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Skill Categories Overview */}
            <Card className="bg-white/5 backdrop-blur-lg border-white/10 mb-12 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Skill Categories</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Digital Literacy</h3>
                    <p className="text-white/70 text-sm">Modern web tools and platforms</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <MessageSquare className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Communication</h3>
                    <p className="text-white/70 text-sm">Cross-cultural interaction</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
                      <Music className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Creative Arts</h3>
                    <p className="text-white/70 text-sm">Musical performance</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Athletics</h3>
                    <p className="text-white/70 text-sm">Team and individual sports</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/projects">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3">
                    View My Projects
                  </Button>
                </Link>
                <Link href="/experience">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 px-8 py-3 bg-transparent"
                  >
                    See My Experience
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
