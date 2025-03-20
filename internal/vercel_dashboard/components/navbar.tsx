import Link from "next/link"
import { Button } from "@/components/ui/button"
import MobileNav from "@/components/mobile-nav"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 soft-border">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Ethereum Localism</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/introduction" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Introduction
            </Link>
            <Link href="/knowledge" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Knowledge
            </Link>
            {/* Commented out for MVP
            <Link href="/initiatives" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Initiatives
            </Link>
            <Link href="/resources" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Resources
            </Link>
            <Link href="/gatherings" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Gatherings
            </Link>
            <Link href="/network" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Network
            </Link>
            <Link href="/forum" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Forum
            </Link>
            */}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <Button asChild variant="default" size="sm">
              <Link href="/introduction/action-kit">Action Kit</Link>
            </Button>
          </nav>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

