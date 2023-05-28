import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

const Button: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> = ({ className, children, ...rest }) => (
  <button {...rest} className={`px-4 py-2 bg-gray-100 mr-3 rounded-md hover:bg-gray-200 focus:outline-none flex items-center ${className}`}>
    {children}
  </button>
)

export default Button
