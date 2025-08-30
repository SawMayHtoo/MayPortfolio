export interface PhotoItem {
  src: string
  alt: string
  credit?: string
}

export const leadershipPhotos: Record<string, PhotoItem[]> = {
  "asean-mc-tour-guide": [
    {
      src: "/photo10.png?key=asean1&height=200&width=150&query=ASEAN%20conference%20MC%20presentation",
      alt: "ASEAN 2024 Event - MC Presentation",
    },
    {
      src: "/photo11.png?key=asean2&height=200&width=150&query=ASEAN%20school%20tour%20guide%20with%20ministers",
      alt: "ASEAN 2024 Event - School Tour with Ministers",
    },
    {
      src: "/photo12.png?key=asean3&height=200&width=150&query=ASEAN%20international%20delegates%20meeting",
      alt: "ASEAN 2024 Event - International Delegates",
    },
  ],
  "tech-journalism": [
    {
      src: "/photo4.png?key=journalism1&height=200&width=150&query=technology%20journalism%20writing%20articles",
      alt: "Technology Journalism - Writing Articles",
    },
    {
      src: "/photo5.png?key=journalism2&height=200&width=150&query=school%20media%20team%20meeting",
      alt: "Technology Journalism - Media Team Meeting",
    },
    {
      src: "/photo6.png?key=journalism3&height=200&width=150&query=digital%20publishing%20platform",
      alt: "Technology Journalism - Digital Publishing",
    },
  ],
  "environmental-campaign": [
    {
      src: "/photo7.png?key=env1&height=200&width=150&query=tree%20planting%20community%20activity",
      alt: "Environmental Campaign - Tree Planting",
    },
    {
      src: "/photo8.png?key=env2&height=200&width=150&query=environmental%20awareness%20event",
      alt: "Environmental Campaign - Awareness Event",
    },
    {
      src: "/photo9.png?key=env3&height=200&width=150&query=sustainability%20project%20presentation",
      alt: "Environmental Campaign - Sustainability Project",
    },
  ],
  "cultural-exchange": [
    {
      src: "/photo1.png?key=cultural1&height=200&width=150&query=Australia%20cultural%20exchange%20program",
      alt: "Cultural Exchange - Australia Program",
    },
    {
      src: "/photo2.png?key=cultural2&height=200&width=150&query=Myanmar%20Thailand%20student%20exchange",
      alt: "Cultural Exchange - Myanmar Thailand Students",
    },
    {
      src: "/photo3.png?key=cultural3&height=200&width=150&query=Geelong%20Grammar%20School%20activities",
      alt: "Cultural Exchange - Geelong Grammar School",
    },
  ],
}
