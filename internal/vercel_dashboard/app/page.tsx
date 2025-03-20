import Link from "next/link"
import Image from "next/image"
import { Book, Users, Calendar, Network, FileText, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background">
        <div className="container py-12 md:py-24">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Ethereum Localism</h1>
              <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                Connecting Ethereum's global technologies with local community action to support regenerative systems
                and more vibrant local economies.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button asChild>
                  <Link href="/introduction">Learn More</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/knowledge">Knowledge Garden</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg soft-border">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Ethereum Localism Community"
                className="object-cover"
                fill
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR Section */}
      <section className="container py-8 md:py-12">
        <div className="mx-auto max-w-[800px] space-y-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">TL;DR</h2>
          <p className="text-lg text-muted-foreground">
            Ethereum Localism bridges digital innovation with real-world impact through community-driven initiatives,
            enabling new, sustainable local economies powered by blockchain and peer to peer technologies.
          </p>
        </div>
      </section>

      {/* Knowledge Garden - Moved up */}
      <section className="container py-8 md:py-12 bg-accent rounded-lg">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Knowledge Garden</h2>
            <p className="text-muted-foreground">
              Explore our interconnected collection of ideas, concepts, and resources on Ethereum Localism. The
              Knowledge Garden grows through community contributions and provides a rich, networked understanding of the
              movement.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Network className="h-4 w-4" />
                </div>
                <span>Interconnected notes with bidirectional links</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <FileText className="h-4 w-4" />
                </div>
                <span>Community-maintained knowledge base</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Tag className="h-4 w-4" />
                </div>
                <span>Organized by tags and connections</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/knowledge">Explore the Garden</Link>
            </Button>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/graphic-KnowledgeGarden-FINAL.jpg-vGLKf6XJJf8FtOG2ePWjBhyBf85twB.jpeg"
              alt="Ethereum Localism Knowledge Garden"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </section>

      {/* Community Initiatives - Commented out for MVP
    <section className="container py-8 md:py-12">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Community Initiative Spotlights</h2>
          <Link href="/initiatives" className="flex items-center text-sm font-medium text-primary hover:underline">
            View All
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>A General Forum on Ethereum Localism</CardTitle>
              <CardDescription>Global community gathering</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="https://sjc.microlink.io/3pVKuqr54gHTUuPWjhdEQG6XEfua_jUGKCJE69v_DCwxSiDjLhuo8FharaLX0plWROEIK6coq149R7HZtQrgAg.jpeg"
                  alt="General Forum on Ethereum Localism"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Global</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/initiatives/gfel">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Local DAO Summer 2024</CardTitle>
              <CardDescription>Community-driven local funding</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Local DAO Summer 2024"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Multiple Locations</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/initiatives/local-dao">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Ethereum Localism Goes Cosmolocal</CardTitle>
              <CardDescription>GFEL Announcement Boulder 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Ethereum Localism Goes Cosmolocal"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Boulder, CO</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/initiatives/cosmolocal">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
    */}

      {/* Action Kit */}
      <section className="bg-muted py-8 md:py-12">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Ethereum Localism Action Kit</h2>
              <p className="text-muted-foreground">
                Ready to grow the movement in your community? Our Action Kit provides tools to help you get started
                creating local impact, powered by Ethereum.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <span>Host an Eth Localism event</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users className="h-4 w-4" />
                  </div>
                  <span>Run an AlloIRL funding round</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Book className="h-4 w-4" />
                  </div>
                  <span>Start a Regen Hub</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/introduction/action-kit">Get the Action Kit</Link>
              </Button>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Ethereum Localism Action Kit"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gatherings - Commented out for MVP
    <section className="container py-8 md:py-12">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Ethereum Localism Gatherings</h2>
          <Link href="/gatherings" className="flex items-center text-sm font-medium text-primary hover:underline">
            View All
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {["Regular Meetup", "Community Gathering", "Regen Hub", "GFEL"].map((type) => (
            <Card key={type}>
              <CardHeader>
                <CardTitle className="text-lg">{type}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Learn how to organize and participate in {type.toLowerCase()} events in your local community.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href={`/gatherings/${type.toLowerCase().replace(/\s+/g, "-")}`}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
    */}

      {/* Resources and Registry - Commented out for MVP
    <section className="bg-accent py-8 md:py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Resource Collections</CardTitle>
              <CardDescription>Curated resources for all knowledge levels</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span>Ethereum Localist Cookbook</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/resources/cookbook">
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </li>
                <li className="flex items-center justify-between">
                  <span>Ethereum Localism by The Open Machine</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/resources/open-machine">
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </li>
                <li className="flex items-center justify-between">
                  <span>Blockchain 101</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/resources/blockchain-101">
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources">Browse All Resources</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Network Registry</CardTitle>
              <CardDescription>Find and connect with local Ethereum communities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Network Registry Map"
                  className="object-cover"
                  fill
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/network">Explore the Network</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
    */}

      {/* Community Forum - Commented out for MVP
    <section className="container py-12 md:py-24">
      <div className="mx-auto max-w-[800px] space-y-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Join the Community Forum</h2>
        <p className="text-lg text-muted-foreground">
          Connect with other Ethereum localists, share knowledge, and collaborate on initiatives that matter to your
          community.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/forum">Join the Forum</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/network#telegram">Telegram Groups</Link>
          </Button>
        </div>
      </div>
    </section>
    */}

      {/* Final CTA Section */}
      <section className="container py-12 md:py-24">
        <div className="mx-auto max-w-[800px] space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground">
            Join the growing community of Ethereum Localists working toward more resilient, equitable, and regenerative
            local systems.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/introduction/action-kit">Get the Action Kit</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/knowledge">Explore Knowledge Garden</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

