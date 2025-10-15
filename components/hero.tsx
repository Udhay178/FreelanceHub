import Link from "next/link"
import { Input } from "@/components/ui/input"

export function Hero() {
  return (
    <section className="border-b border-border bg-card text-card-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 md:py-16">
        <div className="max-w-2xl">
          <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Hire top freelancers. Get work done, simply.
          </h1>
          <p className="mt-3 text-pretty text-muted-foreground md:text-lg">
            Post your project, receive proposals, and collaborate securely — all in one place.
          </p>

          {/* Search */}
          <form
            action="#"
            className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row"
            aria-label="Search for jobs or skills"
          >
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <Input id="search" name="q" placeholder="Try: Next.js developer, logo design..." className="w-full" />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
            >
              Search
            </button>
          </form>

          {/* Quick categories */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
            <span className="text-muted-foreground">Popular:</span>
            <Link
              href="#"
              className="rounded-full border border-border bg-background px-3 py-1 text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Web Development
            </Link>
            <Link
              href="#"
              className="rounded-full border border-border bg-background px-3 py-1 text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Design
            </Link>
            <Link
              href="#"
              className="rounded-full border border-border bg-background px-3 py-1 text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Content
            </Link>
            <Link
              href="#"
              className="rounded-full border border-border bg-background px-3 py-1 text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Marketing
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
