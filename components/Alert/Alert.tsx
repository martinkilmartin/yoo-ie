import clsx from 'clsx'

const COLORS = {
  no: '',
  info: ' alert-info',
  success: ' alert-success',
  warning: ' alert-warning',
  error: ' alert-error',
}

type Props = {
  text: string
  color?: keyof typeof COLORS
}

const Alert = ({
  text,
  color = 'no',
}: Props): JSX.Element => {
  return (
    <div
      className={clsx(
        'alert',
        COLORS[color]
      )}
    >
      <div class="flex-1">
        <label class="mx-3">
          {text}
        </label>
      </div>
    </div>
  )
}

export default Alert
