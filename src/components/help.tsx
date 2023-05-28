import { FC, PropsWithChildren } from 'react'

const Help: FC<PropsWithChildren> = props => (
  <p className="font-sans px-4 py-5 bg-gray-100 rounded-lg text-black mb-6 max-w-2xl">{props.children}</p>
)

export default Help
