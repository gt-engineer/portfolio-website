import { FC, ReactNode } from 'react'

import { chakra } from '@chakra-ui/react'

import { GlobalHeader } from './components/GlobalHeader'

export const GlobalLayoutPresenter: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <GlobalHeader position="sticky" top="0" zIndex="600" />
    <chakra.main overflowX="hidden">{children}</chakra.main>
  </>
)
