export const categories = [
  "Media Managers",
  "Media Editors",
  "Policymakers",
  "Academia/Scholars",
  "Students",
  "Tech Innovators/Experts",
  "MCI Mentors & Trainers",
  "MCI Alumni",
  "Film-makers",
  "Civil Society Organizations (CSOs)",
  "Media Organizations",
  "Government Officials"
] as const;

export type Category = typeof categories[number];