"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Users, BookOpen, Award } from "lucide-react"
import { useState } from "react"

import { leadershipExperiences } from "@/data/experience/leadership/index"
import { leadershipPhotos } from "@/data/experience/leadership/photos"
import { internshipExperiences } from "@/data/experience/internships/index"
import { internshipPhotos } from "@/data/experience/internships/photos"
import { certificationItems } from "@/data/experience/certifications/index"
import { certificationPhotos } from "@/data/experience/certifications/photos"

import { ExperienceCard } from "@/components/experience-card"
import { InternshipCard } from "@/components/internship-card"
import { CertificationCard } from "@/components/certification-card"

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState("leadership")

  const tabs = [
    { id: "leadership", label: "Leadership & Professional", icon: Users, color: "cyan" },
    { id: "internships", label: "Internship Experience", icon: BookOpen, color: "green" },
    { id: "certifications", label: "Certifications & Training", icon: Award, color: "purple" },
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
                Portfolio Showcase
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Explore my journey through leadership, internships, certifications, and technical expertise. Each
                section represents a milestone in my continuous learning path.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-300
                        ${
                          activeTab === tab.id
                            ? `bg-gradient-to-r from-${tab.color}-500/20 to-${tab.color}-600/20 border border-${tab.color}-500/30 text-${tab.color}-300 shadow-lg shadow-${tab.color}-500/20`
                            : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                        }
                      `}
                    >
                      <Icon className="w-5 h-5" />
                      {tab.label}
                    </button>
                  )
                })}
              </div>

              {activeTab === "leadership" && (
                <div className="space-y-8">
                  {leadershipExperiences.map((experience) => (
                    <ExperienceCard
                      key={experience.slug}
                      title={experience.title}
                      organization={experience.organization}
                      location={experience.location}
                      period={experience.period}
                      type={experience.type}
                      description={experience.description}
                      skills={experience.skills}
                      photos={leadershipPhotos[experience.slug] || []}
                    />
                  ))}
                </div>
              )}

              {activeTab === "internships" && (
                <div className="grid md:grid-cols-3 gap-8">
                  {internshipExperiences.map((internship) => (
                    <InternshipCard
                      key={internship.slug}
                      title={internship.title}
                      organization={internship.organization}
                      period={internship.period}
                      description={internship.description}
                      skills={internship.skills}
                      photos={internshipPhotos[internship.slug] || []}
                      color={internship.color}
                    />
                  ))}
                </div>
              )}

              {activeTab === "certifications" && (
                <div className="grid md:grid-cols-3 gap-6">
                  {certificationItems.map((cert, index) => (
                    <CertificationCard
                      key={cert.slug}
                      title={cert.title}
                      issuer={cert.issuer}
                      date={cert.date}
                      skills={cert.skills}
                      photos={certificationPhotos[cert.slug]}
                      cardIndex={index}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Contact Me */}
            <Card className="bg-white/5 backdrop-blur-lg border-white/10 mb-12 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Contact Me</h2>
                <div className="max-w-2xl mx-auto text-center">
                  <p className="text-white/80 mb-8 leading-relaxed">
                    Got a question? Send me a message, and I'll get back to you soon.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-cyan-300 mb-2">Email</h3>
                      <p className="text-white/70">sawmayhtoo@outlook.com</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-purple-300 mb-2">Phone</h3>
                      <p className="text-white/70">+66 611 345 951</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4">
                    <Button
                      className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-6 py-3"
                      onClick={() => {
                        const link = document.createElement("a")
                        link.href = "/Mayresume.png"
                        link.download = "Mayresume.png"
                        document.body.appendChild(link)
                        link.click()
                        document.body.removeChild(link)
                      }}
                    >
                      Download Resume
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 px-6 py-3 bg-transparent"
                    >
                      Download CV
                    </Button>
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
                <Link href="/skills">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 px-8 py-3 bg-transparent"
                  >
                    See My Skills
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
