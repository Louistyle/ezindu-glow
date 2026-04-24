import { ReactNode } from "react";

interface Props {
  kicker?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
}

const SectionHeader = ({ kicker, title, subtitle, align = "center" }: Props) => (
  <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
    {kicker && (
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{kicker}</p>
    )}
    <h2 className="font-display text-3xl font-semibold leading-tight text-primary md:text-4xl lg:text-5xl text-balance">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{subtitle}</p>
    )}
  </div>
);

export default SectionHeader;
