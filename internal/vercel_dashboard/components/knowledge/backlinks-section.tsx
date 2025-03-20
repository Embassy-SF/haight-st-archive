import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Backlink {
  id: string
  title: string
  excerpt: string
}

interface BacklinksSectionProps {
  backlinks: Backlink[]
}

export default function BacklinksSection({ backlinks }: BacklinksSectionProps) {
  if (!backlinks || backlinks.length === 0) {
    return (
      <Card>
        <CardContent className="p-4">
          <h3 className="font-medium mb-2">Backlinks</h3>
          <p className="text-sm text-muted-foreground">No other notes link to this note yet.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="font-medium mb-2">Backlinks</h3>
        <ul className="space-y-3">
          {backlinks.map((link) => (
            <li key={link.id} className="space-y-1">
              <Link
                href={`/knowledge/note/${link.id}`}
                className="flex items-center text-primary hover:underline font-medium text-sm"
              >
                {link.title}
                <ArrowUpRight className="ml-1 h-3 w-3" />
              </Link>
              <p className="text-xs text-muted-foreground">{link.excerpt}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

