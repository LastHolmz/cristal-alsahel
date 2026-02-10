"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { TextAnimation } from "@/components/text-animation";
import { IconMenu, IconPhone } from "@/components/icons";
import Image from "next/image";
import { data } from "@/lib/data";

const NAV = [
  { id: "home", label: "الرئيسية" },
  { id: "about", label: "حولنا" },
  { id: "services", label: "خدماتنا" },
  { id: "products", label: "منتجاتنا" },
  { id: "contact", label: "تواصل" },
  { id: "legal", label: "قانوني" },
] as const;

function toTelLibya(raw: string) {
  const digits = raw.replace(/[^\d]/g, "");
  if (digits.startsWith("0") && digits.length === 10)
    return `+218${digits.slice(1)}`;
  if (digits.startsWith("218")) return `+${digits}`;
  if (digits.startsWith("+")) return digits;
  return raw;
}

export default function LandingHeader() {
  const { companyName, tagline, phone } = data.header;
  const [open, setOpen] = React.useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const primaryPhone = phone;
  const telHref = `tel:${toTelLibya(primaryPhone)}`;

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto ">
        <div className="mt-3 bg-white">
          <div className="grid grid-cols-2 items-center gap-3 px-4 py-3 sm:grid-cols-3">
            {/* Start: NAV (desktop) */}
            <nav className="hidden items-center gap-2 sm:flex">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="rounded-2xl px-3 py-2 text-sm text-foreground/80 transition hover:bg-black/5 hover:text-foreground"
                >
                  <TextAnimation as="span">{item.label}</TextAnimation>
                </button>
              ))}
            </nav>

            {/* Middle: brand block */}

            <div className="flex items-center justify-start gap-3 sm:justify-center">
              {/* Logo */}
              <div className="relative h-14 w-14 z-50 sm:h-16 sm:w-16">
                <Image
                  src="/logo.png"
                  alt={tagline}
                  width={1000}
                  height={1000}
                  priority
                  className="object-cover h-full w-full"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col  leading-tight">
                <TextAnimation as="div" className="text-lg font-semibold">
                  {tagline}
                </TextAnimation>
                <TextAnimation
                  as="div"
                  className="text-xs max-md:hidden text-muted-foreground line-clamp-1"
                >
                  {companyName}
                </TextAnimation>
              </div>
            </div>

            {/* End: actions + mobile menu */}
            <div className="flex items-center justify-end gap-2">
              <div className="hidden items-center gap-2 sm:flex">
                <Button
                  variant="outline"
                  className={cn(
                    "rounded-2xl border-black/10 bg-background/50 backdrop-blur-xl",
                    "hover:bg-black/5",
                  )}
                  onClick={() => scrollTo("contact")}
                >
                  <TextAnimation as="span">تواصل</TextAnimation>
                </Button>

                <Button
                  className={cn(
                    "rounded-2xl bg-yellow-500 text-black hover:bg-yellow-400 yellow-glow",
                  )}
                  asChild
                >
                  <a href={telHref}>
                    <IconPhone className="ms-2 h-4 w-4 text-black" />
                    <TextAnimation as="span">اتصل الآن</TextAnimation>
                  </a>
                </Button>
              </div>

              {/* Mobile menu */}
              <div dir="ltr" className="sm:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      className="rounded-2xl border-black/10 bg-background/60 backdrop-blur-xl"
                      aria-label="القائمة"
                    >
                      <IconMenu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>

                  <SheetContent
                    side="left"
                    className="w-full px-4 max-w-sm border-black/10 bg-background/70 backdrop-blur-2xl"
                  >
                    <SheetHeader className="text-right">
                      <SheetTitle className="text-base">
                        <TextAnimation as="span">{tagline}</TextAnimation>
                      </SheetTitle>
                    </SheetHeader>

                    <div className="mt-6 space-y-3">
                      {NAV.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            scrollTo(item.id);
                            setOpen(false);
                          }}
                          className="w-full rounded-2xl px-4 py-3 text-right text-sm text-foreground/90 transition hover:bg-black/5"
                        >
                          <TextAnimation as="span">{item.label}</TextAnimation>
                        </button>
                      ))}
                    </div>

                    <Separator className="my-6 bg-black/10" />

                    <div className="flex gap-2">
                      <Button
                        className="w-full rounded-2xl bg-yellow-500 text-black hover:bg-yellow-400"
                        onClick={() => {
                          scrollTo("contact");
                          setOpen(false);
                        }}
                      >
                        <TextAnimation as="span">اطلب تواصل</TextAnimation>
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full rounded-2xl border-black/10 bg-background/60"
                        asChild
                      >
                        <a href={telHref}>
                          <TextAnimation as="span">اتصال</TextAnimation>
                        </a>
                      </Button>
                    </div>

                    <div className="mt-6 text-xs text-muted-foreground">
                      <TextAnimation as="span">{companyName}</TextAnimation>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
