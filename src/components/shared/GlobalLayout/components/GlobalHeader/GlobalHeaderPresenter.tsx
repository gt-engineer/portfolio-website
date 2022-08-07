import { ComponentProps, FC, ReactNode } from 'react'

import NextLink from 'next/link'

import { HTMLChakraProps, chakra, Tabs, Tab, TabList } from '@chakra-ui/react'

export const GlobalHeaderPresenter: FC<HTMLChakraProps<'header'>> = ({ ...chakraProps }) => {
  return (
    <chakra.header
      py="12"
      px="16"
      backgroundColor="#fff"
      borderBottom="1px solid #e5e5e5"
      {...chakraProps}
    >
      <Tabs>
        <TabList gap="16" justifyContent="center">
          <TabItem idName="">TOP</TabItem>
          <TabItem idName="schedule">SCHEDULE</TabItem>
          <TabItem idName="works">WORKS</TabItem>
          <TabItem idName="price">PRICE</TabItem>
          <TabItem idName="contact">CONTACT</TabItem>
        </TabList>
      </Tabs>
    </chakra.header>
  )
}

const TabItem: FC<{ idName: string; children: ReactNode } & ComponentProps<typeof Tab>> = ({
  idName,
  children,
  ...tabProps
}) => (
  <Tab {...tabProps}>
    <NextLink href={`#${idName}`}>{children}</NextLink>
  </Tab>
)
