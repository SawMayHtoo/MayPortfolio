export interface InternshipItem {
  slug: string
  title: string
  organization: string
  period: string
  description: string
  skills: string[]
  color: string
}

export const internshipExperiences: InternshipItem[] = [
  {
    slug: "tech-startup",
    title: "Internship at IKEA",
    organization: "Sales, HR and Graphic Designer",
    period: "Summer 2023, 2024",
    description:
      "Completed a hands-on internship at IKEA, gaining experience in sales, human resources, and graphic design, including designing and printing price tags. This internship gave me practical skills and insight into how a large international retail company operates.",
    skills: ["Visual Communication", "Employee Relations"],
    color: "cyan",
  },
  {
    slug: "education-assistant",
    title: "Internship at Black Canyon",
    organization: "Chef and Cafe",
    period: "Summer 2025",
    description:
      "Undertook an internship at Black Canyon, working alongside professional chefs to prepare drinks and cook a variety of dishes. This internship strengthened my culinary abilities, teamwork, and understanding of a fast-paced kitchen environment.",
    skills: ["Teamwork", "Customer Servidce", "Cooking"],
    color: "purple",
  },
  {
    slug: "media-production",
    title: "Internship at B&B restaurant",
    organization: "International Environment",
    period: "Winter 2022",
    description:
      "Participated in an internship at Bird & Bees Resort in Pattaya, learning hospitality skills such as customer service, food preparation, and managing facilities like the swimming pool. This internship provided valuable insight into professional hotel operations",
    skills: ["Language", "Hospitality Standards"],
    color: "pink",
  },
]
