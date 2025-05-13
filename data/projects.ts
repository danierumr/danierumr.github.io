"use client"

import { useLanguage } from "@/components/language-provider"

// Define a type for project data
export type Project = {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  images: string[]
  technologies: string[]
  url?: string
  year: string
  month: string
  role: string
  team: string
  achievements: string[]
  features: string[]
}

// Function to get all projects with translations
export function useProjects() {
  const { t } = useLanguage()

  // Projects data with translations
  const projects: Project[] = [
    {
      id: "cce",
      title: t("project1.title"),
      shortDescription: t("project1.description"),
      fullDescription: t("project1.full_description"),
      images: [
        "/cce-menu.png",
        "/cce/cce-gameplay-gif.gif",
        "/cce/capivaristo.gif",
        "/cce/croc.gif",
      ],
      technologies: t("project1.tech").split(", "),
      url: "https://github.com/ufv-inf216/projeto-final-cce",
      year: "2023",
      month: "12",
      role: "Developer",
      team: "3 members",
      achievements: [],
      features: t("project1.features").split(", "),
    },
    {
      id: "avoid",
      title: t("project2.title"),
      shortDescription: t("project2.description"),
      fullDescription: t("project2.full_description"),
      images: [
        "/aVoid_main.png",
        "/avoid/avoid1.png",
        "/avoid/avoid2.png",
        "/avoid/avoid3.png",
      ],
      technologies: t("project2.tech").split(", "),
      url: "https://mrdanieru.itch.io/avoid",
      year: "2025",
      month: "02",
      role: "Solo developer",
      team: "",
      achievements: [],
      features: t("project2.features").split(", "),
    },
    {
      id: "clamor-lycanis",
      title: t("project3.title"),
      shortDescription: t("project3.description"),
      fullDescription: t("project3.full_description"),
      images: [
        "/cl_main.png",
      ],
      technologies: t("project3.tech").split(", "),
      url: "",
      year: "",
      month: "06",
      role: "Solo developer",
      team: "",
      achievements: [],
      features: t("project3.features").split(", "),
    },
  ]

  return projects
}

// Function to get a specific project by ID
export function useProject(id: string | null) {
  const projects = useProjects()
  return projects.find((project) => project.id === id) || null
}

// Function to get recent projects (for homepage)
export function useRecentProjects(count = 3) {
  const projects = useProjects()
  // Sort by: projects with empty year first, then by year/month descending
  return [...projects]
    .sort((a, b) => {
      // If a.year is empty and b.year is not, a comes first
      if (a.year === "" && b.year !== "") return -1
      // If b.year is empty and a.year is not, b comes first
      if (b.year === "" && a.year !== "") return 1
      // If both have years, sort by year and month descending
      const dateA = Number.parseInt(a.year) * 100 + Number.parseInt(a.month)
      const dateB = Number.parseInt(b.year) * 100 + Number.parseInt(b.month)
      return dateB - dateA
    })
    .slice(0, count)
}
