import { LucideAmphora } from "lucide-react";

export function SiteLogo() {
  return (
    <div className="flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-full bg-[#C85A32] text-white">
            <LucideAmphora className="size-6"/>
          </div>
          <div>
            <span className="font-serif text-lg font-bold text-[#2C221E] block leading-none">
              MANUALI
            </span>
            <span className="text-[8px] uppercase font-bold tracking-widest text-[#C85A32] block">
              Pernambuco
            </span>
          </div>
        </div>
  );
}