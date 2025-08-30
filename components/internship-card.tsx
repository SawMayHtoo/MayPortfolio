"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { useState } from "react"

interface PhotoItem {
  src: string
  alt: string
  credit?: string
}

interface InternshipCardProps {
  title: string
  organization: string
  period: string
  description: string
  skills: string[]
  photos: PhotoItem[]
  color: string
}

export function InternshipCard({
  title,
  organization,
  period,
  description,
  skills,
  photos,
  color,
}: InternshipCardProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null)

  return (
    <>
      <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300">
        <CardContent className="p-6">
          <div className="relative w-full h-64 rounded-lg overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 mb-4">
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
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className={`text-${color}-400 font-medium`}>{organization}</p>
            <p className="text-white/60 text-sm">{period}</p>
            <p className="text-white/80 text-sm leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {skills.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  variant="outline"
                  className={`border-${color}-500/30 text-${color}-300 text-xs`}
                >
                  {skill}
                </Badge>
              ))}
            </div>
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
