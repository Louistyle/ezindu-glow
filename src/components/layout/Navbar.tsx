import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Globe2, Heart } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { t, lang, toggle } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t("nav_home") },
    { to: "/about", label: t("nav_about") },
    { to: "/projects", label: t("nav_projects") },
    { to: "/situation", label: t("nav_situation") },
    { to: "/outreach", label: t("nav_outreach") },
    { to: "/donate", label: t("nav_donate") },
    { to: "/get-involved", label: t("nav_involved") },
    { to: "/contact", label: t("nav_contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold text-primary">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-leaf text-primary-foreground shadow-warm">
            <Heart className="h-4 w-4" />
          </span>
          <span className="leading-none">
            Ezindu
            <span className="block text-[10px] font-sans font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Erlöstes Leben e.V.
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-3 py-2 text-sm font-medium transition-smooth",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/75 hover:bg-muted hover:text-primary"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="group flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-primary transition-smooth hover:bg-primary hover:text-primary-foreground"
          >
            <Globe2 className="h-4 w-4 transition-transform group-hover:rotate-180" />
            <span className={cn("transition-colors", lang === "de" ? "text-primary group-hover:text-primary-foreground" : "text-muted-foreground group-hover:text-primary-foreground/70")}>DE</span>
            <span className="text-border group-hover:text-primary-foreground/30">|</span>
            <span className={cn("transition-colors", lang === "en" ? "text-primary group-hover:text-primary-foreground" : "text-muted-foreground group-hover:text-primary-foreground/70")}>EN</span>
          </button>
          <Button asChild variant="default" size="sm" className="hidden bg-gradient-gold text-secondary-foreground shadow-gold hover:opacity-95 md:inline-flex">
            <Link to="/donate">{t("nav_donate_cta")}</Link>
          </Button>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container flex flex-col py-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-3 text-sm font-medium",
                    isActive ? "bg-primary/10 text-primary" : "text-foreground/80"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button asChild className="mt-2 bg-gradient-gold text-secondary-foreground shadow-gold">
              <Link to="/donate" onClick={() => setOpen(false)}>{t("nav_donate_cta")}</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
