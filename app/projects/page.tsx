"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Globe } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Mechai Bamboo School Website",
      description:
        "Developed a comprehensive website for Mechai Bamboo School, showcasing the institution's unique educational approach and sustainable practices. The site features modern design, responsive layout, and engaging content management.",
      technologies: ["Web Development", "Responsive Design", "Content Management"],
      category: "Web Development",
      status: "Completed",
      impact: "Enhanced school's digital presence and student recruitment",
      image: "/mpsstugov.png",
      links: {
        live: "https://mechaibambooschool.vercel.app/",
        github: "#",
      },
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Created a futuristic cyberpunk-themed portfolio website showcasing my journey as a Myanmar student in Thailand. Features glassmorphism effects, neon gradients, interactive components, and comprehensive sections for skills, experience, and projects.",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
      category: "Web Development",
      status: "Completed",
      impact: "Professional online presence for university applications and career opportunities",
      image: "/myportfolioweb.png",
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      title: "Birthday Wish Website",
      description:
        "Creating a birthday wish website instead of giving a traditional card allowed me to combine creativity with technology. I designed and built a personalized site with an interactive greeting, music, photos, and animations. This project demonstrates my web development skills and how I can use technology to turn simple ideas into engaging digital experiences.",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
      category: "Web Development",
      status: "Completed",
      impact: "Professional online presence for university applications and career opportunities",
      image: "/Birthdayweb.png",
      links: {
        live: "https://kwanhbdweb.vercel.app/",
        github: "#",
      },
    },
  ]

  const categories = ["All", "Web Development"]

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
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                My Projects
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                A showcase of my work in web development, content creation, event management, and community impact
                initiatives.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-white/20 text-white/80 hover:bg-white/10 cursor-pointer px-4 py-2"
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge
                          variant="secondary"
                          className={`${
                            project.status === "Completed"
                              ? "bg-green-500/20 text-green-300 border-green-500/30"
                              : "bg-blue-500/20 text-blue-300 border-blue-500/30"
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="border-purple-500/30 text-purple-300 text-xs">
                          {project.category}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-white/80 text-sm leading-relaxed mb-4">{project.description}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="border-white/20 text-white/70 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3">
                        {project.links.live && (
                          <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                          </Link>
                        )}
                        {project.links.github && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Future Projects */}
            <Card className="bg-white/5 backdrop-blur-lg border-white/10 mb-12 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white">Future Projects</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-lg bg-white/5">
                    <h3 className="font-semibold text-white mb-2">AI-Powered Learning Platform</h3>
                    <p className="text-white/70 text-sm mb-3">
                      Planning to develop an AI-assisted learning platform for students in Southeast Asia.
                    </p>
                    <Badge variant="outline" className="border-blue-500/30 text-blue-300">
                      In Planning
                    </Badge>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5">
                    <h3 className="font-semibold text-white mb-2">Cross-Cultural Mobile App</h3>
                    <p className="text-white/70 text-sm mb-3">
                      Mobile application to connect students across different cultures and facilitate language exchange.
                    </p>
                    <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                      Concept Phase
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/experience">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3">
                    View My Experience
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 px-8 py-3 bg-transparent"
                  >
                    Learn More About Me
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
