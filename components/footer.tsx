"use client"

import type React from "react"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="text-xl font-bold text-primary"></div>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {currentYear} Daniel. {t("footer.rights")}
            </p>
          </div>
          <div className="flex gap-4">
            <SocialButton href="https://mrdanieru.itch.io/" icon={<img src="/icons/itchio-textless-black.svg" className="h-5 w-5" />} isLocalIcon={true} />
            <SocialButton href="https://www.linkedin.com/in/danierumr/" icon={<Linkedin className="h-5 w-5" />} />
            <SocialButton href="https://github.com/danierumr" icon={<Github className="h-5 w-5" />} />
            <SocialButton href="https://x.com/dmr_838" icon={<img src="/icons/x.svg" alt="X icon" className="h-5 w-5" />} isLocalIcon={true} />
            <SocialButton href="https://threads.net/@mrdanieru" icon={<img src="/icons/threads.svg" alt="Threads icon" className="h-5 w-5" />} isLocalIcon={true} />
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialButton({ href, icon, isLocalIcon = false }: { href: string; icon: React.ReactNode; isLocalIcon?: boolean }) {
  return (
    <Button asChild variant="ghost" size="icon">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className={`h-5 w-5 ${isLocalIcon ? "dark:invert" : ""}`}>{icon}</div>
      </a>
    </Button>
  )
}
