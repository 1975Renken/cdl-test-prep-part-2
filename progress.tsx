// src/components/ui/progress.tsx
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "../../lib/utils"

interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value?: number
  color?: "default" | "blue" | "green" | "red"
  size?: "sm" | "md" | "lg"
  showValue?: boolean
  indicatorClassName?: string
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ 
  className, 
  value, 
  color = "default",
  size = "md",
  showValue = false,
  indicatorClassName,
  ...props 
}, ref) => {
  // Size variations
  const sizeClasses = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4"
  }

  // Color variations
  const colorClasses = {
    default: "bg-primary",
    blue: "bg-blue-600",
    green: "bg-green-600",
    red: "bg-red-600"
  }

  return (
    <div className="relative">
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden rounded-full bg-primary/10",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(
            "h-full w-full flex-1 transition-all",
            colorClasses[color],
            indicatorClassName
          )}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
      {showValue && (
        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-medium">
          {value}%
        </span>
      )}
    </div>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }