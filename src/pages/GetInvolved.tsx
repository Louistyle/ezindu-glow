import { Link } from "react-router-dom";
import { HeartHandshake, Hand, Handshake, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";

const GetInvolved = () => {
  const { t } = useLanguage();
  const cards = [
    { icon: HeartHandshake, title: t("involved_sponsor_title"), text: t("involved_sponsor_text"), to: "/contact" },
    { icon: Hand, title: t("involved_volunteer_title"), text: t("involved_volunteer_text"), to: "/contact" },
    { icon: Handshake, title: t("involved_partner_title"), text: t("involved_partner_text"), to: "/contact" },
  ];
  return (
    <>
      <section className="bg-gradient-leaf text-primary-foreground">
        <div className="container py-20 md:py-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{t("nav_involved")}</p>
          <h1 className="font-display text-4xl font-semibold md:text-5xl lg:text-6xl text-balance max-w-3xl">{t("involved_title")}</h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/85 md:text-lg">{t("involved_lead")}</p>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-7 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, text, to }) => (
            <article key={title} className="group flex flex-col rounded-3xl border border-border bg-card p-8 shadow-card transition-smooth hover:-translate-y-1 hover:border-gold hover:shadow-warm">
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-leaf text-primary-foreground shadow-warm transition-smooth group-hover:bg-gradient-gold group-hover:text-secondary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-primary">{title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{text}</p>
              <Button asChild variant="link" className="mt-6 self-start px-0 text-primary">
                <Link to={to}>{t("involved_learn_more")} <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default GetInvolved;
