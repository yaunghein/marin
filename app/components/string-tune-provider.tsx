'use client'

import StringTune, { StringSplit } from '@fiddle-digital/string-tune'
import { ReactNode, useEffect } from 'react'

type StringTuneProviderProps = {
  children: ReactNode
}

export default function StringTuneProvider({
  children,
}: StringTuneProviderProps) {
  useEffect(() => {
    const stringTune = StringTune.getInstance()

    stringTune.use(StringSplit)
    stringTune.scrollDesktopMode = 'default'
    stringTune.scrollMobileMode = 'default'
    stringTune.domBatcherEnabled = true
    stringTune.start(60)

    return () => {
      stringTune.destroy()
    }
  }, [])

  return children
}
