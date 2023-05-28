import { FC, PropsWithChildren } from 'react'
import * as RadixTabs from '@radix-ui/react-tabs'

type Props = PropsWithChildren<{
  options: {
    label: string
    value: any
  }[]
  value: any
  defaultValue?: any
  onChange: (value: any) => void
}>

const Tabs: FC<Props> = props => {
  return (
    <RadixTabs.Root defaultValue={props.defaultValue} onValueChange={props.onChange}>
      <RadixTabs.List className="flex border-b border-gray-200">
        {props.options.map(option => (
          <RadixTabs.Trigger
            key={option.value}
            value={option.value}
            className="px-4 py-2 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50 data-[state=active]:bg-gray-100"
          >
            {option.label}
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>
      {props.children}
    </RadixTabs.Root>
  )
}

const Content: FC<PropsWithChildren<{ value: any }>> = props => (
  <RadixTabs.Content value={props.value} className="mt-4">{props.children}</RadixTabs.Content>
)

export { Content }
export default Tabs
