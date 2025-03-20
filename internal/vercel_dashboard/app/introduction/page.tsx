import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Network,
  Globe,
  Building,
  Sprout,
  Users,
  Lightbulb,
  Workflow,
  Coins,
  ShieldCheck,
  Zap,
  Laptop,
} from "lucide-react"

export default function Introduction() {
  return (
    <div className="container py-8">
      <div className="mx-auto space-y-16">
        {/* Header Section - replacing the large hero */}
        <div className="space-y-6 max-w-3xl mx-auto text-center mb-12">
          <Badge className="mb-2">Introduction</Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Introduction to Ethereum Localism</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Exploring the intersections of blockchain innovation with community-driven local action
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="#core-principles">Explore Core Principles</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/knowledge">Knowledge Garden</Link>
            </Button>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">What is Ethereum Localism?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Ethereum Localism represents a growing movement at the intersection of blockchain technology and local
              community empowerment. It explores how Ethereum's decentralized infrastructure can strengthen local
              economies, governance systems, and social connections.
            </p>
            <p className="text-lg text-muted-foreground">
              Unlike many blockchain projects that focus primarily on global, borderless applications, Ethereum Localism
              emphasizes the importance of place, community, and local context. It recognizes that while the internet
              and blockchain technology have connected us globally, our daily lives remain deeply rooted in local
              geographies and communities.
            </p>
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=600&text=Local+Community"
              alt="Local Community"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Core Principles Section */}
        <div id="core-principles" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Core Principles</h2>
            <p className="text-lg text-muted-foreground">
              At its foundation, Ethereum Localism is guided by several core principles that shape its approach to
              community building and economic development:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="soft-card">
              <CardHeader className="pb-2">
                <div className="bg-soft-green w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Network className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Decentralization with Purpose</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Decentralization is not the goal in itself but a means to foster more equitable, resilient, and
                  participatory local systems. Ethereum Localism resists the re-centralization of blockchain and Web3
                  technologies by ensuring these tools empower communities rather than recreate traditional power
                  hierarchies.
                </p>
              </CardContent>
            </Card>

            <Card className="soft-card">
              <CardHeader className="pb-2">
                <div className="bg-soft-teal w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Community Sovereignty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Communities should have self-determination over their economies, governance, and digital
                  infrastructures. Ethereum Localism supports empowering local groups to design and govern their own
                  solutions using open-source, cosmo-local tools and practices, preventing capture by centralized
                  authorities.
                </p>
              </CardContent>
            </Card>

            <Card className="soft-card">
              <CardHeader className="pb-2">
                <div className="bg-soft-green w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Sprout className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Regenerative Economics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Economic systems should restore rather than extract value from communities and ecosystems. Ethereum
                  Localism integrates regenerative finance (ReFi), commitment pooling, and cooperative economic models
                  to create public goods and ensure local economies thrive in harmony with their environments.
                </p>
              </CardContent>
            </Card>

            <Card className="soft-card">
              <CardHeader className="pb-2">
                <div className="bg-soft-teal w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Cosmo-Local Coordination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Design global, manufacture local." Ethereum Localism follows a cosmo-local approach, leveraging
                  globally shared knowledge, designs, and protocols while anchoring governance, production, and
                  decision-making at the local level. This principle ensures that global collaboration enhances, rather
                  than undermines, local autonomy.
                </p>
              </CardContent>
            </Card>

            <Card className="soft-card">
              <CardHeader className="pb-2">
                <div className="bg-soft-green w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Technological Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Blockchain and Web3 tools should be accessible to diverse communities regardless of technical
                  expertise or economic resources. Ethereum Localism aims to embed technology into existing mutual aid
                  networks, cooperative economies, and bioregional organizing, ensuring digital infrastructure serves
                  real-world local needs rather than being an end in itself.
                </p>
              </CardContent>
            </Card>

            <div className="bg-accent rounded-lg p-6 flex flex-col justify-center">
              <blockquote className="text-xl italic font-medium text-gray-700">
                "Ethereum Localism balances blockchain's global power and intelligence with values-aligned,
                on-the-ground communities that bring life to the technology—enabling an ecosystem that roots down deeper
                to rise up higher."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="space-y-8 bg-muted/30 py-12 px-8 rounded-xl">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Applications and Use Cases</h2>
            <p className="text-lg text-muted-foreground">
              Ethereum Localism manifests in various applications that demonstrate how blockchain technology can serve
              local needs:
            </p>
          </div>

          <Tabs defaultValue="currencies" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="currencies">Local Currencies</TabsTrigger>
              <TabsTrigger value="governance">Community Governance</TabsTrigger>
              <TabsTrigger value="commons">Commons Management</TabsTrigger>
              <TabsTrigger value="production">Local Production</TabsTrigger>
            </TabsList>

            <TabsContent value="currencies" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Local+Currencies"
                    alt="Local Currencies"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Local Currencies and Economic Systems</h3>
                  <p className="text-muted-foreground">
                    Community currencies, local token systems, and neighborhood marketplaces built on peer-to-peer
                    networks help keep wealth circulating within communities, support local businesses, and incentivize
                    community participation.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Coins className="h-5 w-5 text-primary" />
                      <span>Community currencies with local businesses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Workflow className="h-5 w-5 text-primary" />
                      <span>Mutual credit systems for local exchange</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>Neighborhood marketplaces and sharing economies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="governance" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Community Governance</h3>
                  <p className="text-muted-foreground">
                    Coordination tools like DAOs (Decentralized Autonomous Organizations) can provide transparent,
                    participatory governance for community projects, shared resources, and local decision-making
                    processes.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Building className="h-5 w-5 text-primary" />
                      <span>Neighborhood decision-making platforms</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                      <span>Transparent community treasury management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      <span>Participatory budgeting and proposal systems</span>
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Community+Governance"
                    alt="Community Governance"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="commons" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Commons+Management"
                    alt="Commons Management"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Commons Management</h3>
                  <p className="text-muted-foreground">
                    Smart contracts can help communities manage shared resources, from community gardens and tool
                    libraries to shared renewable energy systems and community spaces.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Sprout className="h-5 w-5 text-primary" />
                      <span>Community garden coordination and resource sharing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      <span>Local renewable energy microgrids</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Building className="h-5 w-5 text-primary" />
                      <span>Shared community spaces and equipment libraries</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="production" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Local Production Networks</h3>
                  <p className="text-muted-foreground">
                    Blockchain-based systems coordinate local manufacturing, track provenance of locally-produced goods,
                    and facilitate sharing of designs and knowledge.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Workflow className="h-5 w-5 text-primary" />
                      <span>Distributed manufacturing coordination</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" />
                      <span>Open source design repositories with local fabrication</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Network className="h-5 w-5 text-primary" />
                      <span>Supply chain transparency</span>
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Local+Production"
                    alt="Local Production"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Final CTA Section - Moved above Challenges section */}
        <div className="text-center max-w-2xl mx-auto space-y-6 mb-24">
          <h2 className="text-3xl font-bold tracking-tight">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground">
            Join the growing community of Ethereum Localists working to create more resilient, equitable, and
            regenerative local systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/introduction/action-kit">Get the Action Kit</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/knowledge">Explore Knowledge Garden</Link>
            </Button>
          </div>
        </div>

        {/* Challenges Section - Now after the CTA */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Challenges and Considerations</h2>
            <p className="text-lg text-muted-foreground">
              While promising, Ethereum Localism faces several challenges that must be addressed:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Technical Barriers",
                description:
                  "Blockchain technology remains complex and inaccessible to many people, requiring thoughtful onboarding and user experience design.",
                icon: <Laptop className="h-6 w-6 text-white" />,
              },
              {
                title: "Regulatory Uncertainty",
                description:
                  "The legal and regulatory landscape for blockchain-based community systems is still evolving.",
                icon: <ShieldCheck className="h-6 w-6 text-white" />,
              },
              {
                title: "Digital Divide",
                description: "Access to technology and digital literacy varies widely within and between communities.",
                icon: <Network className="h-6 w-6 text-white" />,
              },
              {
                title: "Infrastructure Resilience",
                description:
                  "Ensuring decentralized networks remain functional in low-connectivity environments is crucial for widespread adoption.",
                icon: <Zap className="h-6 w-6 text-white" />,
              },
              {
                title: "Balancing Local and Global",
                description:
                  "Finding the right balance between local autonomy and global interoperability is an ongoing challenge.",
                icon: <Globe className="h-6 w-6 text-white" />,
              },
              {
                title: "Market Volatility",
                description:
                  "Price instability can impact funding, payments, and the reliability of blockchain-based financial tools.",
                icon: <Coins className="h-6 w-6 text-white" />,
              },
            ].map((challenge, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader className="pb-2 flex flex-row items-center gap-4">
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center">
                    {challenge.icon}
                  </div>
                  <CardTitle>{challenge.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Getting Involved Section - Commented out for MVP since it links to pages not included */}
        {/* 
      <div className="bg-accent rounded-xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Getting Involved</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Ethereum Localism is an open, evolving movement that only exists through participation from diverse
              perspectives and backgrounds. Whether you're a blockchain developer, community organizer, local
              government official, or simply interested in strengthening your local community, there are many ways to
              get involved.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Explore the resources, initiatives, and community forums on this site to learn more and connect with
              others working at the intersection of blockchain and local community empowerment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/initiatives">
                  Explore Initiatives
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/forum">
                  Join the Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Card className="bg-primary/5 border-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Join a Local Group</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Connect with Ethereum Localists in your area</p>
                </CardContent>
                <CardFooter>
                  <Link href="/network" className="text-sm text-primary hover:underline flex items-center">
                    Find Groups
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-primary/5 border-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Attend Gatherings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Participate in local and global events</p>
                </CardContent>
                <CardFooter>
                  <Link href="/gatherings" className="text-sm text-primary hover:underline flex items-center">
                    View Calendar
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <div className="space-y-4">
              <Card className="bg-primary/5 border-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Start a Project</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Launch an initiative in your community</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/introduction/action-kit"
                    className="text-sm text-primary hover:underline flex items-center"
                  >
                    Get Action Kit
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-primary/5 border-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Learn More</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Explore educational resources and guides</p>
                </CardContent>
                <CardFooter>
                  <Link href="/resources" className="text-sm text-primary hover:underline flex items-center">
                    Browse Resources
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
      */}
      </div>
    </div>
  )
}

