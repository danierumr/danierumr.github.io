"use client"

import { useLanguage } from "@/components/language-provider"
import { useProjects } from "@/data/projects"
import ProjectCard from "@/components/project-card"

export default function ProjectsPage() {
  const { t } = useLanguage()
  const projects = useProjects()

  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{t("projects.title")}</h1>
        <p className="text-muted-foreground">A showcase of my game development projects over the years.</p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} showYear />
        ))}
      </div>
    </div>
  )
}
