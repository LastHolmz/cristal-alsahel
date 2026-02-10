"use client";

import Image from "next/image";
import { TextAnimation } from "@/components/text-animation";
import { cn } from "@/lib/utils";

const TITLE = "منتجاتنا";
const INTRO =
  "نعرض لكم مجموعة من أحدث الآليات والمركبات والمعدات التي نوفرها لعملائنا الكرام";
const SUB = "منتجاتنا المتميزة";

const PRODUCTS = [
  {
    title: "حفارات",
    badge: "آليات ثقيلة",
    image: "/products/1.jpg",
  },
  { title: "سيارات متنوعة", badge: "مركبات", image: "/products/2.jpg" },
  { title: "شاحنات نقل", badge: "شاحنات", image: "/products/3.jpg" },
  {
    title: "دراجات نارية",
    badge: "دراجات",
    image: "/products/4.jpg",
  },
  {
    title: "لوادر كواشيك",
    badge: "آليات ثقيلة",
    image: "/products/5.jpg",
  },
  {
    title: "قطع غيار أصلية",
    badge: "قطع غيار",
    image: "/products/6.jpg",
  },
] as const;

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20"
    >
      <div className="mb-8 space-y-3">
        <TextAnimation as="h2" className="text-2xl font-semibold sm:text-3xl">
          {TITLE}
        </TextAnimation>

        <TextAnimation
          as="p"
          className="text-sm text-muted-foreground"
          delay={0.08}
        >
          {INTRO}
        </TextAnimation>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((p) => (
          <div
            key={p.title}
            className={cn(
              "group overflow-hidden rounded-[28px] glass",
              "transition hover:translate-y-[-2px]",
            )}
          >
            <div className="relative">
              <Image
                src={p.image}
                alt={p.title}
                width={1200}
                height={900}
                className="h-56 w-full object-cover sm:h-60"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

              <div className="absolute top-4 right-4 rounded-2xl border border-white/15 bg-black/25 px-3 py-1 text-xs text-white/90 backdrop-blur-xl">
                <TextAnimation as="span">{p.badge}</TextAnimation>
              </div>

              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <TextAnimation
                  as="div"
                  className="text-lg font-semibold text-white"
                >
                  {p.title}
                </TextAnimation>
              </div>
            </div>

            <div className="p-4">
              <TextAnimation as="div" className="text-sm text-muted-foreground">
                <span className="text-yellow-500">●</span> متاح ضمن قائمة
                التوريد والاستيراد
              </TextAnimation>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
