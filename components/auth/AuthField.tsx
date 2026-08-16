import type { ComponentProps } from "react";

type AuthFieldProps = ComponentProps<"input"> & {
  label: string;
  error?: string;
};

export function AuthField({
  label,
  error,
  id,
  name,
  ...props
}: AuthFieldProps) {
  const fieldId = id ?? name;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={fieldId} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={fieldId}
        name={name}
        className="h-11 w-full rounded-xl border border-foreground/15 bg-muted px-3 outline-none transition-[border-color,box-shadow] duration-150 ease-out focus:border-foreground/40 focus:ring-2 focus:ring-foreground/10"
        {...props}
      />
      <p className="min-h-5 text-sm text-red-600">{error ?? "\u00a0"}</p>
    </div>
  );
}
