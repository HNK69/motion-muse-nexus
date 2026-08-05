import { PERSON } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-hairline px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          © {new Date().getFullYear()} {PERSON.name}
        </p>
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {PERSON.tagline}
        </p>
      </div>
    </footer>
  );
}
