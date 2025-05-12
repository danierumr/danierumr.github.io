"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, Calendar } from "lucide-react"

export default function EducationSection() {
  const { t } = useLanguage()

  const educationItems = [
    {
      title: t("education.degree"),
      institution: t("education.university"),
      period: t("education.period"),
      icon: <GraduationCap className="h-5 w-5" />,
    },
  ]

  const certifications = [
    { name: t("education.course1"), year: "2021" },
    { name: t("education.course2"), year: "2022" },
    { name: t("education.course3"), year: "2023" },
  ]

  return (
    <section id="education" className="container space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">{t("education.title")}</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border border-border/40 shadow-sm">
          <CardHeader className="flex flex-row items-center gap-2">
            <div className="rounded-full bg-secondary p-2">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <CardTitle>{t("education.degree")}</CardTitle>
              <CardDescription>{t("education.university")}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{t("education.period")}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/40 shadow-sm">
          <CardHeader className="flex flex-row items-center gap-2">
            <div className="rounded-full bg-secondary p-2">
              <Award className="h-5 w-5" />
            </div>
            <CardTitle>Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span>{cert.name}</span>
                  <span className="text-sm text-muted-foreground">{cert.year}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
