import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const schema = z.object({
    name: z.string().trim().min(2).max(100),
    email: z.string().trim().email().max(255),
    message: z.string().trim().min(5).max(2000),
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { fieldErrors[i.path[0] as string] = i.message; });
      setErrors(fieldErrors);
      toast({ title: t("contact_form_error"), variant: "destructive" });
      return;
    }
    setErrors({});
    toast({ title: t("contact_form_sent") });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section className="bg-gradient-leaf text-primary-foreground">
        <div className="container py-20 md:py-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{t("nav_contact")}</p>
          <h1 className="font-display text-4xl font-semibold md:text-5xl lg:text-6xl text-balance max-w-3xl">{t("contact_title")}</h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/85 md:text-lg">{t("contact_lead")}</p>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-soft text-primary"><MapPin className="h-5 w-5" /></span>
                <h3 className="font-display text-lg font-semibold text-primary">{t("contact_address")}</h3>
              </div>
              <p className="mt-3 text-muted-foreground">Kapitelstr. 12<br />46459 Rees, Deutschland</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-soft text-primary"><Phone className="h-5 w-5" /></span>
                <h3 className="font-display text-lg font-semibold text-primary">{t("contact_phone")}</h3>
              </div>
              <a href="tel:+4917661297927" className="mt-3 block text-muted-foreground hover:text-primary">+49 176 61297927</a>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-soft text-primary"><Mail className="h-5 w-5" /></span>
                <h3 className="font-display text-lg font-semibold text-primary">{t("contact_email")}</h3>
              </div>
              <a href="mailto:ezinduev@gmail.com" className="mt-3 block text-muted-foreground hover:text-primary">ezinduev@gmail.com</a>
            </div>
          </div>

          <form onSubmit={submit} className="space-y-5 rounded-3xl border border-border bg-card p-8 shadow-warm md:p-10">
            <div>
              <Label htmlFor="name">{t("contact_form_name")}</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} className="mt-2" />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="email">{t("contact_form_email")}</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} className="mt-2" />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>
            <div>
              <Label htmlFor="message">{t("contact_form_message")}</Label>
              <Textarea id="message" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={2000} className="mt-2" />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <Button type="submit" size="lg" className="w-full bg-gradient-gold text-secondary-foreground shadow-gold sm:w-auto">
              {t("contact_form_send")} <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
