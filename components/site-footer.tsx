import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FreelanceHub. All rights reserved.
          </p>
          <nav aria-label="Footer" className="flex flex-wrap gap-4 text-sm">
            <Link href="#" className="text-foreground/90 hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-foreground/90 hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-foreground/90 hover:text-foreground">
              Help
            </Link>
            <Link href="#" className="text-foreground/90 hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
