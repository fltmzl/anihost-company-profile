"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-700 data-[state=unchecked]:bg-slate-700 relative shadow-inner shadow-slate-600",
      className
    )}
    {...props}
    ref={ref}
  >
    {/* <div className={cn("bg-green-400 absolute top-0 transition-all duration-300 data-[state=checked]:right-0 data-[state=unchecked]:left-0")}>ID</div> */}
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-[22px] w-[22px] rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0 bg-cover bg-no-repeat",
        props.checked ? "bg-slate-700 bg-[url('/images/id-flag.png')]" : "bg-slate-700 bg-[url('/images/us-flag.png')]"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
