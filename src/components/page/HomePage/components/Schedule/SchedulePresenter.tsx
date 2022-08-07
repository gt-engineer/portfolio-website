import { FC } from 'react'

import { HTMLChakraProps, chakra, Heading, Progress } from '@chakra-ui/react'

export const SchedulePresenter: FC<
  {
    scheduleList: { title: string; progress: number; status: string }[]
  } & HTMLChakraProps<'div'>
> = ({ scheduleList, ...chakraProps }) => (
  <chakra.div {...chakraProps}>
    <chakra.p maxW="500px" mx="auto" lineHeight="1.6">
      現在の依頼状況です。大体１件あたり3日ほど（本業の状況による）を見込んでいただけると助かります。
    </chakra.p>
    <chakra.ul
      display="grid"
      gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
      gap="6"
      mt="12"
      listStyleType="none"
    >
      {scheduleList.map((v) => (
        <chakra.li
          key={v.title}
          p="4"
          backgroundColor="#fff"
          border="1px solid #e5e5e5"
          borderRadius="6px"
        >
          <Heading as="h3" size="md">
            {v.title}
          </Heading>
          <chakra.div mt="4">
            進捗状況: {v.status}
            <Progress value={v.progress} mt="2" borderRadius="3px" />
          </chakra.div>
        </chakra.li>
      ))}
    </chakra.ul>
  </chakra.div>
)
