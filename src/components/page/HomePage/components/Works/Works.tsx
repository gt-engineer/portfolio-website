import { FC } from 'react'

import { HTMLChakraProps } from '@chakra-ui/react'

import { WorksPresenter } from './WorksPresenter'

import { TwitterWorksItemType, YouTubeWorksItemType } from './type'

const TwitterData: ReadonlyArray<TwitterWorksItemType> = [
  {
    title: '酔いどれ知らず/kanaria様歌ってみた【中学生】',
    videoUrl:
      'https://video.twimg.com/ext_tw_video/1559131038634643456/pu/vid/640x360/3IaLzkdEXfqs1I0_.mp4',
    vocalAccount: 'sigurenyan_58',
    tweetLink: 'https://twitter.com/sigurenyan_58/status/1559131085405306881',
  },
  {
    title: '神っぽいな / ピノキオピー',
    videoUrl:
      'https://video.twimg.com/ext_tw_video/1553422517917732864/pu/vid/640x360/kfN4YA4PmxMVu9bD.mp4',
    vocalAccount: 'Evvvnn',
    speialThanks: {
      text: 'MIX練習用音源集',
      link: 'https://www.mixreq-site.com/practice-guideline',
    },
    tweetLink: 'https://twitter.com/_gt_engineer/status/1553424728550871040',
  },
]

const YouTubeData: ReadonlyArray<YouTubeWorksItemType> = [
  {
    videoId: '2U8WltoCStg',
    title: '中学生が恋する3秒前歌ってみた',
    channel: {
      id: 'UC4XtV5R7AVCFlDnD7rWO1Zw',
      name: 'なゆた。',
    },
    twitterId: 'yuukun38715',
  },
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

export const Works: FC<HTMLChakraProps<'div'>> = ({ ...chakraProps }) => {
  return <WorksPresenter twitterWorks={TwitterData} youtubeWorks={YouTubeData} {...chakraProps} />
}
