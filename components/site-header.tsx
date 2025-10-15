import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo / Brand */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          FreelanceHub
          <span className="sr-only">Home</span>
        </Link>

        {/* Nav */}
        <nav aria-label="Main" className="hidden gap-6 text-sm md:flex">
          <Link href="#" className="text-foreground/90 hover:text-foreground">
            Find Work
          </Link>
          <Link href="#" className="text-foreground/90 hover:text-foreground">
            Hire Talent
          </Link>
          <Link href="#" className="text-foreground/90 hover:text-foreground">
            Sign In
          </Link>
        </nav>

        {/* Primary action */}
        <div className="flex items-center gap-2">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Post a job
          </Link>
        </div>
      </div>
    </header>
  )
}
