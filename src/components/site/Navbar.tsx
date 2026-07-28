import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Moon, Sun, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CLUB } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/team", label: "Team" },
  { to: "/alumni", label: "Alumni" },
  { to: "/community", label: "Community" },
  { to: "/contact", label: "Contact" },
] as const;

function useDarkMode() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefers = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved ? saved === "dark" : (saved === "light" ? false : true);
    setDark(initial);
    document.documentElement.classList.toggle("dark", initial);
  }, []);
  const toggle = () => {
    setDark((d) => {
      const nx = !d;
      document.documentElement.classList.toggle("dark", nx);
      localStorage.setItem("theme", nx ? "dark" : "light");
      return nx;
    });
  };
  return { dark, toggle };
}

export function Navbar() {
  const { dark, toggle } = useDarkMode();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled ? "py-2" : "py-3",
      )}
    >
      <div className="container-page">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-3 py-2 transition-all",
            "glass-panel",
            scrolled ? "shadow-[0_10px_40px_-20px_rgba(15,23,42,0.2)]" : "shadow-none",
          )}
          aria-label="Primary"
        >
          <Link to="/" className="flex items-center pl-2">
            <img src="/navbar-logo.png" alt="GFG Campus Body ITER" className="h-14 md:h-16 w-auto object-contain" />
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                      "text-muted-foreground hover:text-foreground",
                      active && "text-foreground",
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-lg bg-brand/10"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1.5 pr-1">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <Button asChild size="sm" className="hidden md:inline-flex bg-white text-black hover:bg-gray-200 rounded-full h-10 px-5 font-bold transition-transform hover:scale-105">
              <Link to="/community" className="flex items-center gap-1.5">
                Join Network <Zap className="h-4 w-4 fill-current" />
              </Link>
            </Button>

            <button
              className="lg:hidden grid h-9 w-9 place-items-center rounded-lg text-foreground hover:bg-muted"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="lg:hidden mt-2 rounded-2xl glass-panel p-2"
            >
              <ul className="flex flex-col">
                {NAV.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="p-2 mt-2">
                  <Button asChild className="w-full bg-white text-black hover:bg-gray-200 rounded-full font-bold h-11">
                    <Link to="/community" className="flex items-center justify-center gap-1.5">
                      Join Network <Zap className="h-4 w-4 fill-current" />
                    </Link>
                  </Button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid h-9 w-9 place-items-center rounded-xl bg-brand text-brand-foreground shadow-[0_6px_20px_-6px_color-mix(in_oklab,var(--brand)_60%,transparent)]",
        className,
      )}
      aria-hidden
    >
      <span className="font-black text-sm tracking-tight">G</span>
    </div>
  );
}

export { CLUB };
