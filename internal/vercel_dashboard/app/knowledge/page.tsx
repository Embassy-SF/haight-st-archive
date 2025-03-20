import Link from "next/link"
import { Network, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import GraphView from "@/components/knowledge/graph-view"

// Sample knowledge data - in a real app, this would come from a database or API
const recentNotes = [
  {
    id: "ethereum-localism-principles",
    title: "Ethereum Localism Principles",
    excerpt: "Core principles that define the Ethereum Localism movement and its approach to community building.",
    lastUpdated: "2 days ago",
    tags: ["principles", "theory", "foundations"],
    connections: 8,
  },
  {
    id: "local-dao-governance",
    title: "Local DAO Governance Models",
    excerpt: "Different governance approaches for community-based DAOs with a focus on local decision making.",
    lastUpdated: "5 days ago",
    tags: ["governance", "local-dao", "decision-making"],
    connections: 12,
  },
  {
    id: "cosmolocal-production",
    title: "Cosmolocal Production Patterns",
    excerpt: "Patterns for implementing 'design global, manufacture local' approaches using Ethereum infrastructure.",
    lastUpdated: "1 week ago",
    tags: ["cosmolocalism", "production", "manufacturing"],
    connections: 7,
  },
  {
    id: "regenerative-economics-intro",
    title: "Introduction to Regenerative Economics",
    excerpt: "Foundational concepts of regenerative economics and how they relate to Ethereum Localism.",
    lastUpdated: "2 weeks ago",
    tags: ["economics", "regenerative", "theory"],
    connections: 15,
  },
  {
    id: "community-currencies",
    title: "Community Currency Design",
    excerpt: "Approaches to designing and implementing local currencies using Ethereum tokens.",
    lastUpdated: "3 weeks ago",
    tags: ["currencies", "tokens", "implementation"],
    connections: 9,
  },
]

const popularTags = [
  { name: "theory", count: 24 },
  { name: "implementation", count: 18 },
  { name: "governance", count: 15 },
  { name: "local-dao", count: 14 },
  { name: "economics", count: 12 },
  { name: "cosmolocalism", count: 10 },
  { name: "case-study", count: 9 },
  { name: "currencies", count: 8 },
  { name: "regenerative", count: 7 },
  { name: "technical", count: 6 },
]

export default function Knowledge() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Knowledge Garden</h1>
        <p className="text-lg text-muted-foreground">
          An interconnected collection of ideas, concepts, and resources on Ethereum Localism
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Knowledge Graph</CardTitle>
          <CardDescription>Visual representation of connections between notes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-[16/9] w-full rounded-md border bg-muted">
            <GraphView />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" asChild className="w-full">
            <Link href="/knowledge/graph">
              Explore Full Graph
              <Network className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Recent Notes</h2>
            {/* Commenting out this link as it's not part of MVP */}
            {/* 
          <Link href="/knowledge/recent" className="text-sm text-primary hover:underline flex items-center">
            View All
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
          */}
          </div>

          <div className="space-y-4">
            {recentNotes.slice(0, 3).map((note) => (
              <Card key={note.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      <Link href={`/knowledge/note/${note.id}`} className="hover:text-primary">
                        {note.title}
                      </Link>
                    </CardTitle>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Updated {note.lastUpdated}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">{note.excerpt}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {note.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {note.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{note.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Network className="h-3 w-3" />
                    <span>{note.connections} connections</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>About the Knowledge Garden</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                The Ethereum Localism Knowledge Garden is a collaborative space for interconnected ideas, concepts, and
                resources. Unlike traditional documentation, notes here are:
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
                <li>Interconnected with bidirectional links</li>
                <li>Evolving and growing over time</li>
                <li>Community-maintained and collaborative</li>
                <li>Focused on both theory and practical implementation</li>
              </ul>
            </CardContent>
            <CardFooter>
              {/* Commenting out this link as it's not part of MVP */}
              {/* 
            <Button variant="outline" asChild className="w-full">
              <Link href="/knowledge/guide">How to Use the Garden</Link>
            </Button>
            */}
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Popular Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {popularTags.slice(0, 8).map((tag) => (
                  <span key={tag.name} className="cursor-default">
                    <Badge variant="outline" className="flex items-center gap-1">
                      {tag.name}
                      <span className="ml-1 rounded-full bg-muted px-1.5 text-xs">{tag.count}</span>
                    </Badge>
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              {/* Commenting out this link as it's not part of MVP */}
              {/* 
            <Button variant="outline" asChild className="w-full">
              <Link href="/knowledge/tags">
                View All Tags
                <Tag className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            */}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

