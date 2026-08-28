import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SiteContainer({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto max-w-[1300px] px-10", className)}>
      {children}
    </div>
  );
}
