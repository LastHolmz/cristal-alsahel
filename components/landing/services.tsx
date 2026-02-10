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
    title: "سيارات",
    short: "سيارات بمختلف الأنواع والموديلات من أفضل الشركات العالمية",
    details:
      "نوفر سيارات بمختلف الأنواع والموديلات وفق احتياج السوق الليبي، مع التركيز على الاعتمادية والمواصفات العملية للاستخدام اليومي والعمل. نتابع حالة المركبة قبل الشحن وبعد الوصول، ونعمل على تقديم خيارات متعددة تلائم الأفراد والشركات، مع اهتمام خاص بسلامة الفحص وجودة التجهيزات لضمان تجربة شراء موثوقة.",
    bullets: [
      "خيارات متعددة من الموديلات والاستخدامات",
      "فحص جودة شامل قبل الشحن وبعد الوصول",
      "مواصفات مناسبة للطرق والظروف التشغيلية",
      "إرشاد في اختيار الأنسب حسب الاحتياج والميزانية",
      "دعم في توفير القطع الاستهلاكية والبدائل المعتمدة",
    ],
    image: "/services/1.jpg",
  },
  {
    no: "02",
    title: "شاحنات",
    short: "شاحنات نقل وحمل بمواصفات عالية الجودة للمشاريع الكبرى",
    details:
      "نستورد شاحنات نقل وحمل بمواصفات قوية مخصصة للأعمال والمشاريع الكبرى، مع مراعاة التحمل والاعتمادية وكفاءة التشغيل. نساعد عملاءنا على اختيار سعات التحميل والتجهيزات المناسبة لطبيعة العمل، ونركز على جودة المكونات الأساسية لضمان أداء ثابت وتقليل الأعطال ضمن بيئات التشغيل القاسية.",
    bullets: [
      "شاحنات مخصصة للنقل الثقيل والمتوسط حسب الطلب",
      "مواصفات تشغيل عالية للمشاريع واللوجستيات",
      "فحص واعتماد قبل الشحن لضمان المطابقة",
      "حلول تقلل التوقفات وترفع الاعتمادية",
      "إمكانية توفير قطع الغيار الأساسية للشاحنات",
    ],
    image: "/services/2.jpg",
  },
  {
    no: "03",
    title: "دراجات",
    short: "دراجات نارية وهوائية بتصاميم حديثة وأداء متميز",
    details:
      "نوفر دراجات نارية وهوائية بتصاميم حديثة وأداء عملي، مع اهتمام بالجودة والمتانة وسهولة الصيانة. نختار منتجات تلائم الاستخدام اليومي والتنقل، ونركز على مواصفات الأمان والاعتمادية، مع تقديم خيارات متعددة تناسب مختلف الفئات والاحتياجات.",
    bullets: [
      "دراجات نارية وهوائية بتصاميم عصرية",
      "جودة تصنيع مناسبة للاستخدام اليومي",
      "اهتمام بعوامل الأمان والثبات",
      "خيارات متعددة حسب الاستخدام والميزانية",
      "توفير المستلزمات والقطع الاستهلاكية عند الحاجة",
    ],
    image: "/services/3.jpg",
  },
  {
    no: "04",
    title: "آليات ثقيلة",
    short: "معدات ثقيلة ومعدات مشاريع للبناء والإنشاءات",
    details:
      "نختص في استيراد المعدات والآليات الثقيلة لمشاريع البناء والإنشاءات والبنية التحتية، مع التركيز على قوة الأداء والجاهزية التشغيلية. نحرص على فحص دقيق للمعدة قبل الشحن وبعد الوصول للتأكد من الحالة الفنية، ونساعد في اختيار الأنسب للمشروع من حيث القدرة والحمولة وطبيعة التشغيل.",
    bullets: [
      "معدات مناسبة للبناء والإنشاءات والمشاريع",
      "فحص فني قبل الشحن وبعد الوصول",
      "مساعدة في تحديد الاختيار المناسب حسب طبيعة العمل",
      "حلول تشغيلية تقلل الأعطال وتزيد الاعتمادية",
      "إمكانية توفير قطع غيار ومستهلكات للمعدات",
    ],
    image: "/services/4.jpg",
  },
  {
    no: "05",
    title: "قطع غيار",
    short: "قطع غيار أصلية ومعتمدة لجميع أنواع المركبات والآليات",
    details:
      "نوفر قطع غيار أصلية ومعتمدة للمركبات والآليات لضمان أعلى مستوى من التوافق والأداء، مع الحرص على الجودة وتقليل الأعطال الناتجة عن القطع غير المطابقة. نهدف لتقديم قطع تدعم استمرارية التشغيل، ونركز على القطع الأكثر طلبًا للمشاريع والأعمال لضمان تلبية احتياجات السوق بسرعة وكفاءة.",
    bullets: [
      "قطع غيار أصلية ومعتمدة",
      "توافق عالي مع أنواع مختلفة من المركبات والآليات",
      "جودة تضمن عمرًا أطول وأداءً أفضل",
      "تقليل الأعطال الناتجة عن القطع غير المطابقة",
      "أولوية لتوفير القطع الأساسية الأكثر طلبًا",
    ],
    image: "/services/5.jpg",
  },
  {
    no: "06",
    title: "إطارات",
    short: "إطارات عالية الجودة لجميع أنواع المركبات والشاحنات",
    details:
      "نوفر إطارات عالية الجودة لمختلف أنواع المركبات والشاحنات بما يتناسب مع ظروف التشغيل والطرق. نركز على عوامل الأمان والثبات والتحمل، ونساعد في اختيار المقاس والنوع المناسب حسب الاستخدام (شحن، مشاريع، استخدام يومي)، لضمان أداء أفضل وتقليل الاهتراء غير الطبيعي.",
    bullets: [
      "إطارات بجودة عالية لمركبات وشاحنات",
      "خيارات مناسبة لظروف تشغيل متنوعة",
      "ثبات وأمان أعلى على الطرق",
      "دعم في اختيار المقاس والنوع الأنسب",
      "تركيز على التحمل وتقليل الاهتراء",
    ],
    image: "/services/6.jpg",
  },
  {
    no: "07",
    title: "بطاريات",
    short: "بطاريات موثوقة ومعمرة لضمان أداء متواصل",
    details:
      "نوفر بطاريات موثوقة ومعمرة لضمان تشغيل مستقر للمركبات والآليات، مع مراعاة احتياجات التشغيل في الأجواء المختلفة واستهلاك الطاقة. نركز على البطاريات التي تقدم أداء ثابتًا وعمرًا أطول، ونوفر خيارات تلائم الاستخدامات اليومية والأعمال الثقيلة لتقليل الأعطال المفاجئة.",
    bullets: [
      "بطاريات موثوقة بعمر افتراضي طويل",
      "أداء ثابت لتقليل الأعطال المفاجئة",
      "خيارات للمركبات الخفيفة والشاحنات والآليات",
      "مناسبة لظروف تشغيل مختلفة",
      "دعم في اختيار السعة والملاءمة حسب المركبة",
    ],
    image: "/services/7.jpg",
  },
  {
    no: "08",
    title: "زيوت وفلاتر",
    short: "زيوت وفلاتر أصلية للحفاظ على أداء المحركات",
    details:
      "نوفر زيوت وفلاتر أصلية للحفاظ على أداء المحركات وكفاءة التشغيل، مع التركيز على المنتجات التي تدعم عمر المحرك وتقلل التآكل. نساعد في اختيار النوع المناسب حسب المحرك وطبيعة التشغيل، ونحرص على جودة الفلاتر لضمان تنقية فعّالة وتحسين الأداء وتقليل استهلاك الوقود على المدى الطويل.",
    bullets: [
      "زيوت أصلية تحافظ على كفاءة المحرك",
      "فلاتر عالية الجودة لتنقية أفضل وحماية أعلى",
      "تقليل التآكل ورفع الاعتمادية",
      "دعم في اختيار النوع المناسب حسب التشغيل",
      "تحسين الأداء وتقليل الاستهلاك",
    ],
    image: "/services/8.jpg",
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
                    isActive && "ring-1 ring-yellow-500/35 yellow-glow",
                  )}
                >
                  <div className="flex items-center justify-between gap-4 p-4 sm:p-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "rounded-2xl px-3 py-1 text-xs font-semibold",
                          "border border-black/10 bg-white/60",
                          isActive && "border-yellow-500/40",
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
                      <IconArrowLeft className="h-4 w-4 text-yellow-500 transition group-hover:translate-x-0.5" />
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
                    className="w-full rounded-2xl bg-yellow-500 text-black hover:bg-yellow-400"
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
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-yellow-500" />
                          <TextAnimation as="span">{b}</TextAnimation>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className="w-full rounded-2xl bg-yellow-500 text-black hover:bg-yellow-400 yellow-glow"
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
