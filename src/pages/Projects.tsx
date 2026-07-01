import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import schoolImg from "@/assets/project-school.jpg";
import sponsorImg from "@/assets/project-scholars.jpg";
import solarImg from "@/assets/project-solar.jpg";
import aidImg from "@/assets/project-aid.jpg";
import waterImg from "@/assets/project-water.jpg";

const Projects = () => {
  const { t } = useLanguage();
  const projects = [
    { img: schoolImg, title: t("project_school_title"), text: t("project_school_text") },
    { img: sponsorImg, title: t("project_sponsor_title"), text: t("project_sponsor_text") },
    { img: solarImg, title: t("project_solar_title"), text: t("project_solar_text") },
    { img: waterImg, title: t("project_water_title"), text: t("project_water_text") },
    { img: aidImg, title: t("project_aid_title"), text: t("project_aid_text") },
  ];

  return (
    <>
      <section className="bg-gradient-leaf text-primary-foreground">
        <div className="container py-20 md:py-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{t("nav_projects")}</p>
          <h1 className="font-display text-4xl font-semibold md:text-5xl lg:text-6xl text-balance max-w-3xl">{t("projects_title")}</h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/85 md:text-lg">{t("projects_lead")}</p>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map(({ img, title, text }, i) => (
            <article key={title} className="group overflow-hidden rounded-3xl bg-card shadow-card transition-smooth hover:shadow-warm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={img} alt={title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
              </div>
              <div className="p-7 md:p-9">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold">0{i + 1}</p>
                <h3 className="font-display text-2xl font-semibold text-primary md:text-3xl">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button asChild size="lg" className="bg-gradient-gold text-secondary-foreground shadow-gold">
            <Link to="/donate">{t("home_cta_donate")} <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Projects;
