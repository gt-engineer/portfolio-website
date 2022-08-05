import { FC } from 'react'

import { chakra, Heading } from '@chakra-ui/react'

import { Works } from './components'

export const HomePagePresenter: FC = () => (
  <chakra.div display="grid" gap="8" py="8">
    <Heading as="h1" size="3xl" lineHeight="1.35" textAlign="center">
      ぽげちゃん STUDIO
    </Heading>
    <chakra.p>ぽげちゃんのホームページです</chakra.p>
    <Heading as="h2" size="2xl" id="works">
      SCHEDULE
    </Heading>
    {/* SCHEDULE */}
    <div>T.B.D...</div>
    <Heading as="h2" size="2xl" id="works">
      Works
    </Heading>
    {/* Works > Engineering / Mix */}
    <Works display="grid" gap="6" />
    <Heading as="h2" size="2xl" id="works">
      PRICE
    </Heading>
    <div>T.B.D...</div>
    <Heading as="h2" size="2xl" id="works">
      CONTACT
    </Heading>
    <div>T.B.D...</div>
  </chakra.div>
)
