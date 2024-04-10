// react-chrono-client.ts
'use client'

import type { Chrono as ChronoType } from 'react-chrono'
import dynamic from 'next/dynamic'

export const Chrono = dynamic(
  () => import('react-chrono').then((lib) => lib.Chrono),
  {
    ssr: false,
  }
) as typeof ChronoType
