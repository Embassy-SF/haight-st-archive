"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pr-0">
        <div className="flex flex-col gap-4 px-2">
          <Link href="/" className="flex h-10 items-center border-b text-sm font-medium" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link
            href="/introduction"
            className="flex h-10 items-center border-b text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Introduction
          </Link>
          <Link
            href="/knowledge"
            className="flex h-10 items-center border-b text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Knowledge
          </Link>
          {/* Commented out for MVP
          <Link
            href="/initiatives"
            className="flex h-10 items-center border-b text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Initiatives
          </Link>
          <Link
            href="/resources"
            className="flex h-10 items-center border-b text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Resources
          </Link>
          <Link
            href="/gatherings"
            className="flex h-10 items-center border-b text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Gatherings
          </Link>
          <Link
            href="/network"
            className="flex h-10 items-center border-b text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Network
          </Link>
          <Link
            href="/forum"
            className="flex h-10 items-center border-b text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Forum
          </Link>
          */}
          <Link
            href="/introduction/action-kit"
            className="flex h-10 items-center border-b text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Action Kit
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

