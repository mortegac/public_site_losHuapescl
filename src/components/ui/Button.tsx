import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

interface ButtonAsButtonProps extends ButtonBaseProps {
  href?: never
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  href: string
  onClick?: never
  type?: never
  disabled?: never
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-ember text-cream border-2 border-ember hover:bg-transparent hover:text-ember',
  secondary:
    'bg-transparent text-forest border-2 border-forest hover:bg-forest hover:text-cream',
  ghost:
    'bg-transparent text-forest border-2 border-transparent hover:border-forest hover:bg-forest/10',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const baseClasses =
  'inline-flex items-center justify-center font-ui font-medium tracking-wide rounded transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer'

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled,
  className,
  children,
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
