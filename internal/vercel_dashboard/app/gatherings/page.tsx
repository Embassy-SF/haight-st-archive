import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample gatherings data - in a real app, this would come from a database or API
const upcomingGatherings = [
  {
    id: "gfel-amsterdam",
    title: "GFEL Amsterdam",
    type: "GFEL",
    description: "Annual General Forum on Ethereum Localism",
    location: "Amsterdam, Netherlands",
    date: "April 15-17, 2025",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "local-dao-kickoff",
    title: "Local DAO Summer Kickoff",
    type: "Community Gathering",
    description: "Global launch of the Local DAO Summer initiative",
    location: "Global - Multiple Locations",
    date: "June 5, 2025",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "regen-hub-workshop",
    title: "Regen Hub Workshop Series",
    type: "Regen Hub",
    description: "Learn how to start and operate a Regenerative Hub",
    location: "Online",
    date: "July 12-14, 2025",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "berlin-meetup",
    title: "Berlin Ethereum Localism Meetup",
    type: "Regular Meetup",
    description: "Monthly gathering of the Berlin Ethereum Localism community",
    location: "Berlin, Germany",
    date: "March 20, 2025",
    image: "/placeholder.svg?height=200&width=400",
  },
]

const gatheringTypes = [
  {
    id: "regular-meetup",
    title: "Regular Meetup",
    description: "Recurring local gatherings to build community and share knowledge",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "community-gathering",
    title: "Community Gathering",
    description: "Larger events focused on specific themes or initiatives",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "regen-hub",
    title: "Regen Hub",
    description: "Activities hosted at permanent physical spaces for regenerative work",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "gfel",
    title: "GFEL",
    description: "General Forum on Ethereum Localism - annual flagship gathering",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "online-series",
    title: "Online Series",
    description: "Virtual gatherings accessible to the global community",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "residency",
    title: "Residency",
    description: "Immersive programs for deeper exploration and building",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function Gatherings() {
  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Ethereum Localism Gatherings</h1>
          <p className="text-lg text-muted-foreground">
            Connect with the community through in-person and virtual gatherings
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming Gatherings</TabsTrigger>
            <TabsTrigger value="types">Gathering Types</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6 pt-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingGatherings.map((gathering) => (
                <Card key={gathering.id}>
                  <CardHeader>
                    <div className="text-sm font-medium text-muted-foreground mb-1">{gathering.type}</div>
                    <CardTitle>{gathering.title}</CardTitle>
                    <CardDescription>{gathering.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={gathering.image || "/placeholder.svg"}
                        alt={gathering.title}
                        className="object-cover"
                        fill
                      />
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{gathering.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{gathering.location}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link href={`/gatherings/${gathering.id}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="rounded-lg bg-muted p-6 text-center">
              <h2 className="text-xl font-bold mb-2">Looking for more gatherings?</h2>
              <p className="text-muted-foreground mb-4">
                Check our community calendar for a complete list of upcoming events or add your own.
              </p>
              <Button asChild>
                <Link href="/gatherings/calendar">View Calendar</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="types" className="space-y-6 pt-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gatheringTypes.map((type) => (
                <Card key={type.id}>
                  <CardHeader>
                    <CardTitle>{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image src={type.image || "/placeholder.svg"} alt={type.title} className="object-cover" fill />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link href={`/gatherings/${type.id}`}>Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Host a Gathering</CardTitle>
              <CardDescription>Start an Ethereum Localism gathering in your community</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                We provide templates, guides, and support for hosting various types of Ethereum Localism gatherings,
                from casual meetups to structured workshops.
              </p>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Host a Gathering"
                  className="object-cover"
                  fill
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/gatherings/host">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Photo Gallery</CardTitle>
              <CardDescription>Highlights from past Ethereum Localism gatherings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="relative aspect-square overflow-hidden rounded-md">
                    <Image
                      src={`/placeholder.svg?height=100&width=100&text=Photo${i}`}
                      alt={`Gallery photo ${i}`}
                      className="object-cover"
                      fill
                    />
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/gatherings/gallery">View Gallery</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

