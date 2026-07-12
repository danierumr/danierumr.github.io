"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Gamepad2, Workflow, Monitor } from "lucide-react"

export default function AreasSection() {
  const { t } = useLanguage()

  const areas = [
    {
      title: t("areas.build.title"),
      description: t("areas.build.description"),
      icon: <Workflow className="h-5 w-5" />,
      technologies: [
        "Jenkins",
        "AWS",
        "Terraform",
        "Ansible",
        "GitHub Actions",
      ],
    },
    {
      title: t("areas.game.title"),
      description: t("areas.game.description"),
      icon: <Gamepad2 className="h-5 w-5" />,
      technologies: ["Unreal Engine 5", "Unity", "Godot", "C++", "C#", "GDScript"],
    },
    // {
    //   title: t("areas.software.title"),
    //   description: t("areas.software.description"),
    //   icon: <Cpu className="h-5 w-5" />,
    //   technologies: ["Python", "JavaScript", "TypeScript", "React", "SQL"],
    // },
    // {
    //   title: t("areas.graphics.title"),
    //   description: t("areas.graphics.description"),
    //   icon: <Monitor className="h-5 w-5" />,
    //   technologies: ["OpenGL", "GLFW", "GLSL", "Blender"],
    // },
  ]

  return (
    <section id="areas" className="container space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">{t("areas.title")}</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {areas.map((area, index) => (
          <Card key={index} className="border border-border/40 shadow-sm">
            <CardHeader className="flex flex-row items-center gap-2">
              <div className="rounded-full bg-secondary p-2">{area.icon}</div>
              <CardTitle>{area.title}</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col gap-4">
              <p className="text-sm leading-6 text-muted-foreground">{area.description}</p>
              <div className="flex flex-wrap gap-2">
                {area.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-border bg-muted px-2 py-1 text-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}