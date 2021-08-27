import { ReactNode } from 'react'

import clsx from 'clsx'

const ALIGN = {
  no: '',
  end: ' dropdown-end',
}

const OPEN_FROM = {
  bottom: '',
  top: ' dropdown-top',
  left: ' dropdown-left',
  right: ' dropdown-right',
}

const OPEN = {
  no: '',
  hover: ' dropdown-hover',
  open: ' dropdown-open',
}

type Props = {
  title?: string
  align?: keyof typeof ALIGN
  openFrom?: keyof typeof OPEN_FROM
  open?: keyof typeof OPEN
  children: ReactNode
}

const Dropdown = ({
  title = 'Change Theme',
  align = 'no',
  openFrom = 'bottom',
  open = 'no',
  children,
}: Props): JSX.Element => {
  return (
    <div
      className={clsx(
        'dropdown',
        ALIGN[align],
        OPEN_FROM[openFrom],
        OPEN[open]
      )}
    >
      <div tabIndex={0} className="m-1 btn btn-secondary">
        {title}
      </div>
      {children}
    </div>
  )
}

export default Dropdown
