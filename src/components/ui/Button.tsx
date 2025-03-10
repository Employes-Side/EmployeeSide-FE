import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("rounded-[2px] flex justify-center items-center p-2", {
  variants: {
    intent: {
      primary: [
        "bg-blue-500",
        "border-transparent",
        "text-white",
        "text-0.69rem",
        "font-bold",
        "active:bg-blue-200",
        "hover:bg-blue-600",
        "focus:bg-blue-400",
        "disabled:bg-blue-100",
      ],
      secondary: [
        "bg-transparent",
        "text-gray-400",
        "text-xxs",
        "leading-4",
        "border",
        "font-bold",
        "border-lightgray-100",
        "active:text-gray-400",
        "hover:text-gray-600",
        "focus:text-gray-700",
        "focus:bg-lightgray-200",
        "focus:border-lightgray-300",
        "disabled:border-lightgray-100/50",
        "disabled:text-gray-400/50",
      ],
      disabled: [
        "bg-gray-400",
        "pointer-events-none",
        "opacity-50",
        "text-gray-400",
        "placeholder:text-gray-400",
      ],
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      class: "smallCase",
    },
  ],
  defaultVariants: {
    intent: "primary",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
    className,
    intent,
    ...props
  }) => (
    <button type="submit" className={button({ intent, className })} {...props} />
  );