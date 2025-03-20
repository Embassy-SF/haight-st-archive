import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import FullGraphView from "@/components/knowledge/full-graph-view"

export default function KnowledgeGraph() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Knowledge Graph</h1>
        <p className="text-lg text-muted-foreground">
          Explore the connections between notes and concepts in the Ethereum Localism knowledge base
        </p>
      </div>

      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Interactive Knowledge Graph</CardTitle>
          <CardDescription>
            Click on nodes to navigate to specific notes, drag to reposition, and zoom to explore in detail
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="aspect-[16/9] w-full">
            <FullGraphView />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Graph Legend</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#f97316]"></div>
                <span>Theory</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#0ea5e9]"></div>
                <span>Governance</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#10b981]"></div>
                <span>Cosmolocalism</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#8b5cf6]"></div>
                <span>Economics</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#ec4899]"></div>
                <span>Implementation</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#f59e0b]"></div>
                <span>Case Study</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Graph Controls</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Click:</strong> Navigate to a note
              </li>
              <li>
                <strong>Drag:</strong> Move the graph
              </li>
              <li>
                <strong>Scroll:</strong> Zoom in/out
              </li>
              <li>
                <strong>Hover:</strong> See note details
              </li>
              <li>
                <strong>Double-click:</strong> Focus on a node
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Graph Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Node Size:</strong> Number of connections
              </li>
              <li>
                <strong>Edge Thickness:</strong> Strength of relationship
              </li>
              <li>
                <strong>Clusters:</strong> Related concept groups
              </li>
              <li>
                <strong>Central Nodes:</strong> Foundational concepts
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

