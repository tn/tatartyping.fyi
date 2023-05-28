'use client'

import { ChangeEvent, FC, PropsWithChildren, useMemo, useState } from 'react'
import { getSymbolFromStringOrArray, isUpperCase } from '../../utils/strings'

type Props = PropsWithChildren<{
  mapping: Record<string, string>
  placeholders: [string, string]
}>

const Converter: FC<Props> = props => {
  const { placeholders, mapping } = props
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const reversedMapping = useMemo(() => Object.fromEntries(Object.entries(mapping).map(([key, value]) => [value, key])), [mapping])

  const handleChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)

    const output = e.target.value
      .split('')
      .map(letter => {
        const latinLetter = mapping[letter?.toLowerCase()]
        const latin = isUpperCase(letter) ? getSymbolFromStringOrArray(latinLetter, 0)?.toUpperCase() : getSymbolFromStringOrArray(mapping[letter], 0)

        return latin ?? (/ь|ъ/i.test(letter) ? '' : letter)
      })
      .join('')

    setOutput(output)
  }

  const handleChangeOutput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setOutput(e.target.value)

    const input = e.target.value
      .split('')
      .map(letter => {
        const isUpper = isUpperCase(letter)
        const cyrillic = isUpper ? reversedMapping[letter?.toLowerCase()]?.toUpperCase() : reversedMapping[letter]

        return cyrillic ?? letter
      })
      .join('')

    setInput(input)
  }

  return (
    <div>
      <div className="flex max-sm:flex-col">
        <textarea
          onChange={handleChangeInput}
          value={input}
          placeholder={placeholders[0]}
          className="w-full h-96 max-sm:h-36 max-sm:mb-4 max-sm:rounded-md max-sm:border border resize-none px-4 py-6 text-base border-r-0 outline-none rounded-xl rounded-se-none rounded-ee-none"
        />
        <textarea
          onChange={handleChangeOutput}
          value={output}
          placeholder={placeholders[1]}
          className="w-full h-96 max-sm:h-36 max-sm:rounded-md max-sm:border border resize-none px-4 py-6 text-base outline-none rounded-xl rounded-ss-none rounded-es-none"
        />
      </div>
    </div>
  )
}

export default Converter
