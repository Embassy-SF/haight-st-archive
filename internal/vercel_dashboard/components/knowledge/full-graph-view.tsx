"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

export default function FullGraphView() {
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create a simple placeholder instead of trying to render a complex graph
    const placeholderDiv = document.createElement("div")
    placeholderDiv.className = "w-full h-full flex items-center justify-center bg-muted/50 rounded-lg"
    placeholderDiv.innerHTML = `
      <div class="text-center p-4">
        <div class="text-lg font-medium mb-2">Full Knowledge Graph</div>
        <p class="text-sm text-muted-foreground">Interactive visualization coming soon</p>
      </div>
    `

    container.appendChild(placeholderDiv)

    return () => {
      if (container.contains(placeholderDiv)) {
        container.removeChild(placeholderDiv)
      }
    }
  }, [router])

  return <div ref={containerRef} className="w-full h-full min-h-[500px]" />
}

