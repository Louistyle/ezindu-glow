import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone, Heart } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="mt-24 bg-gradient-leaf text-primary-foreground">
      <div className="container grid gap-10 py-16 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-display text-xl">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-secondary-foreground">
              <Heart className="h-4 w-4" />
            </span>
            Ezindu
          </div>
          <p className="max-w-xs text-sm text-primary-foreground/75">{t("footer_tagline")}</p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">{t("footer_quick")}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-gold">{t("nav_about")}</Link></li>
            <li><Link to="/projects" className="hover:text-gold">{t("nav_projects")}</Link></li>
            <li><Link to="/donate" className="hover:text-gold">{t("nav_donate")}</Link></li>
            <li><Link to="/get-involved" className="hover:text-gold">{t("nav_involved")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">{t("footer_contact")}</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/85">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> Kapitelstr. 12, 46459 Rees</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> +49 176 61297927</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> ezinduev@gmail.com</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">{t("footer_follow")}</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 transition-smooth hover:bg-gold hover:text-secondary-foreground"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 transition-smooth hover:bg-gold hover:text-secondary-foreground"><Instagram className="h-4 w-4" /></a>
            <a href="mailto:ezinduev@gmail.com" aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 transition-smooth hover:bg-gold hover:text-secondary-foreground"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container flex flex-col items-center justify-between gap-3 py-5 text-xs text-primary-foreground/70 md:flex-row">
          <p>© {new Date().getFullYear()} Ezindu – Erlöstes Leben e.V. {t("footer_rights")}</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold">{t("footer_imprint")}</a>
            <a href="#" className="hover:text-gold">{t("footer_privacy")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
