"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ExternalLink, Calendar, Code, Users, Trophy, ChevronLeft, ChevronRight } from "lucide-react"
import { useProject } from "@/data/projects"

export default function ProjectPage() {
  const { t } = useLanguage()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Get project ID from query parameter
  const projectId = searchParams.get("id")

  // Use the hook at the top level of the component
  const project = useProject(projectId)

  // Reset selected image when project changes
  useEffect(() => {
    setSelectedIndex(0)
  }, [projectId, project?.images?.length])

  const prevImage = () => {
    if (!project || !project.images?.length) return
    setSelectedIndex((i) => (i - 1 + project.images.length) % project.images.length)
  }

  const nextImage = () => {
    if (!project || !project.images?.length) return
    setSelectedIndex((i) => (i + 1) % project.images.length)
  }

  useEffect(() => {
    // Simulate loading for a smoother experience
    const timer = setTimeout(() => {
      setLoading(false)
      if (!project && projectId) {
        // Project not found, redirect to projects page
        router.push("/projects")
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [project, projectId, router])

  if (loading) {
    return (
      <div className="container flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-4">Loading project...</p>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-6">The project you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container py-8 md:py-12">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/projects" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          {t("projects.back")}
        </Link>
      </Button>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative h-[360px] md:h-[480px] w-full overflow-hidden rounded-lg border border-border/40 shadow-sm">
            <Image
              src={project.images[selectedIndex] || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-contain"
              priority
            />

            <button
              aria-label="Previous image"
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-md bg-muted/60 p-1 text-muted-foreground hover:bg-muted"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              aria-label="Next image"
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-md bg-muted/60 p-1 text-muted-foreground hover:bg-muted"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-4 flex gap-4 overflow-x-auto overflow-y-hidden flex-nowrap items-center">
            {project.images.map((image: string, index: number) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`relative h-[84px] md:h-[120px] w-[160px] md:w-[240px] flex-shrink-0 overflow-hidden rounded-lg shadow-sm cursor-pointer transition-all ${
                  selectedIndex === index ? "border-2 border-primary scale-105" : "border border-border/40"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${index + 1}`}
                  width={240}
                  height={120}
                  style={{ objectFit: 'contain' }}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <p className="mt-2 text-muted-foreground">{project.shortDescription}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>{project.year === "" ? "TBD" : `${project.month}/${project.year}`}</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-muted-foreground" />
              <span>{project.role}</span>
            </div>
            {project.team != "" && (
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>{t("projects.teamsize")}: {project.team}</span>
              </div>
            )}
            {project.achievements.length > 0 && (
              <div className="flex items-start gap-2">
                <Trophy className="h-4 w-4 text-muted-foreground mt-1" />
                <div>
                  <span className="font-medium">{t("projects.achievements")}:</span>
                  <ul className="list-disc list-inside ml-2">
                    {project.achievements.map((achievement: string, index: number) => (
                      <li key={index} className="text-sm">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {project.url && (
            <Button asChild className="w-full">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                {t("projects.visitProject")}
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>

      <Tabs defaultValue="description" className="mt-12">
        <TabsList>
          <TabsTrigger value="description">{t("projects.description")}</TabsTrigger>
          <TabsTrigger value="features">{t("projects.features")}</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-4 space-y-4">
          <p>{project.fullDescription}</p>
        </TabsContent>
        <TabsContent value="features" className="mt-4">
          <ul className="grid gap-2 sm:grid-cols-2">
            {project.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                {feature}
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  )
}
