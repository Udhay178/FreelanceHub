import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { SiteFooter } from "@/components/site-footer"
import { JobCard, type Job } from "@/components/job-card"

export default function HomePage() {
  // Simple in-memory featured jobs to keep it static and fast
  const jobs: Job[] = [
    {
      id: "1",
      title: "Landing Page Design (Figma)",
      budget: "$500 - $800",
      tags: ["Design", "Figma", "UI"],
      postedAgo: "2h ago",
      description:
        "Create a clean, responsive landing page with 3 sections and a pricing module. Deliverables: Figma file with variants.",
    },
    {
      id: "2",
      title: "Next.js Developer for Blog",
      budget: "$40/hr",
      tags: ["Next.js", "TypeScript", "SEO"],
      postedAgo: "5h ago",
      description:
        "Build a content-focused blog with MDX support, basic SEO, and a tag filter. Prefer App Router experience.",
    },
    {
      id: "3",
      title: "Shopify Theme Tweaks",
      budget: "$300 - $600",
      tags: ["Shopify", "Liquid", "CSS"],
      postedAgo: "1d ago",
      description: "Adjust product cards, fix spacing issues, and improve cart drawer UX on an existing store theme.",
    },
  ]

  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <section aria-labelledby="featured-jobs" className="py-10 md:py-14">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-6 flex items-center justify-between">
              <h2 id="featured-jobs" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                Featured jobs
              </h2>
              <Link
                href="#"
                className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                aria-label="Browse all jobs"
              >
                Browse all
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </section>

        <HowItWorks />

        <section aria-labelledby="cta" className="py-12 md:py-16">
          <div className="mx-auto max-w-5xl rounded-xl border border-border bg-card p-6 text-card-foreground md:p-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h3 id="cta" className="text-balance text-xl font-semibold md:text-2xl">
                  Ready to get started?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground md:text-base">
                  Post a job in minutes and start receiving quality proposals from top freelancers.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
                >
                  Post a job
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  Find work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
