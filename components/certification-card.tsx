"use client"

import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"
import { useState } from "react"

interface PhotoItem {
  src: string
  alt: string
  credit?: string
}

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  skills: string[]
  photos: PhotoItem[]
  cardIndex: number
}

export function CertificationCard({ title, issuer, date, skills, photos, cardIndex }: CertificationCardProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null)

  const photo = {
    src: `/Cphoto${cardIndex + 1}.png`,
    alt: `Certification Photo ${cardIndex + 1}`,
  }

  return (
    <>
      <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300">
        <CardContent className="p-6">
          <div className="relative w-full h-64 rounded-lg overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10">
            <div
              className="relative cursor-pointer hover:scale-105 transition-transform duration-200 h-full"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img src={photo.src || "/placeholder.svg"} alt={photo.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent hover:from-black/20 transition-all duration-200"></div>
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
