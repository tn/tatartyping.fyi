'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Tabs, { Content } from './tabs'
import Button from './button'
import { convertSymbols, getSymbolFromStringOrArray, hightlightSymbol } from '../../utils/strings'

type Props = {
  mapping: [string, string | string[]][]
  examples: string[]
}

const Trainer: React.FC<Props> = ({ mapping, examples }) => {
  const [step, setStep] = useState(0)

  /**
   * Converts cyrillic to latin.
   */
  const convert = useCallback((text: string, ) => {
    const [cyrillic, latin] = mapping[step]
    const symbol = getSymbolFromStringOrArray(latin, 0)

    return convertSymbols(text, cyrillic, symbol)
  }, [mapping, step])

  const [example, setExample] = useState(0)
  const [history, setHistory] = useState<string[]>([])
  const totalSteps = mapping.length
  const examplesOptions = useMemo(() => examples.map((_, index) => ({ label: `#${index + 1}`, value: index })), [examples])

  const handleChangeExample = useCallback((example: number) => {
    setExample(example)
  }, [setExample])

  /**
   * Highlights current latin symbol in HTML.
   */
  const highlight = useCallback((text: string) => {
    const [, latin] = mapping.at(step) ?? []
    const symbol = getSymbolFromStringOrArray(latin ?? '', 0)

    return hightlightSymbol(text, symbol)
  }, [mapping, step])

  /**
   * Reset step when example changes.
   */
  useEffect(() => {
    setHistory([convert(examples[example])])
    setStep(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [example])

  useEffect(() => {
    if (step < history.length) {
      return
    }

    if (step === 0) {
      setHistory([convert(examples[example])])

      return
    }

    const currentHistory = history.at(step - 1) ?? ''
    const converted = convert(currentHistory)

    setHistory([...history, converted])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, example, convert])

  return (
    <div>
      <Tabs value={example} defaultValue={0} onChange={handleChangeExample} options={examplesOptions}>
        {examples.map((example, index) => (
          <Content key={index} value={index}>{example}</Content>
        ))}
      </Tabs>
      <div className="mt-8 flex items-center">
        <Button
          className="mr-3"
          onClick={() => setStep(step - 1)}
          disabled={step === 0}
        >
          ←
        </Button>
        <Button
          onClick={() => setStep(step + 1)}
          disabled={step === totalSteps - 1}
        >
          →
        </Button>
        <div className="text-lg ml-4 font-bold py-2">
          {mapping[step][0]} → {mapping[step][1]}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-lg" dangerouslySetInnerHTML={{ __html: highlight(history[step] ?? '') }} />
      </div>
    </div>
  )
}

export default Trainer