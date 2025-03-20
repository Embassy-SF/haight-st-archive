import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>

      <Skeleton className="h-[300px] w-full rounded-md" />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <Skeleton className="h-8 w-1/2" />
          <div className="space-y-4">
            <Skeleton className="h-[150px] w-full rounded-md" />
            <Skeleton className="h-[150px] w-full rounded-md" />
          </div>
        </div>

        <div className="space-y-4">
          <Skeleton className="h-[200px] w-full rounded-md" />
          <Skeleton className="h-[200px] w-full rounded-md" />
        </div>
      </div>
    </div>
  )
}

