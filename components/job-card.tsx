import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export type Job = {
  id: string
  title: string
  budget: string
  tags: string[]
  description: string
  postedAgo: string
}

export function JobCard({ job }: { job: Job }) {
  return (
    <Card className="h-full">
      <CardHeader className="space-y-2">
        <CardTitle className="text-base leading-tight">{job.title}</CardTitle>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md border border-border bg-background px-2 py-1 text-xs font-medium">
            {job.budget}
          </span>
          <span className="text-xs text-muted-foreground">{job.postedAgo}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="line-clamp-3 text-sm text-muted-foreground">{job.description}</p>
        <div className="flex flex-wrap gap-2">
          {job.tags.map((t) => (
            <span key={t} className="rounded-full border border-border bg-muted px-2.5 py-1 text-xs text-foreground">
              {t}
            </span>
          ))}
        </div>
        <button
          className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          aria-label={`View details for ${job.title}`}
        >
          View details
        </button>
      </CardContent>
    </Card>
  )
}
