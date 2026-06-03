import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, Building2, Sun, HeartHandshake, Wrench, Users } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import heroClassroom from "@/assets/hero-classroom.jpg.asset.json";
import heroBooks from "@/assets/hero-books.jpg.asset.json";
import heroOutreach from "@/assets/hero-outreach.jpg.asset.json";
import whySchoolProject from "@/assets/why-school-project.jpg.asset.json";

const Home = () => {
  const { t } = useLanguage();

  const heroSlides = [heroClassroom.url, heroBooks.url, heroOutreach.url];
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((i) => (i + 1) % heroSlides.length);
    }, 2000);
    return () => clearInterval(id);
  }, [heroSlides.length]);

  const impacts = [
    { icon: BookOpen, title: t("impact_education_title"), text: t("impact_education_text") },
    { icon: Building2, title: t("impact_school_title"), text: t("impact_school_text") },
    { icon: Sun, title: t("impact_solar_title"), text: t("impact_solar_text") },
    { icon: HeartHandshake, title: t("impact_family_title"), text: t("impact_family_text") },
    { icon: Wrench, title: t("impact_vocational_title"), text: t("impact_vocational_text") },
    { icon: Users, title: t("impact_outreach_title"), text: t("impact_outreach_text") },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {heroSlides.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              width={1920}
              height={1280}
              className="absolute inset-0 h-full w-full object-cover transition-all ease-[cubic-bezier(0.7,0,0.3,1)]"
              style={{
                opacity: i === activeSlide ? 1 : 0,
                transform: i === activeSlide ? "scale(1.04)" : "scale(1)",
                transitionDuration: "1600ms",
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="container flex min-h-[88vh] flex-col justify-center py-24">
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Ezindu e.V.
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] text-primary-foreground text-balance sm:text-5xl md:text-6xl lg:text-7xl">
              {t("home_hero_title")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
              {t("home_hero_sub")}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-gold text-secondary-foreground shadow-gold hover:opacity-95">
                <Link to="/donate">{t("home_cta_donate")} <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground backdrop-blur hover:bg-primary-foreground/20 hover:text-primary-foreground">
                <Link to="/get-involved">{t("home_cta_sponsor")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="container py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-gold/30" aria-hidden />
            <img
              src={whySchoolProject.url}
              alt="School building project rendering"
              loading="lazy"
              width={1280}
              height={960}
              className="relative rounded-3xl shadow-warm"
            />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{t("home_why_kicker")}</p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-primary md:text-4xl lg:text-5xl text-balance">
              {t("home_why_title")}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t("home_why_text")}</p>
            <Button asChild variant="link" className="mt-4 px-0 text-primary">
              <Link to="/situation">{t("nav_situation")} <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-gradient-soft py-24 md:py-32">
        <div className="container">
          <SectionHeader kicker={t("home_impact_kicker")} title={t("home_impact_title")} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {impacts.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-smooth hover:-translate-y-1 hover:border-gold hover:shadow-warm"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-leaf text-primary-foreground shadow-warm transition-smooth group-hover:bg-gradient-gold group-hover:text-secondary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-leaf p-10 text-primary-foreground shadow-warm md:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/30 blur-3xl" aria-hidden />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="font-display text-3xl font-semibold md:text-4xl text-balance">{t("home_hero_title")}</h2>
              <p className="mt-3 text-primary-foreground/85">{t("home_hero_sub")}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button asChild size="lg" className="bg-gradient-gold text-secondary-foreground shadow-gold">
                <Link to="/donate">{t("home_cta_donate")}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link to="/get-involved">{t("home_cta_sponsor")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
