import { InputHTMLAttributes, ReactNode } from "react"

type AuthInputProps = {
  icon: ReactNode;
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function AuthInput({ icon, label, id, ...props }: AuthInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-emeraude">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-emeraude">
          {icon}
        </span>
        <input
          {...props}
          id={id}
          className="w-full rounded-btn border border-emeraude/40 bg-emeraude-50 py-3 pl-11 pr-4 text-sm outline-none focus:border-emeraude"
        />
      </div>
    </div>
  )
}