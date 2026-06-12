import { CheckCircle2, Users, Building2, Globe2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import SectionHeader from "@/components/SectionHeader";
import teamImg from "@/assets/about-southeast.jpg.asset.json";
import boardDirector from "@/assets/board-director.jpg.asset.json";
import boardNjoku from "@/assets/board-njoku.png.asset.json";
import boardIbeji from "@/assets/board-ibeji.png.asset.json";
import boardAsagwara from "@/assets/board-asagwara.png.asset.json";

const About = () => {
  const { t } = useLanguage();
  const partners = [
    { icon: Building2, label: t("about_partner_1") },
    { icon: Globe2, label: t("about_partner_2") },
    { icon: Users, label: t("about_partner_3") },
  ];
  const mission = [t("about_mission_1"), t("about_mission_2"), t("about_mission_3"), t("about_mission_4"), t("about_mission_5")];

  const boardMembers = [
    { name: t("about_board_member1_name"), role: t("about_board_member1_role"), img: boardNjoku.url },
    { name: t("about_board_member2_name"), role: t("about_board_member2_role"), img: boardIbeji.url },
    { name: t("about_board_member3_name"), role: t("about_board_member3_role"), img: boardAsagwara.url },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-leaf text-primary-foreground">
        <div className="container py-14 md:py-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{t("about_who_kicker")}</p>
          <h1 className="font-display text-4xl font-semibold md:text-5xl lg:text-6xl text-balance max-w-3xl">{t("about_title")}</h1>
        </div>
      </section>

      {/* Who */}
      <section className="container py-14 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img src={teamImg.url} alt="Ezindu team in the South-East community" loading="lazy" width={1280} height={960} className="rounded-3xl shadow-warm" />
          <div>
            <h2 className="font-display text-3xl font-semibold text-primary md:text-4xl text-balance">{t("about_who_title")}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t("about_who_text")}</p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-gradient-soft py-14 md:py-24">
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

      {/* Board of Directors */}
      <section className="container py-14 md:py-20">
        <SectionHeader
          kicker={t("about_board_kicker")}
          title={t("about_board_title")}
          subtitle={t("about_board_subtitle")}
        />

        {/* Director — featured */}
        <div className="mx-auto mt-10 max-w-5xl">
          <div className="grid items-center gap-8 rounded-3xl bg-gradient-leaf p-6 text-primary-foreground shadow-warm sm:p-8 md:grid-cols-[auto,1fr] md:gap-10 md:p-12">
            <div className="relative mx-auto w-full md:mx-0 md:w-auto">
              <div className="absolute -inset-3 rounded-2xl bg-gold/40 blur-xl" aria-hidden />
              <img
                src={boardDirector.url}
                alt={`${t("about_board_director_name")}, ${t("about_board_director_role")}`}
                loading="lazy"
                className="relative w-full rounded-2xl object-cover object-top ring-4 ring-gold shadow-warm aspect-[4/5] md:aspect-auto md:h-[22rem] md:w-[17rem]"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{t("about_board_director_role")}</p>
              <h3 className="mt-2 font-display text-3xl font-semibold md:text-4xl lg:text-[2.5rem] leading-tight">
                {t("about_board_director_name")}
              </h3>
              <p className="mt-4 leading-relaxed text-primary-foreground/85 text-base md:text-lg max-w-xl">
                {t("about_board_director_bio")}
              </p>
            </div>
          </div>
        </div>

        {/* Members */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {boardMembers.map((m, i) => (
            <div
              key={m.name}
              className={`group rounded-2xl border border-border bg-card p-4 text-center shadow-card transition-smooth hover:border-gold hover:shadow-warm sm:p-5 ${
                i === 2 ? "col-start-1 lg:col-start-auto" : ""
              }`}
            >
              <div className="overflow-hidden rounded-xl ring-1 ring-border transition-smooth group-hover:ring-gold">
                <img
                  src={m.img}
                  alt={`${m.name}, ${m.role}`}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover object-top"
                />
              </div>
              <h4 className="mt-5 font-display text-lg font-semibold text-primary">{m.name}</h4>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="container pb-14 pt-4 md:pb-24 md:pt-8">
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
