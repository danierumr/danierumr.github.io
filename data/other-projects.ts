"use client"

import { useLanguage } from "@/components/language-provider"
import { Beaker, FileText, Code, LinkIcon, Calculator } from "lucide-react"
import type { ReactNode } from "react"

// Define types for other projects
export type OtherProjectType = "research" | "development"

export type OtherProject = {
  order: number
  id: string
  type: OtherProjectType
  title: string
  period: string
  shortDescription: string
  fullDescription: string
  skills: string[]
  links?: {
    label: string
    url: string
  }[]
}

// Function to get all other projects with translations
export function useOtherProjects() {
  const { t } = useLanguage()

  // Other projects data with translations
  const otherProjects: OtherProject[] = [
    {
      order: 0,
      id: "research-optimization",
      type: "research",
      title: t("otherProject1.title"),
      period: t("otherProject1.period"),
      shortDescription: t("otherProject1.shortDescription"),
      fullDescription: t("otherProject1.fullDescription"),
      skills: t("otherProject1.skills").split(", "),
      links: [
        { label: t("otherProject1.link1.label"), url: "https://www3.dti.ufv.br/sia/vicosa/2023/trabalhos/18048/arquivo" },
      ],
    },
    {
      order: 0,
      id: "research-boca",
      type: "research",
      title: t("otherProject2.title"),
      period: t("otherProject2.period"),
      shortDescription: t("otherProject2.shortDescription"),
      fullDescription: t("otherProject2.fullDescription"),
      skills: t("otherProject2.skills").split(", "),
      links: [
        { label: t("otherProject2.link1.label"), url: "https://www.youtube.com/watch?v=1OPwgteL8j4&t=9s" },
      ],
    },
    {
      order: 1,
      id: "concrete-calculator",
      type: "development",
      title: t("otherProject3.title"),
      period: t("otherProject3.period"),
      shortDescription: t("otherProject3.shortDescription"),
      fullDescription: t("otherProject3.fullDescription"),
      skills: t("otherProject3.skills").split(", "),
      links: [
        { label: t("otherProject3.link1.label"), url: "https://www.sicon.ufv.br/calcrete/" },
        { label: t("otherProject3.link2.label"), url: "https://abenge.org.br/sis_artigo_com_capa.php/?cod_trab=5009" },
      ],
    },
    {
      order: 0,
      id: "cg-lab",
      type: "development",
      title: t("otherProject4.title"),
      period: t("otherProject4.period"),
      shortDescription: t("otherProject4.shortDescription"),
      fullDescription: t("otherProject4.fullDescription"),
      skills: t("otherProject4.skills").split(", "),
      links: [
        { label: t("otherProject4.link1.label"), url: "https://github.com/danierumr/Computer-Graphics-Lab" },
      ],
    },
  ]

  return otherProjects
}

// Function to get projects by type
export function useOtherProjectsByType(type: OtherProjectType) {
  const projects = useOtherProjects()
  return projects
      .filter((project) => project.type === type)
      .sort((a, b) => a.order - b.order)
}

// Function to get a specific project by ID
export function useOtherProject(id: string | null) {
  const projects = useOtherProjects()
  return projects.find((project) => project.id === id) || null
}
