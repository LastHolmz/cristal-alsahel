"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TextAnimation } from "@/components/text-animation";

const ABOUT_TITLE = "من نحن";
const ABOUT_SHORT = "شركة استيراد سيارات";
const ABOUT_PARAGRAPH =
  "أبرز الشركات الرائدة في استيراد الآليات الثقيلة، المركبات، وقطع الغيار الأصلية، بالإضافة إلى تجهيزات المصانع والمشاريع الكبرى في ليبيا.";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto  px-4 py-14 sm:px-6 sm:py-20">
      <div className=" p-5 sm:p-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[28px] soft-border">
            <Image
              src="/about.jpg"
              alt="صورة عن الشركة"
              width={1400}
              height={1000}
              className="h-[300px] w-full object-cover sm:h-[380px]"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <TextAnimation
                as="h2"
                className="text-2xl font-semibold sm:text-3xl"
              >
                {ABOUT_TITLE}
              </TextAnimation>

              <TextAnimation
                as="p"
                className="text-sm text-muted-foreground sm:text-base"
                delay={0.05}
              >
                {ABOUT_SHORT}
              </TextAnimation>

              <TextAnimation
                as="p"
                className="text-pretty text-base leading-7 text-foreground/85"
                delay={0.1}
              >
                {ABOUT_PARAGRAPH}
              </TextAnimation>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                className={cn(
                  "rounded-2xl bg-yellow-500 text-black hover:bg-yellow-400 yellow-glow",
                )}
                asChild
              >
                <a href="#contact">
                  <TextAnimation as="span">تواصل معنا</TextAnimation>
                </a>
              </Button>

              <Button
                variant="outline"
                className="rounded-2xl border-black/10 bg-background/60 backdrop-blur-xl hover:bg-black/5"
                asChild
              >
                <a href="#services">
                  <TextAnimation as="span">استعرض الخدمات</TextAnimation>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
