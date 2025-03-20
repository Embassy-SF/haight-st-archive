import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function extractHeadings(html: string) {
  const headingRegex = /<h([2-3])\s+id="([^"]+)"[^>]*>([^<]+)<\/h\1>/g
  const headings = []
  let match

  while ((match = headingRegex.exec(html)) !== null) {
    headings.push({
      level: Number.parseInt(match[1], 10),
      id: match[2],
      text: match[3].trim(),
    })
  }

  return headings
}

