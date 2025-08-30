"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, X } from "lucide-react"
import { useState } from "react"

interface PhotoItem {
  src: string
  alt: string
  credit?: string
}

interface ExperienceCardProps {
  title: string
  organization: string
  location?: string
  period: string
  type?: string
  description: string
  skills: string[]
  photos: PhotoItem[]
  color?: string
}

export function ExperienceCard({
  title,
  organization,
  location,
  period,
  type,
  description,
  skills,
  photos,
  color = "purple",
}: ExperienceCardProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null)

  const getTypeColor = (type?: string) => {
    switch (type) {
      case "Leadership":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30"
      case "Media":
        return "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
      case "Social Impact":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      case "Cultural":
        return "bg-pink-500/20 text-pink-300 border-pink-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  return (
    <>
      <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300">
        <CardContent className="p-8">
          <div className="mb-6">
            <div className="relative w-full rounded-lg overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 h-64">
              <div className="grid grid-cols-3 gap-1 h-full">
                {photos.slice(0, 3).map((photo, index) => (
                  <div
                    key={index}
                    className="relative cursor-pointer hover:scale-105 transition-transform duration-200"
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    <img src={photo.src || "/placeholder.svg"} alt={photo.alt} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent hover:from-black/20 transition-all duration-200"></div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-white/70 text-sm mt-3 text-center italic">
              {title} - {organization}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                {type && (
                  <Badge variant="secondary" className={getTypeColor(type)}>
                    {type}
                  </Badge>
                )}
              </div>
              <p className="text-secondary font-medium mb-2">{organization}</p>
              <div className="flex items-center gap-4 text-white/60 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {period}
                </div>
                {location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {location}
                  </div>
                )}
              </div>
            </div>
          </div>

          <p className="leading-relaxed mb-6 text-white">{description}</p>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, skillIndex) => (
              <Badge key={skillIndex} variant="outline" className="border-white/20 text-white/70">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={selectedPhoto.src || "/placeholder.svg"}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-2 hover:bg-white/20 transition-all duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            {selectedPhoto.credit && (
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                <p className="text-white/70 text-sm">{selectedPhoto.credit}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
