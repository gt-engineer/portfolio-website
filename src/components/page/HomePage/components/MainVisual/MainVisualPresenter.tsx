import { FC } from 'react'
import NextImage from 'next/image'
import { chakra, Heading, AspectRatio, HTMLChakraProps } from '@chakra-ui/react'

import MainVisual from '@/assets/main-visual.jpg'
import MainVisualSub1 from '@/assets/main-visual-sub1.jpg'
import MainVisualSub2 from '@/assets/main-visual-sub2.jpg'

export const MainVisualPrenseter: FC<HTMLChakraProps<'section'>> = () => (
  <chakra.div position="relative" height="calc(100vh - 49px)" pt="20">
    <chakra.div position="relative" zIndex="100" ml={{ base: '8', md: '32' }}>
      <Heading as="h1" size="3xl" display="inline-block" lineHeight="1.35" borderRadius="3px">
        ぽげラボ
      </Heading>
      <chakra.p>Webエンジニア / MIXする人のHP</chakra.p>
    </chakra.div>
    <chakra.div
      position="relative"
      height="60%"
      mt="20"
      ml={{ base: '16', md: '40' }}
      sx={{
        img: {
          borderTopLeftRadius: '20px',
          borderBottomLeftRadius: '20px',
        },
      }}
    >
      <NextImage src={MainVisual.src} alt="" objectFit="cover" layout="fill" loading="eager" />
    </chakra.div>
    <chakra.div
      position="absolute"
      left={{ base: '4', md: '20' }}
      bottom="8"
      sx={{
        img: {
          borderRadius: '50%',
          opacity: '0.8',
        },
      }}
    >
      <NextImage
        src={MainVisualSub1.src}
        alt=""
        height="150px"
        width="150px"
        objectFit="cover"
        layout="fixed"
        loading="lazy"
      />
    </chakra.div>
    <chakra.div
      position="absolute"
      top="8"
      right="4"
      sx={{
        img: {
          borderRadius: '50%',
          opacity: '0.8',
        },
      }}
    >
      <NextImage
        src={MainVisualSub2.src}
        alt=""
        height="150px"
        width="150px"
        objectFit="cover"
        layout="fixed"
        loading="lazy"
      />
    </chakra.div>
    <chakra.div
      position="absolute"
      top="0"
      zIndex="-1"
      width="260%"
      height="50%"
      backgroundColor="orange.100"
      transform="rotate(45deg)"
    />
    <chakra.div
      position="absolute"
      bottom="0"
      zIndex="-1"
      width="260%"
      height="50%"
      backgroundColor="orange.100"
      transform="rotate(-45deg)"
    />
  </chakra.div>
)
