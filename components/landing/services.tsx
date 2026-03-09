"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { TextAnimation } from "@/components/text-animation";
import { IconArrowLeft } from "@/components/icons";

function toTelLibya(raw: string) {
  const digits = raw.replace(/[^\d]/g, "");
  if (digits.startsWith("0") && digits.length === 10)
    return `+218${digits.slice(1)}`;
  if (digits.startsWith("218")) return `+${digits}`;
  if (digits.startsWith("+")) return digits;
  return raw;
}

type Service = {
  no: string;
  title: string;
  short: string;
  details: string;
  bullets: string[];
  image: string; // local path in /public/services
};

const SERVICES: Service[] = [
  {
    no: "01",
    title: "مواد غذائية",
    short: "مواد غذائية متنوعة من أفضل الشركات العالمية",
    details:
      "نوفر مواد غذائية متنوعة وفق احتياج السوق الليبي، مع التركيز على الجودة والمواصفات الصحية للاستخدام اليومي والعمل. نتابع حالة المنتجات قبل الشحن وبعد الوصول، ونعمل على تقديم خيارات متعددة تلائم الأفراد والشركات، مع اهتمام خاص بسلامة الفحص وجودة التغليف لضمان تجربة شراء موثوقة.",
    bullets: [
      "خيارات متعددة من المنتجات والاستخدامات",
      "فحص جودة شامل قبل الشحن وبعد الوصول",
      "مواصفات مناسبة للطرق والظروف التشغيلية",
      "إرشاد في اختيار الأنسب حسب الاحتياج والميزانية",
      "دعم في توفير القطع الاستهلاكية والبدائل المعتمدة",
    ],
    image: "/services/1.jpg",
  },
  {
    no: "02",
    title: "فواكه وخضروات",
    short: "فواكه وخضروات طازجة من أفضل المصادر العالمية",
    details:
      "نستورد فواكه وخضروات طازجة من أفضل المصادر العالمية، مع مراعاة الجودة والنضارة. نساعد عملاءنا على اختيار المنتجات المناسبة حسب الموسم والاحتياجات، ونركز على تقديم خيارات متعددة تلائم الأفراد والشركات، مع اهتمام خاص بسلامة الفحص وجودة التغليف لضمان تجربة شراء موثوقة.",
    bullets: [
      "فواكه وخضروات طازجة ومتنوعة حسب الموسم",

      "مواصفات تشغيل عالية للمشاريع واللوجستيات",
      "فحص واعتماد قبل الشحن لضمان المطابقة",
      "حلول تقلل التوقفات وترفع الاعتمادية",
      "إمكانية توفير قطع الغيار الأساسية للشاحنات",
    ],
    image: "/services/2.jpg",
  },
];

const INTRO =
  "نوفر لكم مجموعة متكاملة من المنتجات المستوردة من أفضل المصنعين العالميين، والتي تخضع لفحص دقيق قبل الشحن وبعد الوصول لضمان الجودة والمطابقة للمعايير";

export default function ServicesSection() {
  const [active, setActive] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Service | null>(null);

  const telHref = `tel:${toTelLibya("0940571111")}`;

  const openDrawer = (s: Service) => {
    setSelected(s);
    setOpen(true);
  };

  return (
    <section id="services" className="mx-auto bg-accent py-14 sm:px-6 sm:py-20">
      <div className=" p-5 sm:p-8">
        <div className="mb-8 space-y-3">
          <TextAnimation as="h2" className="text-2xl font-semibold sm:text-3xl">
            خدماتنا
          </TextAnimation>
          <TextAnimation
            as="p"
            className="text-base leading-7 text-foreground/85"
            delay={0.05}
          >
            {INTRO}
          </TextAnimation>
        </div>

        <div className="relative grid gap-6 lg:grid-cols-[1fr_420px]">
          {/* Rows */}
          <div className="space-y-2">
            {SERVICES.map((s, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={s.no}
                  onMouseEnter={() => setActive(idx)}
                  onFocus={() => setActive(idx)}
                  onClick={() => openDrawer(s)}
                  className={cn(
                    "group w-full rounded-[24px] text-right transition",
                    "border border-black/10 bg-background/55 backdrop-blur-xl",
                    "hover:bg-background/70",
                    isActive && "ring-1 ring-blue-500/35 blue-glow",
                  )}
                >
                  <div className="flex items-center justify-between gap-4 p-4 sm:p-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "rounded-2xl px-3 py-1 text-xs font-semibold",
                          "border border-black/10 bg-white/60",
                          isActive && "border-blue-500/40",
                        )}
                      >
                        <TextAnimation as="span">{s.no}</TextAnimation>
                      </div>

                      <div className="space-y-1">
                        <TextAnimation
                          as="div"
                          className="text-base font-semibold"
                        >
                          {s.title}
                        </TextAnimation>
                        <TextAnimation
                          as="div"
                          className="text-sm text-muted-foreground"
                          delay={0.03}
                        >
                          {s.short}
                        </TextAnimation>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="hidden sm:inline">
                        <TextAnimation as="span">عرض التفاصيل</TextAnimation>
                      </span>
                      <IconArrowLeft className="h-4 w-4 text-blue-500 transition group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Floating image (desktop only) */}
          <div className="relative hidden lg:block">
            <div className="sticky top-24">
              <div className="rounded-[28px] overflow-hidden soft-border bg-background/40 backdrop-blur-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={SERVICES[active]?.image}
                    initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -6, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                  >
                    <Image
                      src={SERVICES[active]!.image}
                      alt={SERVICES[active]!.title}
                      width={1200}
                      height={900}
                      className="h-[440px] w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/35 px-4 py-3 backdrop-blur-xl">
                      <TextAnimation
                        as="div"
                        className="text-white/90 text-sm font-semibold"
                      >
                        {SERVICES[active]!.title}
                      </TextAnimation>
                      <TextAnimation
                        as="div"
                        className="text-white/75 text-xs"
                        delay={0.03}
                      >
                        {SERVICES[active]!.short}
                      </TextAnimation>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-4 ">
                <TextAnimation
                  as="div"
                  className="text-sm text-muted-foreground"
                >
                  للاستفسار المباشر:
                </TextAnimation>
                <div className="mt-2">
                  <Button
                    className="w-full rounded-2xl bg-blue-500 text-black hover:bg-blue-400"
                    asChild
                  >
                    <a href={telHref}>
                      <TextAnimation as="span">اتصل بنا</TextAnimation>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Drawer */}
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent className="border-black/10 bg-background/80 min-h-[90%] backdrop-blur-2xl">
            <div className="mx-auto w-full max-w-3xl px-4 pb-10 pt-4 sm:px-6">
              <DrawerHeader className="text-right px-0">
                <DrawerTitle className="text-xl sm:text-2xl">
                  {selected ? (
                    <span className="inline-flex items-center gap-3">
                      <span className="rounded-2xl border border-black/10 bg-white/60 px-3 py-1 text-xs font-semibold">
                        <TextAnimation as="span">{selected.no}</TextAnimation>
                      </span>
                      <TextAnimation as="span">{selected.title}</TextAnimation>
                    </span>
                  ) : null}
                </DrawerTitle>
              </DrawerHeader>

              {selected ? (
                <div className="mt-4 space-y-6">
                  <div className="overflow-hidden rounded-[28px] soft-border">
                    <Image
                      src={selected.image}
                      alt={selected.title}
                      width={1400}
                      height={1000}
                      className="h-[260px] w-full object-cover sm:h-[340px]"
                    />
                  </div>

                  <TextAnimation
                    as="p"
                    className="text-base leading-7 text-foreground/85"
                  >
                    {selected.details}
                  </TextAnimation>

                  <div className="rounded-[28px] border border-black/10 bg-background/60 p-5 backdrop-blur-xl">
                    <TextAnimation as="div" className="text-sm font-semibold">
                      نقاط الخدمة
                    </TextAnimation>
                    <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                      {selected.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                          <TextAnimation as="span">{b}</TextAnimation>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className="w-full rounded-2xl bg-blue-500 text-black hover:bg-blue-400 blue-glow"
                    asChild
                  >
                    <a href="#contact">
                      <TextAnimation as="span">تواصل معنا</TextAnimation>
                    </a>
                  </Button>
                </div>
              ) : null}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  );
}
