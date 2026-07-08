"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BriefcaseBusiness, Rocket, Sparkles } from "lucide-react"

export default function ExperienceSection() {
  const { t } = useLanguage()

  const highlights = [
    t("experience.highlight1"),
    t("experience.highlight2"),
    t("experience.highlight3"),
  ]

  return (
    <section id="experience" className="container space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">{t("experience.title")}</h2>
        <p className="text-muted-foreground">{t("experience.subtitle")}</p>
      </div>

      <Card className="border border-border/40 shadow-sm">
        <CardHeader className="flex flex-row items-start gap-3">
          <div className="rounded-full bg-secondary p-2">
            <BriefcaseBusiness className="h-5 w-5" />
          </div>
          <div className="space-y-1">
            <CardTitle>{t("experience.company")}</CardTitle>
            <CardDescription>{t("experience.role")}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{t("experience.description")}</p>

          <ul className="space-y-2">
            {highlights.map((item) => (
              <li key={item} className="flex gap-2 text-sm">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Rocket className="h-4 w-4" />
            <span>{t("experience.timeline")}</span>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
