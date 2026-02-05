import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-none font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

        const variants = {
            primary: "bg-[#715e4c] text-white hover:bg-[#715e4c]/90", // Earthy brown/lilac tone from template (inferred)
            secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-accent hover:text-accent-foreground",
        }

        const sizes = {
            sm: "h-9 px-3",
            md: "h-12 px-8 py-3",
            lg: "h-14 px-10 text-lg",
        }

        const compClassName = cn(
            baseStyles,
            variants[variant],
            sizes[size],
            className
        )

        return (
            <button
                className={compClassName}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
