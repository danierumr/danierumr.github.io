"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Beaker, Code } from "lucide-react"
import { useOtherProjectsByType, OtherProject } from "@/data/other-projects"

interface OtherProjectProp {
    project: OtherProject
}


export default function OtherProjectsPage() {
  const { t } = useLanguage()
  const researchProjects = useOtherProjectsByType("research")
  const developmentProjects = useOtherProjectsByType("development")

  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">{t("otherProjects.title")}</h1>
          <p className="text-muted-foreground">{t("otherProjects.description")}</p>
        </div>

        <div className="space-y-8">
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Code className="h-5 w-5" /> {t("otherProjects.development")}
            </h2>
            <div className="space-y-6">
              {developmentProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Beaker className="h-5 w-5" /> {t("otherProjects.research")}
            </h2>
            <div className="space-y-6">
              {researchProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }: OtherProjectProp) {
  const { t } = useLanguage()

  return (
    <Card className="border border-border/60 shadow-sm">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription>{project.period}</CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-foreground/90">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, index) => (
            <Badge key={index} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>

        {project.links && project.links.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">{t("otherProjects.links")}</h3>
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    asChild
                    className="border-2 border-primary/20 hover:bg-primary/10 dark:hover:bg-primary/20"
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          )}


      </CardContent>
    </Card>
  )
}
