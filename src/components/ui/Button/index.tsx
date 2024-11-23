import * as React from 'react'
import { VariantProps } from 'class-variance-authority'
import { buttonVariants } from './variants'

import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  loading?: boolean
  loaderOnly?: boolean
  icon?: React.ReactNode
  children?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, loading, loaderOnly, icon, colour, disabled, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ colour, className }))} ref={ref} disabled={loading || disabled} {...props}>
        {loading ? (
          <div
            className="loader border-[3px] border-y-[3px] rounded-full
        w-6 h-6 animate-spin"
          ></div>
        ) : (
          icon
        )}
        {(!loading || (loading && !loaderOnly)) && children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button }
