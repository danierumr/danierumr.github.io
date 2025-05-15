"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { useOtherProjectsByType, OtherProject } from "@/data/other-projects"

interface OtherProjectProp {
    project: OtherProject
}

export default function OtherProjectsSection() {
  const { t } = useLanguage()
  const researchProjects = useOtherProjectsByType("research")
  const developmentProjects = useOtherProjectsByType("development")

  return (
    <section id="other-projects" className="container space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{t("otherProjects.title")}</h2>
          <p className="text-muted-foreground mt-2">{t("otherProjects.description")}</p>
        </div>
        <Link href="/other-projects">
          <Button variant="ghost" className="gap-1">
            {t("otherProjects.viewAll")} <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="research" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="research">{t("otherProjects.research")}</TabsTrigger>
          <TabsTrigger value="development">{t("otherProjects.development")}</TabsTrigger>
        </TabsList>

        <TabsContent value="research" className="space-y-4">
          {researchProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </TabsContent>

        <TabsContent value="development" className="space-y-4">
          {developmentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </TabsContent>
      </Tabs>
    </section>
  )
}

function ProjectCard({project}: OtherProjectProp) {
  const { t } = useLanguage()

  return (
    <Card className="border border-border/60 shadow-sm hover:shadow-md transition-shadow">
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
        <p>{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, index) => (
            <Badge key={index} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
