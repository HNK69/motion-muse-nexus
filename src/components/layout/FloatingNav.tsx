import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PERSON } from "@/data/site";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { EASE } from "@/lib/motion";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Minimal floating navigation: hides on scroll down, returns on scroll up.
 * On small screens it collapses into a full-screen menu overlay.
 */
export function FloatingNav() {
  const { direction, atTop } = useScrollDirection();
  const [open, setOpen] = useState(false);
  const hidden = direction === "down" && !atTop && !open;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        animate={{ y: hidden ? "-120%" : "0%" }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 md:py-7"
        >
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="display text-xl tracking-[0.08em] transition-colors hover:text-primary"
          >
            {PERSON.shortName}
            <span className="sr-only"> — back to top</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className="relative text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-[width] after:duration-500 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Dialog.Trigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              className="inline-flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:border-primary md:hidden"
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </Dialog.Trigger>
        </nav>
      </motion.header>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-background/95 backdrop-blur-[2px] md:hidden" />
        <Dialog.Content className="fixed inset-0 z-[70] overflow-y-auto bg-background px-6 py-5 focus:outline-none md:hidden">
          <div className="flex items-center justify-between">
            <span className="display text-xl">{PERSON.shortName}</span>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close menu"
                className="inline-flex size-11 items-center justify-center border border-border"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>
          <ul className="mt-16 flex flex-col gap-2">
            {NAV_LINKS.map((link, i) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.6, ease: EASE }}
              >
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    requestAnimationFrame(() => scrollToSection(link.id));
                  }}
                  className="display block py-3 text-[clamp(2.25rem,12vw,4rem)]"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
