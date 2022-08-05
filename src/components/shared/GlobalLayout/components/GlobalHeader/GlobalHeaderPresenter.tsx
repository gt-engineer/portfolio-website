import { FC, ReactNode } from 'react'

import NextLink from 'next/link'

import { HTMLChakraProps, chakra, Tabs, Tab, TabList } from '@chakra-ui/react'

export const GlobalHeaderPresenter: FC<HTMLChakraProps<'header'>> = ({ ...chakraProps }) => (
  <chakra.header
    py="12"
    px="16"
    backgroundColor="#fff"
    borderBottom="1px solid #e5e5e5"
    {...chakraProps}
  >
    <Tabs>
      <TabList gap="12" justifyContent="center">
        <TabItem idName="">TOP</TabItem>
        <Tab>SCHEDULE</Tab>
        <TabItem idName="works">WORKS</TabItem>
        <Tab>PRICE</Tab>
        <Tab>CONTACT</Tab>
      </TabList>
    </Tabs>
  </chakra.header>
)

const TabItem: FC<{ idName: string; children: ReactNode }> = ({ idName, children }) => (
  <Tab>
    <NextLink href={`#${idName}`}>{children}</NextLink>
  </Tab>
)
