import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Users, Calendar, ArrowUpRight } from "lucide-react"

export default function Initiatives() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Initiatives</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Projects and organizations working at the intersection of Ethereum and local communities
          </p>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="governance">Governance</TabsTrigger>
            <TabsTrigger value="economics">Economics</TabsTrigger>
            <TabsTrigger value="production">Production</TabsTrigger>
            <TabsTrigger value="commons">Commons</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Featured Initiatives</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Local DAO Alliance"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-primary/90 hover:bg-primary">Featured</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>Local DAO Alliance</CardTitle>
                    <CardDescription>
                      A global network of community-focused DAOs sharing resources and best practices
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      The Local DAO Alliance connects community-based DAOs around the world, facilitating knowledge
                      sharing, collaborative development, and mutual support.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Governance</Badge>
                      <Badge variant="outline">Community</Badge>
                      <Badge variant="outline">Global Network</Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>Global (30+ countries)</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/initiatives/local-dao-alliance">
                        View Initiative
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Commons Stack"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-primary/90 hover:bg-primary">Featured</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>Commons Stack</CardTitle>
                    <CardDescription>
                      Building infrastructure for community-owned and operated economies
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Commons Stack develops modular, open-source components for creating and managing community
                      economies, with a focus on sustainable funding for public goods.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Economics</Badge>
                      <Badge variant="outline">Public Goods</Badge>
                      <Badge variant="outline">Tooling</Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>Switzerland (with global community)</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/initiatives/commons-stack">
                        View Initiative
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Community Governance</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Aragon</CardTitle>
                    <CardDescription>Building DAO infrastructure for community governance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Aragon provides tools for creating and managing DAOs, with applications for local community
                      governance and decision-making.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                      <Users className="mr-1 h-3 w-3" />
                      <span>5,000+ community members</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/initiatives/aragon" className="text-sm text-primary hover:underline flex items-center">
                      Learn More
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">MetaGov</CardTitle>
                    <CardDescription>Research collective focused on digital governance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      MetaGov researches and develops governance mechanisms for online communities, with applications
                      for local democratic processes.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                      <Users className="mr-1 h-3 w-3" />
                      <span>200+ researchers and contributors</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/initiatives/metagov"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      Learn More
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">DAOhaus</CardTitle>
                    <CardDescription>No-code platform for community DAOs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      DAOhaus makes it easy for communities to create and manage Moloch DAOs without technical
                      expertise, enabling local governance experiments.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                      <Users className="mr-1 h-3 w-3" />
                      <span>700+ DAOs created</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/initiatives/daohaus"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      Learn More
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex justify-center">
                <Button variant="outline" asChild>
                  <Link href="/initiatives/category/governance">View All Governance Initiatives</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Local Economics</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Grassroots Economics</CardTitle>
                    <CardDescription>Community currency networks in Kenya</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Grassroots Economics develops community inclusion currencies that help local communities trade and
                      share resources when national currency is scarce.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                      <MapPin className="mr-1 h-3 w-3" />
                      <span>Kenya</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/initiatives/grassroots-economics"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      Learn More
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">CirclesUBI</CardTitle>
                    <CardDescription>Personal currency system implementing UBI</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      CirclesUBI creates a basic income through personal currencies that expand the local money supply
                      and support community economic resilience.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                      <MapPin className="mr-1 h-3 w-3" />
                      <span>Berlin, Germany (expanding globally)</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/initiatives/circles-ubi"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      Learn More
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Gitcoin</CardTitle>
                    <CardDescription>Quadratic funding for public goods</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Gitcoin's quadratic funding mechanism has applications for local community funding, allowing
                      democratic allocation of resources to projects.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>Quarterly funding rounds</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/initiatives/gitcoin"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      Learn More
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex justify-center">
                <Button variant="outline" asChild>
                  <Link href="/initiatives/category/economics">View All Economic Initiatives</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Local Production</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">SENSORICA</CardTitle>
                    <CardDescription>Open value network for collaborative production</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      SENSORICA creates infrastructure for open, collaborative production networks that enable local
                      manufacturing with global knowledge sharing.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                      <MapPin className="mr-1 h-3 w-3" />
                      <span>Montreal, Canada</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/initiatives/sensorica"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      Learn More
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Fab City</CardTitle>
                    <CardDescription>Global initiative for locally productive cities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Fab City integrates digital fabrication, circular economy principles, and distributed governance
                      to create locally productive and globally connected cities.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                      <MapPin className="mr-1 h-3 w-3" />
                      <span>Global network (40+ cities)</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/initiatives/fab-city"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      Learn More
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Provenance</CardTitle>
                    <CardDescription>Supply chain transparency for local products</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Provenance uses blockchain to track the journey of products, enabling transparency for local
                      producers and manufacturers.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                      <MapPin className="mr-1 h-3 w-3" />
                      <span>United Kingdom (global projects)</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/initiatives/provenance"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      Learn More
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex justify-center">
                <Button variant="outline" asChild>
                  <Link href="/initiatives/category/production">View All Production Initiatives</Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Other tab contents would be defined here */}
        </Tabs>
      </div>
    </div>
  )
}

