"use client"

import type React from "react"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, Github, Twitter, Linkedin, Youtube, Instagram, X } from "lucide-react"

export default function ContactSection() {
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    alert("This would send an email in a real implementation")
  }

  return (
    <section id="contact" className="container space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">{t("contact.title")}</h2>
      {/* <p className="text-muted-foreground">{t("contact.description")}</p> */}

      <div className="grid gap-6 md:grid-cols-1">
        {/* <Card className="border border-border/40 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="rounded-full bg-secondary p-2">
                <Mail className="h-5 w-5" />
              </div>
              {t("contact.email")}
            </CardTitle>
            <CardDescription>Send me a message and I'll get back to you</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="How can I help you?" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message..." rows={4} required />
              </div>
              <Button type="submit" className="w-full gap-2">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card> */}

        <Card className="border border-border/120 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {t("contact.social")}
            </CardTitle>
            <CardDescription>{t("contact.connectwithme")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <SocialLink
              icon={<img src="/icons/itchio-textless-black.svg" alt="itch.io icon" className="h-5 w-5" />}
              platform="itch.io"
              username="Daniel"
              href="https://mrdanieru.itch.io/"
              isLocalIcon={true}
            />
              <SocialLink
                icon={<Linkedin className="h-5 w-5" />}
                platform="LinkedIn"
                username="Daniel Rosado"
                href="https://www.linkedin.com/in/danierumr/"
              />
            <SocialLink
              icon={<Github className="h-5 w-5" />}
              platform="GitHub"
              username="danierumr"
              href="https://github.com/danierumr"
            />
            <SocialLink
              icon={<img src="/icons/x.svg" alt="X icon" className="h-5 w-5" />}
              platform="X"
              username="@dmr_838"
              href="https://x.com/dmr_838"
              isLocalIcon={true}
            />
            <SocialLink
              icon={<img src="/icons/threads.svg" alt="Threads icon" className="h-5 w-5" />}
              platform="Threads"
              username="@mrdanieru"
              href="https://threads.net/@mrdanieru"
              isLocalIcon={true}
            />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function SocialLink({
  icon,
  platform,
  username,
  href,
  isLocalIcon = false, // New prop to indicate if the icon is local
}: {
  icon: React.ReactNode
  platform: string
  username: string
  href: string
  isLocalIcon?: boolean
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-lg border border-border/40 p-3 transition-colors hover:bg-secondary"
    >
      <div className={`h-5 w-5 ${isLocalIcon ? "dark:invert" : ""}`}>{icon}</div>
      <div>
        <div className="font-medium">{platform}</div>
        <div className="text-sm text-muted-foreground">{username}</div>
      </div>
    </a>
  )
}