import { FC, ReactNode } from 'react'

import { chakra } from '@chakra-ui/react'

import { GlobalHeader } from './components/GlobalHeader'

export const GlobalLayoutPresenter: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <GlobalHeader position="sticky" top="0" zIndex="600" />
    <chakra.main maxW="810px" mx="auto" py="20" px="16" overflowX="hidden">
      {children}
    </chakra.main>
  </>
)
