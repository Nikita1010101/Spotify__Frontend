import type { FunctionalComponent, SVGAttributes } from 'vue'

interface SVGProps extends Partial<SVGAttributes> {
  size?: 24 | number
  strokeWidth?: number | string
  absoluteStrokeWidth?: boolean
}

export type LucideIcon = FunctionalComponent<SVGProps>

export type TSidebarLink = {
  title: string
  path: string
  icon: LucideIcon
}
