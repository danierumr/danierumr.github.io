"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Code, Palette, CuboidIcon as Cube } from "lucide-react"

export default function SkillsSection() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t("skills.gamedev"),
      icon: <Gamepad2 className="h-5 w-5" />,
      skills: [t("skills.engine.unreal"), t("skills.engine.godot"), t("skills.engine.unity")],
    },
    {
      title: t("skills.programming"),
      icon: <Code className="h-5 w-5" />,
      skills: [t("skills.lang.cpp"), t("skills.lang.csharp"), t("skills.lang.gd"), t("skills.lang.js")],
    },
    // {
    //   title: t("skills.design"),
    //   icon: <Palette className="h-5 w-5" />,
    //   skills: [t("skills.tools.photoshop"), "UI/UX", t("skills.tools.git")],
    // },
    // {
    //   title: t("skills.art"),
    //   icon: <Cube className="h-5 w-5" />,
    //   skills: [t("skills.tools.blender"), "Character Design", "Environment Art"],
    // },
  ]

  return (
    <section id="skills" className="container space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">{t("skills.title")}</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category, index) => (
          <Card key={index} className="border border-border/40 shadow-sm">
            <CardHeader className="flex flex-row items-center gap-2">
              <div className="rounded-full bg-secondary p-2">{category.icon}</div>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
