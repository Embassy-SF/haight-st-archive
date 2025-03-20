"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TableOfContentsProps {
  toc: Array<{
    id: string
    level: number
    text: string
  }>
}

export function TableOfContents({ toc }: TableOfContentsProps) {
  const [activeHeading, setActiveHeading] = useState("")

  useEffect(() => {
    if (toc.length === 0) return

    const headingElements = toc.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[]

    const headingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -80% 0px" },
    )

    headingElements.forEach((element) => {
      headingObserver.observe(element)
    })

    return () => {
      headingElements.forEach((element) => {
        headingObserver.unobserve(element)
      })
    }
  }, [toc])

  if (toc.length === 0) {
    return null
  }

  return (
    <div className="space-y-2">
      <p className="font-medium">On This Page</p>
      <ul className="m-0 list-none p-0">
        {toc.map(({ id, level, text }) => (
          <li key={id} className={cn("mt-0 pt-2", level === 3 && "pl-4")}>
            <a
              href={`#${id}`}
              className={cn(
                "inline-block no-underline transition-colors hover:text-foreground",
                activeHeading === id ? "font-medium text-foreground" : "text-muted-foreground",
              )}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

