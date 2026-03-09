"use client";

import * as React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { TextAnimation } from "@/components/text-animation";
import { cn } from "@/lib/utils";
import { IconArrowLeft, IconCopy } from "@/components/icons";
import { data } from "@/lib/data";

type LegalItem = {
  no: string;
  label: string;
  value: string;
  note?: string;
};

export default function LegalSection() {
  const legal: LegalItem[] = data.legal;
  const [active, setActive] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<LegalItem | null>(null);

  const openDrawer = (item: LegalItem) => {
    setSelected(item);
    setOpen(true);
  };

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // no-op (clipboard may be blocked)
    }
  };

  return (
    <section id="legal" className="mx-auto bg-accent py-14 sm:px-6 sm:py-20">
      <div className=" p-5 sm:p-8">
        <div className="mb-8 space-y-3">
          <TextAnimation as="h2" className="text-2xl font-semibold sm:text-3xl">
            البيانات القانونية
          </TextAnimation>
          <TextAnimation
            as="p"
            className="text-sm text-muted-foreground"
            delay={0.05}
          >
            معلومات الشركة الرسمية
          </TextAnimation>
        </div>

        <div className="space-y-2">
          {legal?.map((item, idx) => {
            const isActive = idx === active;
            return (
              <button
                key={item.no}
                onMouseEnter={() => setActive(idx)}
                onFocus={() => setActive(idx)}
                onClick={() => openDrawer(item)}
                className={cn(
                  "group w-full rounded-[24px] text-right transition",
                  "border border-black/10 bg-background/55 backdrop-blur-xl",
                  "hover:bg-background/70",
                  isActive && "ring-1 ring-blue-500/35 blue-glow",
                )}
              >
                <div className="flex items-center justify-between gap-4 p-4 sm:p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-black/10 bg-white/60 px-3 py-1 text-xs font-semibold">
                      <TextAnimation as="span">{item.no}</TextAnimation>
                    </div>

                    <div className="space-y-1">
                      <TextAnimation
                        as="div"
                        className="text-base font-semibold"
                      >
                        {item.label}
                      </TextAnimation>
                      <TextAnimation
                        as="div"
                        className="text-sm text-muted-foreground"
                        delay={0.03}
                      >
                        {item.value}
                      </TextAnimation>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <span className="hidden sm:inline">
                      <TextAnimation as="span">تفاصيل</TextAnimation>
                    </span>
                    <IconArrowLeft className="h-4 w-4 text-blue-500 transition group-hover:translate-x-0.5" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent className="border-black/10 bg-background/80 backdrop-blur-2xl">
            <div className="mx-auto w-full max-w-3xl px-4 pb-10 pt-4 sm:px-6">
              <DrawerHeader className="text-right px-0">
                <DrawerTitle className="text-xl sm:text-2xl">
                  {selected ? (
                    <span className="inline-flex items-center gap-3">
                      <span className="rounded-2xl border border-black/10 bg-white/60 px-3 py-1 text-xs font-semibold">
                        <TextAnimation as="span">{selected.no}</TextAnimation>
                      </span>
                      <TextAnimation as="span">{selected.label}</TextAnimation>
                    </span>
                  ) : null}
                </DrawerTitle>
              </DrawerHeader>

              {selected ? (
                <div className="mt-4 space-y-5">
                  <div className="rounded-[28px] border border-black/10 bg-background/60 p-5 backdrop-blur-xl">
                    <TextAnimation
                      as="div"
                      className="text-sm text-muted-foreground"
                    >
                      القيمة
                    </TextAnimation>
                    <TextAnimation
                      as="div"
                      className="mt-2 text-xl font-semibold"
                    >
                      {selected.value}
                    </TextAnimation>
                  </div>

                  <Button
                    className="w-full rounded-2xl bg-blue-500 text-black hover:bg-blue-400 blue-glow"
                    onClick={() => copy(selected.value)}
                  >
                    <IconCopy className="ms-2 h-4 w-4 text-black" />
                    <TextAnimation as="span">نسخ</TextAnimation>
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
