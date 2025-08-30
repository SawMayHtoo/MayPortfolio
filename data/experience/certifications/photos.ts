export interface PhotoItem {
  src: string
  alt: string
  credit?: string
}

export const certificationPhotos: Record<string, PhotoItem> = {
  "digital-literacy": {
    src: "/Cphoto1.png?key=digital1&height=1080&width=1920&query=digital%20literacy%20certification%20ceremony",
    alt: "Digital Literacy - Certification Ceremony",
  },
  "leadership-development": {
    src: "/Cphoto2.png?key=leadership1&height=1080&width=1920&query=leadership%20development%20program%20graduation",
    alt: "Leadership Development - Program Graduation",
  },
  "environmental-awareness": {
    src: "/Cphoto3.png?key=envaware1&height=1080&width=1920&query=environmental%20awareness%20certificate%20presentation",
    alt: "Environmental Awareness - Certificate Presentation",
  },
}
