"use client";

import { Marquee } from "@/components/marquee";
import { TextAnimation } from "@/components/text-animation";
import { cn } from "@/lib/utils";

const PARTNERS = [
  "الرافعة العالمية للاستيراد",
  "الآلات الثقيلة",
  "حفارات (Hyundai Excavators)",
  "كواشيك LG",
  "كواشيك Lovol",
  "قطع غيار حفارات هيونداي وكواشيك",
] as const;

export default function PartnersSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 sm:pb-10">
      <div className="rounded-[32px] glass px-5 py-6 sm:px-8 sm:py-8">
        <div className="mb-4 flex items-end justify-between gap-4">
          <TextAnimation as="h2" className="text-xl font-semibold sm:text-2xl">
            شركاؤنا
          </TextAnimation>
          <TextAnimation as="div" className="text-xs text-muted-foreground">
            أسماء الشركاء
          </TextAnimation>
        </div>

        <Marquee
          className="rounded-[24px] border border-black/10 bg-background/50"
          speed={20}
        >
          {PARTNERS.map((name) => (
            <div
              key={name}
              className={cn(
                "glass mx-1 rounded-2xl px-4 py-2",
                "border-black/10 bg-background/60",
              )}
            >
              <TextAnimation as="span" className="text-sm text-foreground/85">
                {name}
              </TextAnimation>
            </div>
          ))}
        </Marquee>

        <div className="mt-5">
          <TextAnimation as="p" className="text-xs text-muted-foreground">
            * عرض الشركاء هنا بصيغة نصية وفقًا لاختيارك (بدون لوجوهات).
          </TextAnimation>
        </div>
      </div>
    </section>
  );
}
