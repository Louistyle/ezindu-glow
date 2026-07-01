import { GraduationCap, Briefcase, UserX, CloudOff } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import situationImg from "@/assets/situation-southeast.jpg";

const Situation = () => {
  const { t } = useLanguage();
  const items = [
    { icon: GraduationCap, title: t("consequence_education"), text: t("consequence_education_text") },
    { icon: Briefcase, title: t("consequence_unemployment"), text: t("consequence_unemployment_text") },
    { icon: UserX, title: t("consequence_exclusion"), text: t("consequence_exclusion_text") },
    { icon: CloudOff, title: t("consequence_opportunity"), text: t("consequence_opportunity_text") },
  ];

  return (
    <>
      <section className="bg-gradient-leaf text-primary-foreground">
        <div className="container py-20 md:py-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{t("situation_kicker")}</p>
          <h1 className="font-display text-4xl font-semibold md:text-5xl lg:text-6xl text-balance max-w-3xl">{t("situation_title")}</h1>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img src={situationImg} alt="Community outreach in South Eastern Nigeria" loading="lazy" width={1280} height={960} className="rounded-3xl shadow-warm" />
          <p className="text-lg leading-relaxed text-muted-foreground">{t("situation_lead")}</p>
        </div>
      </section>

      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="container grid gap-6 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-2xl border border-border bg-card p-7 shadow-card transition-smooth hover:-translate-y-1 hover:border-gold hover:shadow-warm">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-secondary-foreground shadow-gold">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Situation;
