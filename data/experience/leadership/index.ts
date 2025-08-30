export interface ExperienceItem {
  slug: string
  title: string
  organization: string
  location: string
  period: string
  type: string
  description: string
  skills: string[]
}

export const leadershipExperiences: ExperienceItem[] = [
  {
    slug: "asean-mc-tour-guide",
    title: "MC & School Tour Guide for ASEAN 2024 Event",
    organization: "International Conference",
    location: "Thailand",
    period: "2024",
    type: "Leadership",
    description:
      'Welcomed 13th ASEAN Education Ministers Meeting in 2024 at Mechai Bamboo School under the topic of "Transforming Education in the Digital Era". Responsibility as an emcee and school tour guide, with the opportunity to interact with ambassadors of Australia and from various countries and education ministers from different nations.',
    skills: ["Project Management", "Cross-cultural Communication", "Event Planning"],
  },
  {
    slug: "tech-journalism",
    title: "Technology Journalism Committee Member",
    organization: "School Media Team",
    location: "Thailand",
    period: "2023 - 2024",
    type: "Media",
    description:
      "Active contributor to school's technology journalism committee. Researched and wrote articles about emerging technology trends, student innovations, and digital literacy initiatives.",
    skills: ["Technical Writing", "Research", "Digital Publishing"],
  },
  {
    slug: "environmental-campaign",
    title: "Environmental Campaign",
    organization: "Student Environmental Club",
    location: "Thailand",
    period: "2023",
    type: "Social Impact",
    description:
      "Participated in tree-planting initiatives across the community, temples, and local forests as part of school activities, contributing to environmental sustainability and community development.",
    skills: ["Campaign Management", "Community Outreach", "Environmental Advocacy"],
  },
  {
    slug: "cultural-exchange",
    title: "Cultural Exchange Facilitator",
    organization: "Myanmar-Thailand-Australia Student Exchange",
    location: "Thailand & Myanmar",
    period: "2022 - 2024",
    type: "Cultural",
    description:
      "Joined a 5-week cultural and academic exchange in Australia, exploring states like NSW, Queensland, and Victoria. Experienced local life through farming, cultural food, Aboriginal traditions, and school activities at Geelong Grammar School. Gained valuable insights into Australian culture, education, and community",
    skills: ["Cultural Sensitivity", "Event Organization", "Multilingual Communication"],
  },
]
