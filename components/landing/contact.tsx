"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { TextAnimation } from "@/components/text-animation";
import { cn } from "@/lib/utils";
import { IconPhone, IconPin } from "@/components/icons";
import { data } from "@/lib/data";

function toTelLibya(raw: string) {
  const digits = raw.replace(/[^\d]/g, "");
  if (digits.startsWith("0") && digits.length === 10)
    return `+218${digits.slice(1)}`;
  if (digits.startsWith("218")) return `+${digits}`;
  if (digits.startsWith("+")) return digits;
  return raw;
}

export default function ContactSection() {
  const { address, email, mapEmbedUrl, mapLink, phones } = data.contact;
  return (
    <section id="contact" className="relative py-20 ">
      <div className="shape-divider-top" />
      <div className="mx-auto textwhi bg-primary rounded-4xl container px-4 py-14 sm:px-6 sm:py-20">
        <div className=" p-5 sm:p-8">
          <div className="mb-8 space-y-3">
            <TextAnimation
              as="h2"
              className="text-2xl font-semibold sm:text-3xl"
            >
              تواصل معنا
            </TextAnimation>
            <TextAnimation
              as="p"
              className="text-sm text-muted-foreground"
              delay={0.05}
            >
              طرق التواصل وموقع الشركة
            </TextAnimation>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            {/* Info */}
            <div className="space-y-4">
              <div className=" p-5 ">
                <TextAnimation as="div" className="text-sm font-semibold">
                  أرقام الهاتف
                </TextAnimation>

                <div className="mt-4 space-y-2">
                  {phones?.map((p) => (
                    <a
                      key={p}
                      href={`tel:${toTelLibya(p)}`}
                      className={cn(
                        "flex items-center justify-between rounded-2xl px-4 py-3",
                        "border border-black/10 bg-white/50 transition hover:bg-white/70",
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <IconPhone className="h-4 w-4 text-yellow-500" />
                        <TextAnimation
                          as="span"
                          className="text-sm font-semibold"
                        >
                          {p}
                        </TextAnimation>
                      </div>
                      <TextAnimation
                        as="span"
                        className="text-xs text-muted-foreground"
                      >
                        اتصال
                      </TextAnimation>
                    </a>
                  ))}
                </div>
              </div>

              <div className=" p-5 ">
                <TextAnimation as="div" className="text-sm font-semibold">
                  البريد الإلكتروني
                </TextAnimation>

                <a
                  href={`mailto:${email}`}
                  className="mt-3 block rounded-2xl border border-black/10 bg-white/50 px-4 py-3 text-sm font-semibold transition hover:bg-white/70"
                >
                  <TextAnimation as="span">{email}</TextAnimation>
                </a>
              </div>

              <div className=" p-5 ">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <TextAnimation as="div" className="text-sm font-semibold">
                      العنوان
                    </TextAnimation>
                    <div className="flex items-start gap-3">
                      <IconPin className="mt-1 h-4 w-4 text-yellow-500" />
                      <TextAnimation
                        as="div"
                        className="text-sm text-foreground/85"
                      >
                        {address}
                      </TextAnimation>
                    </div>
                  </div>

                  <Button variant={"outline"} className="rounded-2xl" asChild>
                    <a href={mapLink} target="_blank" rel="noreferrer">
                      <TextAnimation as="span">افتح في الخرائط</TextAnimation>
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 12, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden  "
            >
              <div className="relative h-[420px] w-full">
                <iframe
                  src={mapEmbedUrl}
                  className="absolute inset-0 h-full w-full border-0 outline-none"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  aria-label="خريطة موقع الشركة"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="shape-divider-bottom" />
    </section>
  );
}
