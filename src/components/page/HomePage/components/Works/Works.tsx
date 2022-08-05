import { FC } from 'react'

import { HTMLChakraProps } from '@chakra-ui/react'

import { WorksPresenter } from './WorksPresenter'

import { TwitterWorksItemType, YouTubeWorksItemType } from './type'

const TwitterData: ReadonlyArray<TwitterWorksItemType> = [
  {
    title: '神っぽいな / ピノキオピー',
    vocalAccount: 'Evvvnn',
    speialThanks: {
      text: 'MIX練習用音源集',
      link: 'https://www.mixreq-site.com/practice-guideline',
    },
  },
]

const YouTubeData: ReadonlyArray<YouTubeWorksItemType> = [
  {
    videoId: 'AjcgvIdFBaE',
    title: 'ロウワー/Flower 雨宮シロ【歌ってみた】',
    channel: {
      id: 'UCeWv21OGXkstzsJzhdICh4A',
      name: '雨宮 シロ Shiro Amamiya',
    },
    twitterId: 'Shiro_amamiyan',
  },
  {
    videoId: 'QKo2T0aXi6I',
    title: '中学生がアンチモラルスパイラル歌ってみた。',
    channel: {
      id: 'UC4XtV5R7AVCFlDnD7rWO1Zw',
      name: 'なゆた。',
    },
    twitterId: 'yuukun38715',
  },
]

export const Works: FC<HTMLChakraProps<'section'>> = ({ ...chakraProps }) => {
  return <WorksPresenter twitterWorks={TwitterData} youtubeWorks={YouTubeData} {...chakraProps} />
}
