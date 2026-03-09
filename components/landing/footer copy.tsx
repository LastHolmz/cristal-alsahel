"use client";

import { TextAnimation } from "@/components/text-animation";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "الرئيسية", href: "#home" },
  { label: "من نحن", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "منتجاتنا", href: "#products" },
  { label: "تواصل", href: "#contact" },
  { label: "البيانات القانونية", href: "#legal" },
] as const;

const PHONES = ["0940571111", "0944041633"] as const;
const EMAIL = "info@AlAmoud-AlHadidi.ly";

function toTelLibya(raw: string) {
  const digits = raw.replace(/[^\d]/g, "");
  if (digits.startsWith("0") && digits.length === 10)
    return `+218${digits.slice(1)}`;
  if (digits.startsWith("218")) return `+${digits}`;
  if (digits.startsWith("+")) return digits;
  return raw;
}

export default function FooterSection() {
  return (
    <footer className="mx-auto  px-4 pb-14 sm:px-6 sm:pb-20">
      <div className={cn("rounded-[32px] glass-dark px-6 py-20 sm:p-10")}>
        <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
          {/* Brand */}
          <div className="space-y-3">
            <TextAnimation as="div" className="text-2xl font-bold text-white">
              شركة العمود الحديدي
            </TextAnimation>
            <TextAnimation as="div" className="text-sm text-white/70">
              شركة العمود الحديدي لاستيراد الآلات والمعدات الثقيلة وقطع غيارها
            </TextAnimation>

            <div className="mt-6 rounded-[28px] border border-blue-500/15 bg-black/40 p-4 backdrop-blur-xl">
              <TextAnimation as="div" className="text-xs text-white/70">
                تصميم وتنفيذ:
              </TextAnimation>
              <a
                href="https://mnfd.ly"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block text-sm font-semibold text-blue-500 hover:opacity-90"
              >
                <TextAnimation as="span">Design by منفذ</TextAnimation>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <TextAnimation
              as="div"
              className="text-sm font-semibold text-white"
            >
              روابط سريعة
            </TextAnimation>
            <div className="grid grid-cols-2 gap-2">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-2xl border border-blue-500/12 bg-black/35 px-4 py-3 text-sm text-white/80 backdrop-blur-xl transition hover:bg-black/45"
                >
                  <TextAnimation as="span">{l.label}</TextAnimation>
                </a>
              ))}
            </div>
          </div>

          {/* Contact cards */}
          <div className="space-y-4">
            <TextAnimation
              as="div"
              className="text-sm font-semibold text-white"
            >
              تواصل
            </TextAnimation>

            <div className="grid gap-2">
              {PHONES.map((p) => (
                <a
                  key={p}
                  href={`tel:${toTelLibya(p)}`}
                  className="rounded-2xl border border-blue-500/12 bg-black/35 px-4 py-3 text-sm text-white/80 backdrop-blur-xl transition hover:bg-black/45"
                >
                  <TextAnimation as="span">{p}</TextAnimation>
                </a>
              ))}

              <a
                href={`mailto:${EMAIL}`}
                className="rounded-2xl border border-blue-500/12 bg-black/35 px-4 py-3 text-sm text-white/80 backdrop-blur-xl transition hover:bg-black/45"
              >
                <TextAnimation as="span">{EMAIL}</TextAnimation>
              </a>
            </div>

            <div className="pt-3 text-xs text-white/55">
              <TextAnimation as="span">
                © {new Date().getFullYear()} شركة العمود الحديدي
              </TextAnimation>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
