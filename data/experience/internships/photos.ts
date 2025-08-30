export interface PhotoItem {
  src: string
  alt: string
  credit?: string
}

export const internshipPhotos: Record<string, PhotoItem[]> = {
  "tech-startup": [
    {
      src: "/ikea1.png",
      alt: "Tech Startup - Office Environment",
    },
    {
      src: "/ikea2.png?key=startup2&height=200&width=150&query=web%20development%20coding%20session",
      alt: "Tech Startup - Development Work",
    },
    {
      src: "/ikea3.png?key=startup3&height=200&width=150&query=digital%20innovation%20lab%20collaboration",
      alt: "Tech Startup - Team Collaboration",
    },
  ],
  "education-assistant": [
    {
      src: "/black1.png",
      alt: "Education Assistant - Learning Environment",
    },
    {
      src: "/black2.png?key=edu2&height=200&width=150&query=tutoring%20students%20technology%20subjects",
      alt: "Education Assistant - Tutoring Session",
    },
    {
      src: "/black3.png?key=edu3&height=200&width=150&query=digital%20learning%20materials%20creation",
      alt: "Education Assistant - Content Creation",
    },
  ],
  "media-production": [
    {
      src: "/pattaya1.png",
      alt: "Media Production - Studio Environment",
    },
    {
      src: "/pattaya2.png?key=media2&height=200&width=150&query=video%20editing%20professional%20setup",
      alt: "Media Production - Video Editing",
    },
    {
      src: "/pattaya3.png?key=media3&height=200&width=150&query=social%20media%20content%20creation",
      alt: "Media Production - Content Creation",
    },
  ],
}
