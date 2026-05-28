import { Wrench, Users } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import vocEquipment from "@/assets/voc-equipment.jpg";
import vocWorkshop from "@/assets/voc-workshop.jpg";
import vocBethel from "@/assets/voc-bethel.jpg";
import outreachG1 from "@/assets/outreach-g1.jpg";
import outreachG2 from "@/assets/outreach-g2.jpg";
import outreachG3 from "@/assets/outreach-g3.jpg";
import outreachG4 from "@/assets/outreach-g4.jpg";
import outreachG5 from "@/assets/outreach-g5.jpg";
import outreachG6 from "@/assets/outreach-g6.jpg";

const Outreach = () => {
  const { t } = useLanguage();

  const vocCards = [
    { caption: t("outreach_voc_card1"), image: vocEquipment },
    { caption: t("outreach_voc_card2"), image: vocWorkshop },
    { caption: t("outreach_voc_card3"), image: vocBethel },
  ];

  const gallery = [
    { caption: t("outreach_com_g1"), image: outreachG1 },
    { caption: t("outreach_com_g2"), image: outreachG2 },
    { caption: t("outreach_com_g3"), image: outreachG4 },
    { caption: t("outreach_com_g4"), image: outreachG3 },
    { caption: t("outreach_com_g5"), image: outreachG5 },
    { caption: t("outreach_com_g6"), image: outreachG6 },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-leaf text-primary-foreground">
        <div className="container py-20 md:py-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{t("nav_outreach")}</p>
          <h1 className="font-display text-4xl font-semibold md:text-5xl lg:text-6xl text-balance max-w-3xl">
            {t("outreach_title")}
          </h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/85 md:text-lg">{t("outreach_lead")}</p>
        </div>
      </section>

      {/* Vocational Training */}
      <section className="container py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            <Wrench className="h-3.5 w-3.5" /> {t("outreach_voc_kicker")}
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-primary md:text-4xl lg:text-5xl text-balance">
            {t("outreach_voc_title")}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t("outreach_voc_intro")}</p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {vocCards.map(({ caption, image }, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-smooth hover:-translate-y-1 hover:border-gold hover:shadow-warm"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-soft">
                <img
                  src={image}
                  alt={caption}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-smooth group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-foreground">{caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Community Outreach */}
      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              <Users className="h-3.5 w-3.5" /> {t("outreach_com_kicker")}
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-primary md:text-4xl lg:text-5xl text-balance">
              {t("outreach_com_title")}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t("outreach_com_intro")}</p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map(({ caption, image }, i) => (
              <figure
                key={i}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-smooth hover:-translate-y-1 hover:border-gold hover:shadow-warm"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-leaf/10">
                  <img
                    src={image}
                    alt={caption}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-smooth group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-5 text-sm leading-relaxed text-foreground">{caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Outreach;