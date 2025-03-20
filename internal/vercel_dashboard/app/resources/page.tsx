import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, BookOpen, FileText, Newspaper, Lightbulb, Download } from "lucide-react"

export default function Resources() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Resources</h1>
          <p className="text-xl text-muted-foreground">
            Curated learning materials, tools, and references for Ethereum Localism
          </p>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-7">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Featured Resources</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-sm">
                        Guide
                      </Badge>
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-xl">Getting Started with Ethereum Localism</CardTitle>
                    <CardDescription>
                      A comprehensive introduction to the key concepts, tools, and approaches
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <p className="text-muted-foreground mb-4">
                      This guide walks through the foundational principles of Ethereum Localism and provides practical
                      steps for implementing projects in your community.
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>15 min read</span>
                      <span className="mx-2">•</span>
                      <span>Updated March 2025</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/resources/guides/getting-started">
                        Read Guide
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-sm">
                        Tool
                      </Badge>
                      <Download className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-xl">Local DAO Starter Kit</CardTitle>
                    <CardDescription>Open-source templates and tools for launching a community DAO</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <p className="text-muted-foreground mb-4">
                      This toolkit includes smart contract templates, governance frameworks, and front-end components
                      for creating a locally-focused DAO.
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>MIT License</span>
                      <span className="mx-2">•</span>
                      <span>v2.1.0</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/resources/tools/local-dao-starter">
                        View Toolkit
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Articles & Essays</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        Theory
                      </Badge>
                      <Newspaper className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">The Promise of Blockchain Localism</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Explores how blockchain technology can strengthen local economies and governance systems while
                      connecting to global networks.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span>By Elena Martínez</span>
                      <span className="mx-2">•</span>
                      <span>10 min read</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link
                      href="/resources/articles/blockchain-localism"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      Read Article
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        Economics
                      </Badge>
                      <Newspaper className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">Community Currencies in the Digital Age</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Examines how Ethereum-based community currencies can revitalize local economies and foster
                      community resilience.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span>By Dr. James Chen</span>
                      <span className="mx-2">•</span>
                      <span>12 min read</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link
                      href="/resources/articles/community-currencies"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      Read Article
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        Governance
                      </Badge>
                      <Newspaper className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">DAOs as Community Infrastructure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Discusses how DAOs can serve as governance mechanisms for community resources, projects, and
                      shared assets.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span>By Sophia Williams</span>
                      <span className="mx-2">•</span>
                      <span>8 min read</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link
                      href="/resources/articles/daos-community-infrastructure"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      Read Article
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        Production
                      </Badge>
                      <Newspaper className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">Cosmolocalism: Design Global, Manufacture Local</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Explores how blockchain can enable global knowledge sharing while supporting local production and
                      manufacturing.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span>By Marco Fabbri</span>
                      <span className="mx-2">•</span>
                      <span>15 min read</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link
                      href="/resources/articles/cosmolocalism"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      Read Article
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex justify-center">
                <Button variant="outline" asChild>
                  <Link href="/resources/articles">View All Articles</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Practical Guides</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge className="text-xs">Beginner</Badge>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">Setting Up a Community DAO</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Step-by-step instructions for creating a simple DAO for community projects and governance.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link
                      href="/resources/guides/community-dao"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      View Guide
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge className="text-xs">Intermediate</Badge>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">Designing a Local Token System</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Guide to creating a community currency or token system that serves local economic needs.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link
                      href="/resources/guides/local-token"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      View Guide
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge className="text-xs">Advanced</Badge>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">Implementing Quadratic Funding</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Technical guide to setting up a quadratic funding mechanism for community projects.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link
                      href="/resources/guides/quadratic-funding"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      View Guide
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex justify-center">
                <Button variant="outline" asChild>
                  <Link href="/resources/guides">View All Guides</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Case Studies</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        Europe
                      </Badge>
                      <Lightbulb className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">Barcelona's Digital Commons</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      How Barcelona is using Ethereum to create a digital commons for citizen participation and resource
                      sharing.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link
                      href="/resources/case-studies/barcelona"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      Read Case Study
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        Asia
                      </Badge>
                      <Lightbulb className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">Seoul's Blockchain Initiatives</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Seoul's approach to integrating blockchain technology into municipal services and local
                      governance.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link
                      href="/resources/case-studies/seoul"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      Read Case Study
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex justify-center">
                <Button variant="outline" asChild>
                  <Link href="/resources/case-studies">View All Case Studies</Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Other tab contents would be defined here */}
          <TabsContent value="articles" className="space-y-4">
            <h2 className="text-2xl font-bold">Articles & Essays</h2>
            {/* Articles content */}
          </TabsContent>

          <TabsContent value="guides" className="space-y-4">
            <h2 className="text-2xl font-bold">Practical Guides</h2>
            {/* Guides content */}
          </TabsContent>

          {/* Additional tab contents */}
        </Tabs>
      </div>
    </div>
  )
}

