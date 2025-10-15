export function HowItWorks() {
  const steps = [
    {
      title: "Post a job",
      body: "Describe your project, set your budget, and publish to the marketplace in minutes.",
    },
    {
      title: "Get proposals",
      body: "Review profiles, compare proposals, and chat with freelancers before hiring.",
    },
    {
      title: "Hire & pay safely",
      body: "Start the contract and pay with confidence. Collaborate and track progress easily.",
    },
  ]

  return (
    <section aria-labelledby="how-it-works" className="border-t border-border py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="how-it-works" className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
          How it works
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-xl border border-border bg-card p-5 text-card-foreground">
              <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </div>
              <h3 className="text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
