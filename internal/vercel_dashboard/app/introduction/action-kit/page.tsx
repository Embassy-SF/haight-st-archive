import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Users, Calendar, Globe, ArrowRight } from "lucide-react"

export default function ActionKit() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <Badge className="mb-2">Action Kit</Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Ethereum Localism Action Kit</h1>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg?height=400&width=800&text=Action+Kit+Hero"
            alt="Ethereum Localism Action Kit"
            className="object-cover"
            fill
          />
        </div>

        {/* Introduction */}
        <div className="space-y-6">
          <p className="text-lg">
            The Ethereum Localism Action Kit is designed to help you bring the principles of Ethereum Localism to life
            in your community. Whether you're new to blockchain technology or an experienced developer, this kit
            provides practical tools, templates, and guidance to create local impact.
          </p>
          <p className="text-lg">
            This kit is modular by design - you can use the parts that make sense for your community and adapt them to
            your local context. The goal is to empower you to experiment with new forms of local coordination,
            governance, and economic activity using Ethereum as infrastructure.
          </p>
        </div>

        {/* Kit Components */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Kit Components</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Guide</Badge>
                  <FileText className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle>Getting Started Guide</CardTitle>
                <CardDescription>An introduction to Ethereum Localism</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A guide that walks you through the core concepts, tools, and approaches of Ethereum Localism with
                  practical examples and case studies.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    <Download className="mr-2 h-4 w-4" />
                    Download Guide
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Recipes</Badge>
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle>Host an Eth Localism Event</CardTitle>
                <CardDescription>Resources for hosting local gatherings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Presentation slides, facilitation guides, and activities for hosting workshops that introduce your
                  community to Ethereum Localism concepts and practices.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    <Download className="mr-2 h-4 w-4" />
                    Download Materials
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Template</Badge>
                  <Users className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle>Start a Regen Hub</CardTitle>
                <CardDescription>Templates for community governance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A collection of templates, smart contracts, and governance frameworks for creating a locally-focused
                  DAO that can manage community resources and decision-making.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    <Download className="mr-2 h-4 w-4" />
                    Download Templates
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Technical</Badge>
                  <Globe className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle>AlloIRL Funding Round Guide</CardTitle>
                <CardDescription>Developer resources and code examples</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Technical documentation, code examples, and implementation guides for developers looking to build
                  Ethereum-based tools for local communities.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">
                    <Download className="mr-2 h-4 w-4" />
                    Access Code Repository
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* How to Use */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">How to Use This Kit</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">1. Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Start with the Getting Started Guide to understand the core concepts and principles of Ethereum
                  Localism.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">2. Gather</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Use the workshop materials to bring together interested community members and explore possibilities
                  together.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">3. Build</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Implement the templates and technical resources to create your local Ethereum-powered community
                  systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Case Studies */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Case Studies</h2>
          <p className="text-lg text-muted-foreground">
            Learn from communities that have successfully implemented Ethereum Localism projects
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Berlin Community Currency</CardTitle>
                <CardDescription>Local token system for neighborhood exchange</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  How a neighborhood in Berlin created a local token system to support small businesses and community
                  projects.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="#" className="text-primary hover:underline flex items-center">
                  Read Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Boulder Food Commons DAO</CardTitle>
                <CardDescription>Community-governed local food system</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  How a community in Boulder created a DAO to manage shared agricultural resources and coordinate local
                  food production.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="#" className="text-primary hover:underline flex items-center">
                  Read Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Support */}
        <div className="bg-accent rounded-xl p-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Need Support?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our community channels to connect with others implementing Ethereum Localism projects and get help
              with your specific questions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild variant="outline">
                <Link href="#">Telegram Group</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Download All */}
        <div className="text-center space-y-4">
          <Button size="lg" asChild>
            <Link href="#">
              <Download className="mr-2 h-5 w-5" />
              Download Complete Action Kit
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            All materials are open source and available under CC BY-SA 4.0 license
          </p>
        </div>
      </div>
    </div>
  )
}

