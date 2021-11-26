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

const Alert = ({ text, color = 'no' }: Props): JSX.Element => {
  return (
    <div className={clsx('alert my-3', COLORS[color])}>
      <div className="flex-1">
        <label className="mx-auto">{text}</label>
      </div>
    </div>
  )
}

export default Alert
