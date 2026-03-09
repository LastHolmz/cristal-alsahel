"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TextAnimation } from "@/components/text-animation";
import { data } from "@/lib/data";
import Link from "next/link";

function toTelLibya(raw: string) {
  const digits = raw.replace(/[^\d]/g, "");
  if (digits.startsWith("0") && digits.length === 10)
    return `+218${digits.slice(1)}`;
  if (digits.startsWith("218")) return `+${digits}`;
  if (digits.startsWith("+")) return digits;
  return raw;
}

export default function HeroSection() {
  const {
    companyName: COMPANY_NAME,
    heroDesc: HERO_DESC,
    phone,
  } = data.commonInfo;
  const telHref = `tel:${toTelLibya(phone)}`;

  return (
    <section id="home" className="relative">
      <div className="relative h-[calc(100dvh-92px)] min-h-[620px] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* overlay black/50 فقط */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto flex h-full  items-center px-4 sm:px-6">
          <div className="mx-auto w-full max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <TextAnimation
                as="h1"
                className="text-balance text-3xl font-bold leading-tight text-white sm:text-5xl"
              >
                {COMPANY_NAME}
              </TextAnimation>

              <TextAnimation
                as="p"
                className="mx-auto max-w-2xl text-pretty text-base leading-7 text-white/85 sm:text-lg"
                delay={0.08}
              >
                {HERO_DESC}
              </TextAnimation>

              <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row">
                <Button
                  className={cn(
                    "rounded-2xl bg-blue-500 text-black hover:bg-blue-400 blue-glow",
                  )}
                  asChild
                >
                  <a href="#contact">
                    <TextAnimation as="span">اطلب عرض سعر</TextAnimation>
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className={cn(
                    "rounded-2xl border-white/20 bg-white/10 text-white backdrop-blur-xl hover:bg-white/15",
                  )}
                  asChild
                >
                  <Link href={telHref}>
                    <TextAnimation as="span">اتصل بنا</TextAnimation>
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* glow أصفر خفيف جداً */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-blue-500/10 to-transparent" />
      </div>
    </section>
  );
}
