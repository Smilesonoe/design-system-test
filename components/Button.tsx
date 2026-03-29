import React from "react";

type ButtonStyle = "Primary" | "Secondary" | "Outline" | "Ghost";
type ButtonSize = "SM" | "MD" | "LG";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: ButtonStyle;
  size?: ButtonSize;
}

const styleClasses: Record<ButtonStyle, string> = {
  Primary:
    "bg-[var(--color-brand-default)] text-[var(--color-brand-text)] hover:bg-[var(--color-brand-hover)] active:bg-[var(--color-brand-active)]",
  Secondary:
    "bg-[var(--color-brand-subtle)] text-[var(--color-brand-on-subtle)] hover:bg-[var(--color-brand-subtle)] active:bg-[var(--color-brand-subtle)]",
  Outline:
    "bg-transparent text-[var(--color-brand-on-subtle)] border border-[var(--color-border-default)] hover:bg-[var(--color-bg-secondary)] active:bg-[var(--color-bg-tertiary)]",
  Ghost:
    "bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] active:bg-[var(--color-bg-tertiary)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  SM: "px-3 py-1.5 text-sm gap-1.5 rounded-lg",
  MD: "px-4 py-2 text-sm gap-2 rounded-lg",
  LG: "px-6 py-2.5 text-base gap-2.5 rounded-lg",
};

export function Button({
  label = "Button",
  variant = "Primary",
  size = "MD",
  disabled,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={[
        "inline-flex items-center justify-center font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-border-focus)] focus-visible:ring-offset-2",
        "disabled:opacity-40 disabled:pointer-events-none",
        styleClasses[variant],
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label}
    </button>
  );
}
