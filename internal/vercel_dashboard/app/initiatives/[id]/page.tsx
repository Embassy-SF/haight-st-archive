import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Globe, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

// Sample initiatives data - in a real app, this would come from a database or API
const initiatives = {
  gfel: {
    title: "A General Forum on Ethereum Localism",
    description: "Global community gathering",
    location: "Global",
    image:
      "https://sjc.microlink.io/3pVKuqr54gHTUuPWjhdEQG6XEfua_jUGKCJE69v_DCwxSiDjLhuo8FharaLX0plWROEIK6coq149R7HZtQrgAg.jpeg",
    date: "Annual",
    organizer: "Ethereum Localism Core Team",
    website: "https://gfel.ethereumlocalism.xyz",
    content: `
      <p class="mb-6">The General Forum on Ethereum Localism (GFEL) is an annual gathering that brings together practitioners, researchers, and enthusiasts from around the world to explore the intersection of Ethereum technology and local community building.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">About GFEL</h2>
      <p class="mb-6">GFEL serves as the premier event for the Ethereum Localism movement, providing a space for knowledge sharing, relationship building, and collaborative action. The forum features a mix of presentations, workshops, and unconference sessions designed to advance both the theory and practice of using Ethereum to empower local communities.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Past Events</h2>
      <p class="mb-6">Since its inception in 2023, GFEL has been hosted in various locations around the world, each bringing its own local flavor and focus to the gathering. Past events have included:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>GFEL 2023: Amsterdam, Netherlands - "Foundations of Ethereum Localism"</li>
        <li>GFEL 2024: Berlin, Germany - "Building Regenerative Local Economies"</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Upcoming: GFEL 2025 in Boulder</h2>
      <p class="mb-6">The next GFEL will be held in Boulder, Colorado in 2025, with a special focus on "Ethereum Localism Goes Cosmolocal" - exploring how the principles of cosmolocalism (design global, manufacture local) can be integrated with Ethereum technology to create more resilient and sustainable local economies.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Get Involved</h2>
      <p class="mb-4">There are many ways to participate in GFEL:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Attend the annual gathering</li>
        <li>Host a local satellite event</li>
        <li>Contribute to the documentation and knowledge base</li>
        <li>Join the planning committee for future events</li>
      </ul>
    `,
    relatedInitiatives: ["local-dao", "cosmolocal", "regen-hub"],
  },
  "local-dao": {
    title: "Local DAO Summer 2024",
    description: "Community-driven local funding",
    location: "Multiple Locations",
    image: "/placeholder.svg?height=400&width=800",
    date: "Summer 2024",
    organizer: "Ethereum Localism & Gitcoin",
    website: "https://localdao.ethereumlocalism.xyz",
    content: `
      <p class="mb-6">Local DAO Summer is a coordinated initiative to launch and support community-governed funding mechanisms across multiple localities during the summer of 2024.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">About Local DAO Summer</h2>
      <p class="mb-6">Inspired by the success of "DeFi Summer" in 2020, Local DAO Summer aims to catalyze a wave of experimentation with local governance and funding mechanisms powered by Ethereum. The initiative provides templates, tools, and support for communities to launch their own Local DAOs - decentralized autonomous organizations focused on funding projects that benefit their specific geographic area.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">How It Works</h2>
      <p class="mb-4">Communities participating in Local DAO Summer follow a structured process:</p>
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Formation: Gather a core team and define the geographic scope</li>
        <li>Design: Customize governance and funding mechanisms to local needs</li>
        <li>Funding: Secure initial capital through matching pools and local contributions</li>
        <li>Launch: Open the DAO to community participation</li>
        <li>Funding Rounds: Run participatory funding rounds for local projects</li>
        <li>Documentation: Share learnings with the broader Ethereum Localism community</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Participating Communities</h2>
      <p class="mb-4">For the 2024 season, we have confirmed participation from communities in:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Berlin, Germany</li>
        <li>Boulder, Colorado</li>
        <li>Buenos Aires, Argentina</li>
        <li>Bangkok, Thailand</li>
        <li>Lagos, Nigeria</li>
        <li>And more to be announced!</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Get Involved</h2>
      <p class="mb-4">Interested in starting a Local DAO in your community? The Local DAO Summer initiative provides:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Technical templates and tooling</li>
        <li>Governance frameworks</li>
        <li>Matching funds</li>
        <li>Community support</li>
        <li>Documentation and best practices</li>
      </ul>
    `,
    relatedInitiatives: ["gfel", "allo-irl", "chicken-coop"],
  },
  cosmolocal: {
    title: "Ethereum Localism Goes Cosmolocal",
    description: "GFEL Announcement Boulder 2025",
    location: "Boulder, CO",
    image: "/placeholder.svg?height=400&width=800",
    date: "2025",
    organizer: "Ethereum Localism & P2P Foundation",
    website: "https://cosmolocal.ethereumlocalism.xyz",
    content: `
      <p class="mb-6">"Ethereum Localism Goes Cosmolocal" is the theme for the 2025 General Forum on Ethereum Localism (GFEL), to be held in Boulder, Colorado.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">About Cosmolocalism</h2>
      <p class="mb-6">Cosmolocalism, or "design global, manufacture local," is an emerging paradigm that combines global knowledge commons with local manufacturing and production. It represents a powerful approach to creating more sustainable and resilient economic systems by sharing designs, code, and knowledge globally while implementing solutions locally using available resources and capabilities.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Ethereum Connection</h2>
      <p class="mb-4">Ethereum provides critical infrastructure for cosmolocal production by enabling:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Global knowledge commons with proper attribution and licensing</li>
        <li>Coordination mechanisms for distributed design and development</li>
        <li>Economic models that reward open source contribution</li>
        <li>Supply chain transparency and verification</li>
        <li>Local economic systems that support local manufacturing</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">GFEL Boulder 2025</h2>
      <p class="mb-4">The 2025 GFEL in Boulder will bring together leaders from both the Ethereum ecosystem and the cosmolocal movement to explore synergies and develop practical implementations. The gathering will feature:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Case studies of successful cosmolocal projects using Ethereum</li>
        <li>Workshops on implementing cosmolocal principles in local communities</li>
        <li>Demonstrations of open hardware and designs</li>
        <li>Discussions on policy frameworks to support cosmolocal production</li>
        <li>Collaborative design sessions for new cosmolocal initiatives</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Get Involved</h2>
      <p class="mb-4">There are several ways to participate in this initiative:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Register for GFEL Boulder 2025</li>
        <li>Join the cosmolocal working group</li>
        <li>Contribute to the cosmolocal knowledge commons</li>
        <li>Implement cosmolocal projects in your community</li>
        <li>Share case studies and learnings</li>
      </ul>
    `,
    relatedInitiatives: ["gfel", "regen-hub", "chicken-coop"],
  },
  "regen-hub": {
    title: "Regenerative Hub Network",
    description: "Physical spaces for local collaboration",
    location: "Various",
    image: "/placeholder.svg?height=400&width=800",
    date: "Ongoing",
    organizer: "Ethereum Localism & ReFi DAO",
    website: "https://regenhubs.ethereumlocalism.xyz",
    content: `
      <p class="mb-6">The Regenerative Hub Network is an initiative to establish physical spaces in communities around the world where people can gather to work on regenerative projects powered by Ethereum technology.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">About Regen Hubs</h2>
      <p class="mb-6">Regen Hubs serve as physical anchors for the Ethereum Localism movement, providing spaces where community members can gather to learn, collaborate, and implement projects that contribute to local regeneration. These hubs combine elements of coworking spaces, makerspaces, community centers, and educational venues, all united by a focus on using Ethereum and web3 tools for positive local impact.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Hub Activities</h2>
      <p class="mb-4">Typical activities at Regen Hubs include:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Educational workshops and skill-sharing sessions</li>
        <li>Hackathons and build events</li>
        <li>Community gatherings and governance meetings</li>
        <li>Incubation of local regenerative projects</li>
        <li>Demonstrations of regenerative technologies</li>
        <li>Local DAO operations and funding rounds</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Current Hubs</h2>
      <p class="mb-4">The network currently includes established hubs in:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Amsterdam, Netherlands</li>
        <li>Berlin, Germany</li>
        <li>Lisbon, Portugal</li>
        <li>Boulder, Colorado</li>
        <li>Bangkok, Thailand</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Start a Hub</h2>
      <p class="mb-4">The Regenerative Hub Network provides support for communities looking to establish their own hubs, including:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Operational templates and best practices</li>
        <li>Governance frameworks</li>
        <li>Funding models and strategies</li>
        <li>Educational materials and curricula</li>
        <li>Network connections and knowledge sharing</li>
      </ul>
    `,
    relatedInitiatives: ["gfel", "local-dao", "chicken-coop"],
  },
  "allo-irl": {
    title: "AlloIRL Community Rounds",
    description: "Participatory funding for local projects",
    location: "Global",
    image: "/placeholder.svg?height=400&width=800",
    date: "Quarterly",
    organizer: "Ethereum Localism & Gitcoin",
    website: "https://alloirl.ethereumlocalism.xyz",
    content: `
      <p class="mb-6">AlloIRL brings Gitcoin's Allo protocol for quadratic funding into physical community spaces, enabling in-person participatory funding rounds for local projects.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">About AlloIRL</h2>
      <p class="mb-6">AlloIRL adapts the powerful online quadratic funding mechanism developed by Gitcoin for in-person community use. This initiative enables communities to run local funding rounds where participants can discover projects, contribute funds, and see the impact of quadratic matching in real-time.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">How It Works</h2>
      <p class="mb-4">AlloIRL rounds typically follow this process:</p>
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Project Submission: Local projects apply to participate in the funding round</li>
        <li>Community Event: Projects present their work at a physical gathering</li>
        <li>Contribution Stations: Participants use physical or digital stations to contribute to projects</li>
        <li>Live Matching: Contributions are matched according to quadratic funding formulas</li>
        <li>Fund Distribution: Projects receive both direct contributions and matching funds</li>
        <li>Impact Reporting: Projects share outcomes with the community</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Benefits of In-Person Rounds</h2>
      <p class="mb-4">Taking quadratic funding into physical spaces offers several advantages:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Increased accessibility for community members not familiar with crypto</li>
        <li>Stronger social connections between projects and supporters</li>
        <li>Immediate feedback and iteration on project ideas</li>
        <li>Educational opportunities around public goods funding</li>
        <li>Greater visibility for local impact projects</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Get Involved</h2>
      <p class="mb-4">Communities can participate in AlloIRL in several ways:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Host an AlloIRL round in your community</li>
        <li>Contribute to the matching pool for local rounds</li>
        <li>Submit a project for funding</li>
        <li>Volunteer at an AlloIRL event</li>
        <li>Help improve the AlloIRL toolkit</li>
      </ul>
    `,
    relatedInitiatives: ["local-dao", "gfel", "regen-hub"],
  },
  "chicken-coop": {
    title: "Chicken Coop Catalyst Project",
    description: "Implementation Guide",
    location: "Various",
    image: "/placeholder.svg?height=400&width=800",
    date: "2024",
    organizer: "Ethereum Localism & Open Source Ecology",
    website: "https://chickencoop.ethereumlocalism.xyz",
    content: `
      <p class="mb-6">The Chicken Coop Catalyst Project is a practical implementation guide for using Ethereum tools to coordinate local food production, starting with the humble chicken coop as a catalyst for community resilience.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">About the Project</h2>
      <p class="mb-6">This initiative provides open-source designs, coordination tools, and economic models for communities to establish chicken coops as a first step toward local food sovereignty. The project demonstrates how Ethereum technology can enable more efficient resource sharing, transparent supply chains, and fair economic models for local food systems.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Components</h2>
      <p class="mb-4">The Chicken Coop Catalyst Project includes:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Open-source chicken coop designs optimized for different climates and contexts</li>
        <li>DAO templates for community governance of shared agricultural resources</li>
        <li>Smart contract systems for managing shared ownership and profit distribution</li>
        <li>Supply chain tracking for feed, eggs, and other outputs</li>
        <li>Educational materials on both chicken keeping and Ethereum tools</li>
        <li>Economic models for sustainable community agriculture</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Implementation Guide</h2>
      <p class="mb-4">The comprehensive guide walks communities through the process of:</p>
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Community organization and governance setup</li>
        <li>Resource gathering and initial funding</li>
        <li>Physical construction and setup</li>
        <li>Digital infrastructure deployment</li>
        <li>Operational procedures and maintenance</li>
        <li>Scaling to additional food production systems</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Get Involved</h2>
      <p class="mb-4">There are many ways to participate in this project:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Implement the guide in your community</li>
        <li>Contribute improvements to the designs or code</li>
        <li>Document your implementation as a case study</li>
        <li>Translate materials to additional languages</li>
        <li>Connect with other implementing communities</li>
      </ul>
    `,
    relatedInitiatives: ["local-dao", "cosmolocal", "regen-hub"],
  },
}

export default function InitiativeDetail({ params }: { params: { id: string } }) {
  const initiative = initiatives[params.id as keyof typeof initiatives]

  if (!initiative) {
    notFound()
  }

  // Find related initiatives
  const related = initiative.relatedInitiatives?.map((id) => initiatives[id as keyof typeof initiatives]) || []

  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <div>
          <Button variant="ghost" asChild className="mb-4 pl-0">
            <Link href="/initiatives">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Initiatives
            </Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tight mb-2">{initiative.title}</h1>
          <p className="text-xl text-muted-foreground">{initiative.description}</p>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={initiative.image || "/placeholder.svg?height=400&width=800"}
            alt={initiative.title}
            className="object-cover"
            fill
            priority
          />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: initiative.content }} />
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Initiative Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-sm text-muted-foreground">{initiative.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-medium">Timeline</h3>
                    <p className="text-sm text-muted-foreground">{initiative.date}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-medium">Organizer</h3>
                    <p className="text-sm text-muted-foreground">{initiative.organizer}</p>
                  </div>
                </div>
                {initiative.website && (
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h3 className="font-medium">Website</h3>
                      <a
                        href={initiative.website}
                        className="text-sm text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {initiative.website.replace("https://", "")}
                      </a>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Involved</Button>
              </CardFooter>
            </Card>

            {related.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Related Initiatives</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {related.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={item.image || "/placeholder.svg?height=100&width=100"}
                          alt={item.title}
                          className="object-cover"
                          fill
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">
                          <Link
                            href={`/initiatives/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                            className="hover:text-primary"
                          >
                            {item.title}
                          </Link>
                        </h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

