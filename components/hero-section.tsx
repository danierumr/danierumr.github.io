"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  const { t } = useLanguage()

  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="container py-10 lg:py-16">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        {/* Left side - Photo */}
        <div className="flex justify-center md:justify-start">
          <div className="relative h-60 w-60 overflow-hidden rounded-full border-4 border-primary/20 lg:h-80 lg:w-80">
            <Image src="/profile.jpeg" alt="Profile" fill className="object-cover" priority />
          </div>
        </div>

        {/* Right side - Text */}
        <div className="text-center md:text-left space-y-4">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              <span className="text-muted-foreground">{t("hero.greeting")} </span>
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Daniel M.R.
              </span>
            </h1>
            <h2 className="text-2xl font-semibold sm:text-3xl">{t("hero.title")}</h2>
            <p className="text-muted-foreground sm:text-xl">{t("hero.description")}</p>
          </div>

          <Button onClick={scrollToProjects} className="mt-4 gap-2">
            {t("hero.cta")}
            <ArrowDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
