import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Tag, Network, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import BacklinksSection from "@/components/knowledge/backlinks-section"
import { TableOfContents } from "@/components/knowledge/table-of-contents"
import { extractHeadings } from "@/lib/utils"

// Sample notes data - in a real app, this would come from a database or API
const notes = {
  "ethereum-localism-principles": {
    title: "Ethereum Localism Principles",
    content: `
      <h2 id="core-principles">Core Principles of Ethereum Localism</h2>
      
      <p>Ethereum Localism represents a synthesis of blockchain technology with localist economic and social principles. At its foundation are several core principles that guide the movement's approach to community building and economic development.</p>
      
      <h3 id="decentralization">1. Decentralization with Purpose</h3>
      
      <p>While decentralization is a technical feature of Ethereum, in Ethereum Localism it becomes a purposeful social and economic design choice. Decentralization is not pursued for its own sake, but as a means to create more equitable, resilient, and participatory local systems.</p>
      
      <p>This principle recognizes that appropriate decentralization can help communities resist extractive economic forces, maintain autonomy in decision-making, and create more inclusive governance structures. It connects to ideas in <a href="/knowledge/note/community-coordination">Community Coordination Mechanisms</a> and <a href="/knowledge/note/local-dao-governance">Local DAO Governance Models</a>.</p>
      
      <h3 id="sovereignty">2. Community Sovereignty</h3>
      
      <p>Ethereum Localism emphasizes the right and ability of communities to design and govern their own solutions using open-source tools and practices. This principle holds that communities should have sovereignty over the technological systems they use and the economic structures they participate in.</p>
      
      <p>This connects to the broader concept of <a href="/knowledge/note/commons-based-peer-production">Commons-Based Peer Production</a> and is implemented through various <a href="/knowledge/note/dao-legal-structures">DAO Legal Structures</a>.</p>
      
      <h3 id="regenerative">3. Regenerative Economics</h3>
      
      <p>Ethereum Localism embraces regenerative economic principles that aim to restore rather than extract value from communities and ecosystems. This approach seeks to create circular economic flows that build community wealth and ecological health over time.</p>
      
      <p>This principle is deeply connected to <a href="/knowledge/note/regenerative-economics-intro">Regenerative Economics</a> and <a href="/knowledge/note/regenerative-cryptoeconomics">Regenerative Cryptoeconomics</a>, and often implemented through <a href="/knowledge/note/community-currencies">Community Currency Design</a>.</p>
      
      <h3 id="cosmolocalism">4. Cosmolocalism</h3>
      
      <p>Summarized as "design global, manufacture local," cosmolocalism represents the approach of sharing knowledge, designs, and protocols globally while implementing solutions locally with available resources and capabilities.</p>
      
      <p>This principle connects Ethereum's global infrastructure with local production and governance, as explored in <a href="/knowledge/note/cosmolocal-production">Cosmolocal Production Patterns</a> and <a href="/knowledge/note/local-manufacturing">Local Manufacturing with Ethereum</a>.</p>
      
      <h3 id="accessibility">5. Technological Accessibility</h3>
      
      <p>For Ethereum Localism to fulfill its potential, the technology must be accessible to diverse communities regardless of technical expertise or economic resources. This principle emphasizes the importance of user-friendly interfaces, educational resources, and low barriers to entry.</p>
      
      <p>This connects to ongoing work in improving blockchain usability and creating appropriate on-ramps for communities new to the technology.</p>
    `,
    lastUpdated: "March 15, 2025",
    author: "Ethereum Localism Core Team",
    tags: ["principles", "theory", "foundations", "decentralization", "sovereignty"],
    links: [
      { id: "community-coordination", title: "Community Coordination Mechanisms" },
      { id: "local-dao-governance", title: "Local DAO Governance Models" },
      { id: "commons-based-peer-production", title: "Commons-Based Peer Production" },
      { id: "dao-legal-structures", title: "DAO Legal Structures" },
      { id: "regenerative-economics-intro", title: "Introduction to Regenerative Economics" },
      { id: "regenerative-cryptoeconomics", title: "Regenerative Cryptoeconomics" },
      { id: "community-currencies", title: "Community Currency Design" },
      { id: "cosmolocal-production", title: "Cosmolocal Production Patterns" },
      { id: "local-manufacturing", title: "Local Manufacturing with Ethereum" },
    ],
    backlinks: [
      {
        id: "local-dao-governance",
        title: "Local DAO Governance Models",
        excerpt:
          "The governance models described here are founded on the core Ethereum Localism Principles, particularly community sovereignty and decentralization with purpose.",
      },
      {
        id: "regenerative-economics-intro",
        title: "Introduction to Regenerative Economics",
        excerpt:
          "Ethereum Localism Principles provide a framework for applying regenerative economics in the context of blockchain technology and local communities.",
      },
      {
        id: "commons-based-peer-production",
        title: "Commons-Based Peer Production",
        excerpt:
          "The cosmolocalism principle from Ethereum Localism Principles aligns closely with commons-based peer production models.",
      },
      {
        id: "community-coordination",
        title: "Community Coordination Mechanisms",
        excerpt:
          "These coordination mechanisms implement the decentralization and community sovereignty principles outlined in Ethereum Localism Principles.",
      },
    ],
  },
}

export default function NotePage({ params }: { params: { id: string } }) {
  const note = notes[params.id as keyof typeof notes]

  if (!note) {
    notFound()
  }

  const toc = extractHeadings(note.content)

  return (
    <div className="lg:grid lg:grid-cols-[1fr_240px] lg:gap-10">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            <Link href="/knowledge" className="hover:text-foreground">
              Knowledge Garden
            </Link>
          </div>
          <div>/</div>
          <div className="font-medium text-foreground">{note.title}</div>
        </div>

        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">{note.title}</h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Updated {note.lastUpdated}</span>
            </div>
            <div>By {note.author}</div>
          </div>

          <div className="flex flex-wrap gap-2 py-2">
            {note.tags.map((tag) => (
              <Link key={tag} href={`/knowledge/tag/${tag}`}>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Tag className="h-3 w-3" />
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
        </div>

        <Separator className="my-4" />

        <div className="prose prose-orange max-w-none" dangerouslySetInnerHTML={{ __html: note.content }} />

        <div className="flex justify-end mt-8">
          <Button asChild>
            <Link href={`/knowledge/edit/${params.id}`}>
              <Edit className="mr-2 h-4 w-4" />
              Edit this note
            </Link>
          </Button>
        </div>

        <Separator className="my-8" />

        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <Network className="h-5 w-5" />
                Links to Other Notes
              </h3>
              <ul className="space-y-1">
                {note.links.map((link) => (
                  <li key={link.id}>
                    <Link href={`/knowledge/note/${link.id}`} className="text-primary hover:underline text-sm">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <BacklinksSection backlinks={note.backlinks} />
        </div>
      </div>

      {/* Right sidebar - Table of Contents */}
      <div className="hidden text-sm lg:block">
        <div className="sticky top-16 -mt-10 pt-10">
          <ScrollArea className="pb-10">
            <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
              <TableOfContents toc={toc} />
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

