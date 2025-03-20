import type React from "react"
import Link from "next/link"
import { Network, FileText, Search, Home, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export default function KnowledgeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr_240px] md:gap-6 lg:gap-10 py-8">
        {/* Left Sidebar - Main Navigation */}
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search knowledge..." className="w-full pl-8 mb-4" />
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="outline" asChild className="justify-start">
                <Link href="/knowledge">
                  <Home className="mr-2 h-4 w-4" />
                  Knowledge Home
                </Link>
              </Button>
              <Button variant="outline" asChild className="justify-start">
                <Link href="/knowledge/graph">
                  <Network className="mr-2 h-4 w-4" />
                  Knowledge Graph
                </Link>
              </Button>
              {/* Commenting out links to pages not in MVP */}
              {/* 
            <Button variant="outline" asChild className="justify-start">
              <Link href="/knowledge/recent">
                <Book className="mr-2 h-4 w-4" />
                Recent Notes
              </Link>
            </Button>
            <Button variant="outline" asChild className="justify-start">
              <Link href="/knowledge/tags">
                <Tag className="mr-2 h-4 w-4" />
                Browse Tags
              </Link>
            </Button>
            <Button variant="outline" asChild className="justify-start">
              <Link href="/knowledge/random">
                <Compass className="mr-2 h-4 w-4" />
                Random Note
              </Link>
            </Button>
            */}
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <h4 className="text-sm font-medium">Popular Categories</h4>
              <div className="grid grid-flow-row auto-rows-max text-sm">
                {/* Commenting out links to tag pages not in MVP */}
                {/* 
              <Link
                href="/knowledge/tag/theory"
                className="flex w-full items-center rounded-md p-2 hover:underline text-muted-foreground hover:text-foreground"
              >
                Theory & Principles
              </Link>
              <Link
                href="/knowledge/tag/governance"
                className="flex w-full items-center rounded-md p-2 hover:underline text-muted-foreground hover:text-foreground"
              >
                Governance Models
              </Link>
              <Link
                href="/knowledge/tag/economics"
                className="flex w-full items-center rounded-md p-2 hover:underline text-muted-foreground hover:text-foreground"
              >
                Regenerative Economics
              </Link>
              <Link
                href="/knowledge/tag/implementation"
                className="flex w-full items-center rounded-md p-2 hover:underline text-muted-foreground hover:text-foreground"
              >
                Implementation Guides
              </Link>
              <Link
                href="/knowledge/tag/case-study"
                className="flex w-full items-center rounded-md p-2 hover:underline text-muted-foreground hover:text-foreground"
              >
                Case Studies
              </Link>
              <Link
                href="/knowledge/tag/cosmolocalism"
                className="flex w-full items-center rounded-md p-2 hover:underline text-muted-foreground hover:text-foreground"
              >
                Cosmolocalism
              </Link>
              */}
                <div className="text-muted-foreground p-2">Theory & Principles</div>
                <div className="text-muted-foreground p-2">Governance Models</div>
                <div className="text-muted-foreground p-2">Regenerative Economics</div>
                <div className="text-muted-foreground p-2">Implementation Guides</div>
                <div className="text-muted-foreground p-2">Case Studies</div>
                <div className="text-muted-foreground p-2">Cosmolocalism</div>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <h4 className="text-sm font-medium">Contribute</h4>
              <div className="grid grid-flow-row auto-rows-max text-sm">
                {/* Commenting out links to pages not in MVP */}
                {/* 
              <Button asChild variant="default" size="sm">
                <Link href="/knowledge/new">
                  <Plus className="mr-2 h-4 w-4" />
                  New Note
                </Link>
              </Button>
              <Link
                href="/knowledge/guide"
                className="flex w-full items-center rounded-md p-2 hover:underline text-muted-foreground hover:text-foreground mt-2"
              >
                <FileText className="mr-2 h-4 w-4" />
                Contribution Guide
              </Link>
              */}
                <div className="text-muted-foreground p-2">
                  <Plus className="inline mr-2 h-4 w-4" />
                  New Note (Coming Soon)
                </div>
                <div className="text-muted-foreground p-2 mt-2">
                  <FileText className="inline mr-2 h-4 w-4" />
                  Contribution Guide (Coming Soon)
                </div>
              </div>
            </div>
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid">{children}</main>

        {/* Right Sidebar - Only shown on note pages, handled by the page component */}
      </div>
    </div>
  )
}

