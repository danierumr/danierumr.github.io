"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import HeroSection from "@/components/hero-section"
import SkillsSection from "@/components/skills-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import ProjectCard from "@/components/project-card"
import OtherProjectsSection from "@/components/other-projects-section"
import { useRecentProjects } from "@/data/projects"

export default function HomePage() {
  const { t } = useLanguage()
  const recentProjects = useRecentProjects(3)

  return (
    <div className="flex flex-col gap-16 py-8 md:gap-24 md:py-12">
      {/* Hero Section */}
      <HeroSection />

      {/* Projects Section - Moved up */}
      <section id="projects" className="container space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">{t("projects.title")}</h2>
          <Link href="/projects">
            <Button variant="ghost" className="gap-1">
              {t("projects.viewAll")} <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} showDate />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Education Section */}
      <EducationSection />

      {/* Other Projects Section - Research and Development */}
      {/* <OtherProjectsSection /> */}

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
