import { cn } from '@/lib/utils'

type BadgeVariant = 'program' | 'season' | 'highlight'

interface BadgeProps {
  variant?: BadgeVariant
  className?: string
  children: React.ReactNode
}

const variantClasses: Record<BadgeVariant, string> = {
  program:
    'bg-forest/10 text-forest border border-forest/20',
  season:
    'bg-gold/15 text-dark border border-gold/30',
  highlight:
    'bg-ember text-cream border border-ember',
}

export function Badge({ variant = 'program', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-ui font-medium text-xs tracking-widest uppercase px-3 py-1 rounded-full',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
