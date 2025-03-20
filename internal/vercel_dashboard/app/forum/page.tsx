import Link from "next/link"
import { Clock, MessageSquare, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample forum data - in a real app, this would come from a database or API
const categories = [
  {
    id: "general-discussion",
    name: "General Discussion",
    description: "General topics related to Ethereum Localism",
    topics: 45,
    posts: 312,
    icon: "💬",
  },
  {
    id: "local-dao",
    name: "Local DAO",
    description: "Discussions about creating and running Local DAOs",
    topics: 32,
    posts: 187,
    icon: "🏛️",
  },
  {
    id: "regen-hubs",
    name: "Regenerative Hubs",
    description: "Building and operating physical spaces for regenerative work",
    topics: 28,
    posts: 156,
    icon: "🌱",
  },
  {
    id: "cosmolocalism",
    name: "Cosmolocalism",
    description: "Design global, manufacture local - implementation and theory",
    topics: 19,
    posts: 94,
    icon: "🌐",
  },
  {
    id: "technical",
    name: "Technical Discussion",
    description: "Technical aspects of Ethereum tools for local communities",
    topics: 37,
    posts: 215,
    icon: "⚙️",
  },
  {
    id: "events",
    name: "Events & Gatherings",
    description: "Announcements and discussions about community events",
    topics: 24,
    posts: 142,
    icon: "📅",
  },
]

const recentTopics = [
  {
    id: "topic-1",
    title: "Implementing quadratic funding for a local food system",
    category: "Local DAO",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    replies: 12,
    views: 89,
    lastActivity: "2 hours ago",
  },
  {
    id: "topic-2",
    title: "Case study: Amsterdam Regen Hub first year learnings",
    category: "Regen Hubs",
    author: {
      name: "Maria Garcia",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    replies: 8,
    views: 64,
    lastActivity: "5 hours ago",
  },
  {
    id: "topic-3",
    title: "Technical guide: Setting up a Local DAO with Allo protocol",
    category: "Technical Discussion",
    author: {
      name: "Jamal Williams",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    replies: 15,
    views: 112,
    lastActivity: "1 day ago",
  },
  {
    id: "topic-4",
    title: "GFEL 2025 Boulder - Planning thread",
    category: "Events & Gatherings",
    author: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    replies: 23,
    views: 178,
    lastActivity: "1 day ago",
  },
  {
    id: "topic-5",
    title: "Cosmolocal manufacturing: 3D printing case studies",
    category: "Cosmolocalism",
    author: {
      name: "David Müller",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    replies: 7,
    views: 52,
    lastActivity: "2 days ago",
  },
]

export default function Forum() {
  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Community Forum</h1>
          <p className="text-lg text-muted-foreground">
            Connect, share knowledge, and collaborate with the Ethereum Localism community
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>1,245 members</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MessageSquare className="h-4 w-4" />
              <span>1,106 topics</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild>
              <Link href="/forum/new-topic">New Topic</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/forum/search">Search</Link>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="categories" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="recent">Recent Topics</TabsTrigger>
          </TabsList>

          <TabsContent value="categories" className="space-y-6 pt-4">
            <div className="grid gap-4">
              {categories.map((category) => (
                <Card key={category.id}>
                  <CardHeader className="flex flex-row items-center gap-4 py-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-2xl">
                      {category.icon}
                    </div>
                    <div>
                      <CardTitle>
                        <Link href={`/forum/category/${category.id}`} className="hover:text-primary">
                          {category.name}
                        </Link>
                      </CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                    <div className="ml-auto hidden md:flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-lg font-bold">{category.topics}</div>
                        <div className="text-xs text-muted-foreground">Topics</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold">{category.posts}</div>
                        <div className="text-xs text-muted-foreground">Posts</div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="space-y-6 pt-4">
            <div className="grid gap-4">
              {recentTopics.map((topic) => (
                <Card key={topic.id}>
                  <CardHeader className="flex flex-row items-start gap-4 py-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={topic.author.avatar} alt={topic.author.name} />
                      <AvatarFallback>{topic.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{topic.category}</Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{topic.lastActivity}</span>
                        </div>
                      </div>
                      <CardTitle className="text-base mt-1">
                        <Link href={`/forum/topic/${topic.id}`} className="hover:text-primary">
                          {topic.title}
                        </Link>
                      </CardTitle>
                      <div className="mt-1 flex items-center gap-4 text-sm">
                        <span className="text-muted-foreground">By {topic.author.name}</span>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MessageSquare className="h-3 w-3" />
                          <span>{topic.replies}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/forum/topics">View All Topics</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Forum Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Our community forum is a space for constructive discussion and knowledge sharing. Please follow these
                guidelines:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>Be respectful and considerate of others</li>
                <li>Stay on topic within each category</li>
                <li>Share knowledge and experiences freely</li>
                <li>Provide context and details when asking questions</li>
                <li>Cite sources when sharing information</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/forum/guidelines">Full Guidelines</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Knowledge Exchange</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                The forum serves as our community's knowledge exchange. Here you can:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>Ask questions and get help from experienced practitioners</li>
                <li>Share case studies and lessons learned from your projects</li>
                <li>Collaborate on new initiatives and research</li>
                <li>Find partners for local implementations</li>
                <li>Stay updated on the latest developments in Ethereum Localism</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/forum/new-topic">Start Contributing</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

