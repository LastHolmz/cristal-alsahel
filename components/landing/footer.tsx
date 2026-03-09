"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import TextAnimation from "@/components/ui/scroll-text";
import { ArrowUpLeft, Mail, Phone, MapPin } from "lucide-react";

const LINKS = [
  { label: "الرئيسية", href: "#home" },
  { label: "من نحن", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "منتجاتنا", href: "#products" },
  { label: "تواصل", href: "#contact" },
  { label: "البيانات القانونية", href: "#legal" },
] as const;
export default function FooterSection({
  className,
  email = "info@AlAmoud-AlHadidi.ly",
  phones = ["0940571111", "0944041633"],
  address = "جوددائم /الزاوية /ليبيا",
  brand = "شركة العمود الحديدي لاستيراد الآلات والمعدات الثقيلة",
  designerLabel = "تم التطوير بواسطة منفذ",
  designerHref = "https://mnfd.ly",
  companyName,
}: {
  className?: string;
  email?: string;
  phones?: string[];
  address?: string;
  brand?: string;
  designerLabel?: string;
  designerHref?: string;
  companyName?: string;
}) {
  return (
    <footer dir="rtl" className={cn("py-16 bg-background", className)}>
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Big card */}
          <div
            className={cn(
              "relative overflow-hidden rounded-[32px]",
              "border border-white/10",
              "bg-black text-white",
              "shadow-[0_40px_140px_-70px_rgba(0,0,0,0.8)]",
            )}
          >
            {/* Glow / gradient background */}
            <div className="pointer-events-none absolute inset-0">
              {/* Primary blue glow */}
              <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />

              {/* Secondary soft blue */}
              <div className="absolute right-[-160px] top-10 h-[420px] w-[420px] rounded-full bg-blue-400/15 blur-[140px]" />

              {/* Bottom ambient glow */}
              <div className="absolute bottom-[-160px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

              {/* Dark overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60" />
            </div>

            <div className="relative p-6 sm:p-10">
              {/* Top */}
              <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
                {/* Left: headline + contact */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <TextAnimation
                      as="div"
                      text="تواصل معنا"
                      lineAnime
                      direction="down"
                      classname="text-xs font-medium tracking-wide text-white/70"
                    />

                    <TextAnimation
                      as="h3"
                      text="جاهزون للتعاون وتلبية احتياجكم في التوريد"
                      lineAnime
                      direction="right"
                      classname="text-white text-2xl font-semibold leading-tight sm:text-3xl"
                    />

                    <TextAnimation
                      as="p"
                      text="راسلنا أو اتصل بنا مباشرة، وسنعود إليك بسرعة."
                      lineAnime
                      direction="right"
                      classname="text-sm leading-7 text-white/70"
                    />
                  </div>

                  {/* Contact rows */}
                  <div className="grid gap-3 sm:max-w-md">
                    <a
                      href={`mailto:${email}`}
                      className={cn(
                        "group flex items-center justify-between gap-3",
                        "rounded-2xl border border-white/10 bg-white/5 px-4 py-3",
                        "hover:bg-white/10 transition",
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
                          <Mail className="h-5 w-5 text-blue-400" />
                        </span>
                        <div className="text-right">
                          <div className="text-xs text-white/60">
                            البريد الإلكتروني
                          </div>
                          <div className="text-sm font-medium">{email}</div>
                        </div>
                      </div>
                      <ArrowUpLeft className="h-4 w-4 text-white/60 transition group-hover:text-white" />
                    </a>

                    <div
                      className={cn(
                        "rounded-2xl border border-white/10 bg-white/5 px-4 py-3",
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
                          <Phone className="h-5 w-5 text-blue-400" />
                        </span>
                        <div className="flex-1 text-right">
                          <div className="text-xs text-white/60">
                            أرقام الهاتف
                          </div>
                          <div className="mt-1 flex flex-wrap gap-2">
                            {phones.map((p) => (
                              <a
                                key={p}
                                href={`tel:${p}`}
                                className="rounded-full bg-black/30 px-3 py-1 text-sm text-white/85 hover:text-white hover:bg-black/40 transition"
                              >
                                {p}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={cn(
                        "rounded-2xl border border-white/10 bg-white/5 px-4 py-3",
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
                          <MapPin className="h-5 w-5 text-blue-400" />
                        </span>
                        <div className="text-right">
                          <div className="text-xs text-white/60">العنوان</div>
                          <div className="text-sm font-medium">{address}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: nav links */}
                <div className="lg:pt-2">
                  <div className="text-xs font-medium tracking-wide text-white/60">
                    روابط سريعة
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {LINKS.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className={cn(
                          "group flex items-center justify-between gap-2",
                          "rounded-2xl border border-white/10 bg-white/5 px-3 py-3",
                          "hover:bg-white/10 transition",
                        )}
                      >
                        <span className="text-sm text-white/85 group-hover:text-white">
                          {l.label}
                        </span>
                        <span className="text-white/50 group-hover:text-white/80 transition">
                          ←
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Brand strip */}
              <div className="mt-10 border-t border-white/10 pt-8">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div className="space-y-2">
                    <div className="text-xs text-white/60">
                      العلامة التجارية
                    </div>
                    <div className="text-4xl font-semibold tracking-tight sm:text-5xl">
                      {companyName}
                    </div>
                    <div className="text-sm text-white/60">{brand}</div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-white/60">
                    <span>© {new Date().getFullYear()} جميع الحقوق محفوظة</span>
                    <span className="hidden sm:inline">•</span>
                    <a
                      href={designerHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition"
                    >
                      {designerLabel}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /card */}
        </div>
      </div>
    </footer>
  );
}
