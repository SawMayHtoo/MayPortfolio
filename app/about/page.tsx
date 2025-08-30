"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, MapPin, GraduationCap, Heart, Target } from "lucide-react"

export default function AboutPage() {
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
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                About Me
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Discover my journey from Myanmar to Thailand, my passions, and my vision for the future in technology.
              </p>
            </div>

            {/* Personal Story */}
            <Card className="bg-white/5 backdrop-blur-lg border-white/10 mb-12 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-6 h-6 text-pink-400" />
                  <h2 className="text-2xl font-bold text-white">My Story</h2>
                </div>
                <div className="space-y-4 text-white/90 leading-relaxed">
                  <p>
                    I'm a passionate high school graduate from Myanmar, currently studying in Thailand with dreams of
                    pursuing computer science at university. My journey has been shaped by resilience, curiosity, and a
                    deep desire to make a positive impact through technology.
                  </p>
                  <p>
                    Growing up in Myanmar and adapting to life in Thailand has taught me the value of cultural
                    diversity, adaptability, and the power of education to transform lives. These experiences have
                    fueled my determination to excel in technology and contribute to meaningful projects.
                  </p>
                  <p>
                    I believe technology is a bridge that connects people, solves problems, and creates opportunities.
                    My goal is to be part of this transformative force while staying true to my values of community,
                    sustainability, and continuous learning.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Background & Location */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-xl font-bold text-white">Background</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Origin</span>
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                        Myanmar
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Current Location</span>
                      <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                        Thailand
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Languages</span>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="border-white/20 text-white/80">
                          Myanmar
                        </Badge>
                        <Badge variant="outline" className="border-white/20 text-white/80">
                          English
                        </Badge>
                        <Badge variant="outline" className="border-white/20 text-white/80">
                          Thai
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <GraduationCap className="w-6 h-6 text-pink-400" />
                    <h3 className="text-xl font-bold text-white">Education Goals</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Current Status</h4>
                      <p className="text-white/80">High School Graduate applying for Computer Science programs</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Future Plans</h4>
                      <p className="text-white/80">
                        Pursuing Bachelor's degree in Computer Science with focus on software development and AI
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Values & Interests */}
            <Card className="bg-white/5 backdrop-blur-lg border-white/10 mb-12 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-purple-400" />
                  <h2 className="text-2xl font-bold text-white">Values & Interests</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">Core Values</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                        Innovation
                      </Badge>
                      <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                        Integrity
                      </Badge>
                      <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                        Community
                      </Badge>
                      <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                        Sustainability
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3">Music & Arts</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-cyan-500/30 text-cyan-300">
                        Violin
                      </Badge>
                      <Badge variant="outline" className="border-cyan-500/30 text-cyan-300">
                        Guitar
                      </Badge>
                      <Badge variant="outline" className="border-cyan-500/30 text-cyan-300">
                        Performance
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3">Sports</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-pink-500/30 text-pink-300">
                        Volleyball
                      </Badge>
                      <Badge variant="outline" className="border-pink-500/30 text-pink-300">
                        Swimming
                      </Badge>
                      <Badge variant="outline" className="border-pink-500/30 text-pink-300">
                        Team Sports
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/skills">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3">
                    View My Skills
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 px-8 py-3 bg-transparent"
                  >
                    See My Projects
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
