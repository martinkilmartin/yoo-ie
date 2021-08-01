import clsx from 'clsx'

const SIZES = {
  no: '',
  lg: ' btn-lg',
  md: ' btn-md',
  sm: ' btn-sm',
  xs: ' btn-xs',
}

const SHAPES = {
  no: '',
  wide: ' btn-wide',
  block: ' btn-block',
  circle: ' btn-circle',
  square: ' btn-square',
}

const COLORS = {
  no: '',
  primary: ' btn-primary',
  secondary: ' btn-secondary',
  accent: ' btn-accent',
  info: ' btn-info',
  success: ' btn-success',
  warning: ' btn-warning',
  error: ' btn-error',
}

const EFFECTS = {
  no: '',
  ghost: ' ghost',
  link: ' link',
  outline: ' outline',
}

const STATUS = {
  no: '',
  active: ' active',
  disabled: ' disabled',
}

const GLASS = {
  no: '',
  glass: ' glass',
}

const LOADING = {
  no: '',
  loading: ' loading',
}

const ANIMATION = {
  no: ' no-animation',
  yes: '',
}

type Props = {
  text: string
  size?: keyof typeof SIZES
  shape?: keyof typeof SHAPES
  color?: keyof typeof COLORS
  effect?: keyof typeof EFFECTS
  status?: keyof typeof STATUS
  glass?: keyof typeof GLASS
  loading?: keyof typeof LOADING
  animation?: keyof typeof ANIMATION
}

const Button = ({
  text,
  size = 'no',
  shape = 'no',
  color = 'no',
  effect = 'no',
  status = 'no',
  glass = 'no',
  loading = 'no',
  animation = 'yes',
}: Props): JSX.Element => {
  return (
    <button
      className={clsx(
        'btn',
        SIZES[size],
        SHAPES[shape],
        COLORS[color],
        EFFECTS[effect],
        STATUS[status],
        GLASS[glass],
        LOADING[loading],
        ANIMATION[animation]
      )}
    >
      {text}
    </button>
  )
}

export default Button
