import { PropsWithChildren } from 'react'

export default function PageTitle(props: PropsWithChildren) {
  return <h1 className="text-4xl font-black mb-6 max-lg:text-2xl">{props.children}</h1>
}

export const SubTitle = (props: PropsWithChildren) => <h2 className="text-2xl font-bold mb-6 max-md:text-lg">{props.children}</h2>
