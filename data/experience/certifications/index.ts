export interface CertificationItem {
  slug: string
  title: string
  issuer: string
  date: string
  skills: string[]
}

export const certificationItems: CertificationItem[] = [
  {
    slug: "digital-literacy",
    title: "Digital Literacy Certification",
    issuer: "Technology Education Institute",
    date: "2024",
    skills: ["Digital Tools", "Online Safety", "Information Literacy"],
  },
  {
    slug: "leadership-development",
    title: "Leadership Development Program",
    issuer: "Youth Leadership Foundation",
    date: "2023",
    skills: ["Team Leadership", "Project Management", "Communication"],
  },
  {
    slug: "environmental-awareness",
    title: "Environmental Awareness Certificate",
    issuer: "Green Future Initiative",
    date: "2023",
    skills: ["Sustainability", "Environmental Science", "Community Engagement"],
  },
]
