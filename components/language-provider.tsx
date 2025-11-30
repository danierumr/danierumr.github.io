"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { en } from "@/locales/en"
import { pt } from "@/locales/pt"

type Language = "en" | "pt"
type Translations = typeof en

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof typeof en) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [translations, setTranslations] = useState<Translations>(en)

  useEffect(() => {
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split("-")[0]
      if (browserLang === "pt") {
        setLanguage("pt")
      }
    }
  }, [])

  useEffect(() => {
    // Update translations when language changes
    if (language === "pt") {
      setTranslations(pt)
    } else {
      setTranslations(en)
    }
    // Save language preference
    localStorage.setItem("language", language)
  }, [language])

  const t = (key: keyof typeof en) => {
    return translations[key] || en[key]
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
