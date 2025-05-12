"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
  showYear?: boolean
}

export default function ProjectCard({ project, showYear = false }: ProjectCardProps) {
  const { t } = useLanguage()

  return (
    <Card className="overflow-hidden border border-border/40 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="aspect-video relative">
        <Image
          src={project.images[0] || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        {showYear && (
          <div className="absolute top-2 right-2">
            <Badge variant="secondary">{project.year}</Badge>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.shortDescription}</CardDescription>
      </CardHeader>

      {/* Empty CardContent to create space */}
      <CardContent className="flex-grow"></CardContent>

      {/* Footer with technologies and buttons */}
      <CardFooter className="flex flex-col gap-4 pt-2">
        <div className="flex flex-wrap gap-2 w-full">
          {project.technologies.map((tech: string) => (
            <Badge key={tech} variant={showYear ? "outline" : "secondary"}>
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex justify-between w-full">
          <Link href={`/project?id=${project.id}`}>
            <Button variant={showYear ? "default" : "outline"} size="sm">
              {t("projects.viewDetails")}
            </Button>
          </Link>
          {project.url && (
            <Button asChild size="sm" variant="ghost">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                {t("projects.visitProject")}
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
