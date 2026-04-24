import { useState } from "react";
import { Copy, Check, Banknote, Heart } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Donate = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (val: string, label: string) => {
    navigator.clipboard.writeText(val);
    setCopied(label);
    toast({ title: `${label} ✓`, description: val });
    setTimeout(() => setCopied(null), 1800);
  };

  const rows: { label: string; value: string }[] = [
    { label: t("donate_account_holder"), value: "Ezindu – Erlöstes Leben e.V." },
    { label: t("donate_iban"), value: "DE03 3586 0245 3037 5160 06" },
    { label: t("donate_bic"), value: "GENODED1EMR" },
    { label: t("donate_reference"), value: t("donate_reference_value") },
  ];

  return (
    <>
      <section className="bg-gradient-leaf text-primary-foreground">
        <div className="container py-20 md:py-28">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            <Heart className="h-3.5 w-3.5" /> {t("nav_donate")}
          </p>
          <h1 className="font-display text-4xl font-semibold md:text-5xl lg:text-6xl text-balance max-w-3xl">{t("donate_title")}</h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/85 md:text-lg">{t("donate_lead")}</p>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-warm">
            <div className="flex items-center gap-3 bg-gradient-gold px-7 py-5 text-secondary-foreground">
              <Banknote className="h-5 w-5" />
              <h2 className="font-display text-xl font-semibold">{t("donate_bank_title")}</h2>
            </div>
            <dl className="divide-y divide-border">
              {rows.map(({ label, value }) => (
                <div key={label} className="grid grid-cols-1 items-center gap-2 px-7 py-5 sm:grid-cols-[180px_1fr_auto]">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</dt>
                  <dd className="font-mono text-sm text-foreground sm:text-base">{value}</dd>
                  <button
                    onClick={() => copy(value.replace(/\s/g, ""), label)}
                    className="justify-self-start rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-smooth hover:border-primary hover:text-primary sm:justify-self-end"
                  >
                    {copied === label ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-10 text-center text-lg italic text-muted-foreground">{t("donate_thanks")}</p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-leaf text-primary-foreground shadow-warm">
              <a href="/get-involved">{t("home_cta_sponsor")}</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/contact">{t("nav_contact")}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
