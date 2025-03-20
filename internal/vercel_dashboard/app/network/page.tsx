import Link from "next/link"
import Image from "next/image"
import { MapPin, MessageCircle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Sample network data - in a real app, this would come from a database or API
const communities = [
  {
    id: "berlin-ethereum",
    name: "Berlin Ethereum Localists",
    location: "Berlin, Germany",
    members: 120,
    established: "2022",
    focus: ["Local DAO", "Regen Hub", "Education"],
    image: "/placeholder.svg?height=200&width=200",
    telegram: "https://t.me/berlinethereumlocalists",
  },
  {
    id: "amsterdam-regen",
    name: "Amsterdam Regenerative Commons",
    location: "Amsterdam, Netherlands",
    members: 85,
    established: "2021",
    focus: ["Regenerative Economics", "GFEL", "Local Currency"],
    image: "/placeholder.svg?height=200&width=200",
    telegram: "https://t.me/amsterdamregencommons",
  },
  {
    id: "boulder-eth",
    name: "Boulder Ethereum Community",
    location: "Boulder, CO, USA",
    members: 65,
    established: "2023",
    focus: ["Cosmolocalism", "Food Systems", "Local DAO"],
    image: "/placeholder.svg?height=200&width=200",
    telegram: "https://t.me/boulderethcommunity",
  },
  {
    id: "bangkok-local",
    name: "Bangkok Local Web3",
    location: "Bangkok, Thailand",
    members: 95,
    established: "2022",
    focus: ["Education", "Local DAO", "Regen Hub"],
    image: "/placeholder.svg?height=200&width=200",
    telegram: "https://t.me/bangkoklocalweb3",
  },
  {
    id: "buenos-aires",
    name: "Buenos Aires Ethereum Local",
    location: "Buenos Aires, Argentina",
    members: 110,
    established: "2021",
    focus: ["Local Currency", "Education", "Community Funding"],
    image: "/placeholder.svg?height=200&width=200",
    telegram: "https://t.me/baethlocal",
  },
  {
    id: "lagos-eth",
    name: "Lagos Ethereum Community",
    location: "Lagos, Nigeria",
    members: 75,
    established: "2023",
    focus: ["Education", "Local DAO", "Developer Training"],
    image: "/placeholder.svg?height=200&width=200",
    telegram: "https://t.me/lagosethcommunity",
  },
]

const telegramGroups = [
  {
    id: "global-coordination",
    name: "Ethereum Localism Global",
    description: "Main coordination channel for the global movement",
    members: 450,
    link: "https://t.me/ethereumlocalism",
  },
  {
    id: "gfel-planning",
    name: "GFEL Planning",
    description: "Coordination for General Forum on Ethereum Localism events",
    members: 120,
    link: "https://t.me/gfelplanning",
  },
  {
    id: "local-dao-summer",
    name: "Local DAO Summer",
    description: "Coordination for the Local DAO Summer initiative",
    members: 210,
    link: "https://t.me/localdaosummer",
  },
  {
    id: "regen-hub-network",
    name: "Regen Hub Network",
    description: "Connecting regenerative hubs around the world",
    members: 180,
    link: "https://t.me/regenhubnetwork",
  },
  {
    id: "cosmolocal-working",
    name: "Cosmolocal Working Group",
    description: "Working group for cosmolocal projects and research",
    members: 95,
    link: "https://t.me/cosmolocalworking",
  },
]

export default function Network() {
  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Network Registry</h1>
          <p className="text-lg text-muted-foreground">
            Connect with Ethereum Localism communities and initiatives around the world
          </p>
        </div>

        <div className="relative aspect-[2/1] overflow-hidden rounded-lg border">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-10"></div>
          <Image
            src="/placeholder.svg?height=400&width=800&text=Interactive+Map+(Coming+Soon)"
            alt="Interactive Map of Ethereum Localism Communities"
            className="object-cover"
            fill
          />
          <div className="absolute bottom-4 left-4 z-20">
            <h2 className="text-xl font-bold mb-2">Global Community Map</h2>
            <p className="text-sm text-muted-foreground max-w-md">
              Interactive map of Ethereum Localism communities worldwide (coming soon)
            </p>
          </div>
        </div>

        <Tabs defaultValue="communities" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="communities">Local Communities</TabsTrigger>
            <TabsTrigger value="telegram" id="telegram">
              Telegram Groups
            </TabsTrigger>
          </TabsList>

          <TabsContent value="communities" className="space-y-6 pt-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {communities.map((community) => (
                <Card key={community.id}>
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={community.image || "/placeholder.svg"}
                        alt={community.name}
                        className="object-cover"
                        fill
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{community.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {community.location}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{community.members} members</span>
                        </div>
                        <div className="text-muted-foreground">Est. {community.established}</div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {community.focus.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/network/${community.id}`}>Profile</Link>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={community.telegram} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Join
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="rounded-lg bg-muted p-6 text-center">
              <h2 className="text-xl font-bold mb-2">Add Your Community</h2>
              <p className="text-muted-foreground mb-4">
                Is your Ethereum Localism community not listed? Add it to our registry.
              </p>
              <Button asChild>
                <Link href="/network/add">Register Community</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="telegram" className="space-y-6 pt-4">
            <div className="space-y-4">
              {telegramGroups.map((group) => (
                <Card key={group.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{group.name}</CardTitle>
                      <Badge variant="outline">{group.members} members</Badge>
                    </div>
                    <CardDescription>{group.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <a href={group.link} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Join Group
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="rounded-lg border p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold">Telegram Community Guidelines</h2>
                  <p className="text-sm text-muted-foreground">
                    Please review our community guidelines before joining the conversation.
                  </p>
                </div>
                <Button variant="outline" asChild>
                  <Link href="/network/guidelines">View Guidelines</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Benefits of Joining the Network</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Knowledge Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access shared resources, case studies, and lessons learned from other communities implementing
                  Ethereum Localism projects.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Collaboration Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Find partners for joint initiatives, funding opportunities, and cross-community projects to amplify
                  your impact.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Global Support Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Connect with a global community of practitioners who can provide guidance, feedback, and support for
                  your local efforts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

