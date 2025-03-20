import Link from "next/link"
import { GithubIcon, TwitterIcon, DiscIcon as DiscordIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Ethereum Localism</h3>
            <p className="text-sm text-muted-foreground">{/* Tagline removed */}</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <TwitterIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <DiscordIcon className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <GithubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Core Pages</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/introduction" className="text-muted-foreground hover:text-foreground">
                  Introduction
                </Link>
              </li>
              <li>
                <Link href="/knowledge" className="text-muted-foreground hover:text-foreground">
                  Knowledge Garden
                </Link>
              </li>
              <li>
                <Link href="/introduction/action-kit" className="text-muted-foreground hover:text-foreground">
                  Action Kit
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/introduction/action-kit" className="text-muted-foreground hover:text-foreground">
                  Action Kit
                </Link>
              </li>
              <li>
                <Link href="/knowledge/new" className="text-muted-foreground hover:text-foreground">
                  Contribute to Knowledge
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Commented out for MVP
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground">
                  Localism Resources
                </Link>
              </li>
              <li>
                <Link href="/resources/gfel" className="text-muted-foreground hover:text-foreground">
                  GFEL Resources
                </Link>
              </li>
              <li>
                <Link href="/resources/external" className="text-muted-foreground hover:text-foreground">
                  External Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/network" className="text-muted-foreground hover:text-foreground">
                  Network Registry
                </Link>
              </li>
              <li>
                <Link href="/forum" className="text-muted-foreground hover:text-foreground">
                  Community Forum
                </Link>
              </li>
              <li>
                <Link href="/gatherings" className="text-muted-foreground hover:text-foreground">
                  Gatherings
                </Link>
              </li>
            </ul>
          </div>
          */}
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ethereum Localism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

