import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-md font-medium cursor-pointer transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-semibold md:hover:bg-blue-800 md:hover:dark:bg-blue-500",
  {
    variants: {
      variant: {
        default: `
          text-neutral-700 dark:text-neutral-200 capitalize md:hover:text-neutral-700 dark:md:hover:text-neutral-200
          shadow-sm md:hover:shadow-lg focus:shadow-lg
          bg-neutral-100 dark:bg-neutral-800
          md:hover:bg-neutral-100 dark:md:hover:bg-neutral-800
          border-2 border-transparent dark:border-transparent
          md:hover:border-blue-500 dark:md:hover:border-blue-800
          transition-all duration-500 ease-in-out
          border border-neutral-300 dark:border-neutral-700
          `,
        filled: `
          text-neutral-100
          shadow-xl md:hover:shadow-lg
          bg-blue-500 dark:bg-blue-800`,
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: `
          text-blue-800 md:hover:text-neutral-100
          dark:text-blue-500 dark:md:hover:text-neutral-100
          border-blue-800 dark:border-blue-500 border-2
          bg-transparent md:hover:bg-blue-800 dark:md:hover:bg-blue-500`,
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: `
          text-blue-800
          bg-transparent
          border-0 md:hover:text-neutral-100`,
        link: "text-primary underline-offset-4 hover:underline",
        gradient: `
          text-neutral-100
          bg-gradient-to-r
          from-blue-600 to-violet-500
          dark:from-blue-500 dark:to-violet-700
          transform md:hover:scale-105
          shadow-xl md:hover:shadow-3xl`,
        icon: `
          text-neutral-800 dark:text-neutral-100
          border-neutral-200 dark:border-neutral-800 border-2
          bg-transparent md:hover:bg-neutral-200 dark:md:hover:bg-neutral-800
          rounded-full
        `,
      },
      size: {
        default: "h-12 rounded-xl px-6 py-3",
        sm: "h-10 rounded-xl px-3 py-2",
        lg: "h-14 rounded-xl px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
