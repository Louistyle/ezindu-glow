import { CheckCircle2, Users, Building2, Globe2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import SectionHeader from "@/components/SectionHeader";
import teamImg from "@/assets/team.jpg";

const About = () => {
  const { t } = useLanguage();
  const partners = [
    { icon: Building2, label: t("about_partner_1") },
    { icon: Globe2, label: t("about_partner_2") },
    { icon: Users, label: t("about_partner_3") },
  ];
  const mission = [t("about_mission_1"), t("about_mission_2"), t("about_mission_3"), t("about_mission_4"), t("about_mission_5")];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-leaf text-primary-foreground">
        <div className="container py-20 md:py-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{t("about_who_kicker")}</p>
          <h1 className="font-display text-4xl font-semibold md:text-5xl lg:text-6xl text-balance max-w-3xl">{t("about_title")}</h1>
        </div>
      </section>

      {/* Who */}
      <section className="container py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img src={teamImg} alt="Ezindu team" loading="lazy" width={1280} height={960} className="rounded-3xl shadow-warm" />
          <div>
            <h2 className="font-display text-3xl font-semibold text-primary md:text-4xl text-balance">{t("about_who_title")}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t("about_who_text")}</p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div className="rounded-3xl bg-card p-8 shadow-card md:p-10">
            <h3 className="font-display text-2xl font-semibold text-primary md:text-3xl">{t("about_vision_title")}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t("about_vision_text")}</p>
          </div>
          <div className="rounded-3xl bg-gradient-leaf p-8 text-primary-foreground shadow-warm md:p-10">
            <h3 className="font-display text-2xl font-semibold md:text-3xl">{t("about_mission_title")}</h3>
            <ul className="mt-5 space-y-3">
              {mission.map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="container py-20 md:py-28">
        <SectionHeader title={t("about_partners_title")} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {partners.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:border-gold">
              <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg bg-gold-soft text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium leading-relaxed text-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
