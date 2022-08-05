import { FC } from 'react'

import { chakra, HTMLChakraProps, Heading, AspectRatio } from '@chakra-ui/react'

import { TwitterWorksItemType, YouTubeWorksItemType } from './type'

export const WorksPresenter: FC<
  {
    twitterWorks: ReadonlyArray<TwitterWorksItemType>
    youtubeWorks: ReadonlyArray<YouTubeWorksItemType>
  } & HTMLChakraProps<'section'>
> = ({ twitterWorks, youtubeWorks, ...chakraProps }) => (
  <chakra.section {...chakraProps}>
    <Heading as="h3" size="xl">
      Engineering
    </Heading>
    <chakra.section display="grid" gap="4">
      <div>T.B.D...</div>
    </chakra.section>
    <Heading as="h3" size="xl">
      Mix
    </Heading>
    <chakra.section display="grid" gap="4">
      <Heading as="h4" size="lg">
        Twitter
      </Heading>
      <chakra.section>
        <chakra.ul
          display="grid"
          gap="4"
          gridTemplateColumns={{
            sm: 'auto',
            md: 'repeat(2, auto)',
            lg: 'repeat(3, auto)',
          }}
          listStyleType="none"
        >
          {twitterWorks.map((v) => (
            <TwitterCardItem {...v} key={v.title} />
          ))}
        </chakra.ul>
      </chakra.section>
      <Heading as="h4" size="lg">
        YouTube
      </Heading>
      <chakra.section>
        <chakra.ul
          display="grid"
          gap="4"
          gridTemplateColumns={{
            sm: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          listStyleType="none"
        >
          {youtubeWorks.map((v) => (
            <YouTubeCardItem {...v} key={v.videoId} />
          ))}
        </chakra.ul>
      </chakra.section>
    </chakra.section>
  </chakra.section>
)

const TwitterCardItem: FC<TwitterWorksItemType> = ({ title, vocalAccount, speialThanks }) => (
  <chakra.li border="1px solid #e5e5e5" borderRadius="6px">
    <chakra.a
      display="grid"
      href="https://twitter.com/_gt_engineer/status/1553424728550871040"
      target="_blank"
    >
      <AspectRatio ratio={16 / 9}>
        <chakra.video
          controls
          src="https://video.twimg.com/ext_tw_video/1553422517917732864/pu/vid/640x360/kfN4YA4PmxMVu9bD.mp4"
          width="100%"
          preload="none"
          borderTopLeftRadius="6px"
          borderTopRightRadius="6px"
        />
      </AspectRatio>

      <chakra.div display="grid" gap="1" p="4" lineHeight="1.6">
        <Heading as="h5" size="md" fontWeight="bold">
          {title}
        </Heading>
        <chakra.p>
          <chakra.a
            href={`https://twitter.com/${vocalAccount}`}
            target="_blank"
            textDecoration="underline"
          >
            Vocal: @{vocalAccount}
          </chakra.a>
        </chakra.p>
        {speialThanks && (
          <chakra.p>
            <chakra.a href={speialThanks.link} target="_blank" textDecoration="underline">
              Special Thanks: {speialThanks.text}
            </chakra.a>
          </chakra.p>
        )}
      </chakra.div>
    </chakra.a>
  </chakra.li>
)

const YouTubeCardItem: FC<YouTubeWorksItemType> = ({ videoId, title, channel, twitterId }) => (
  <chakra.li border="1px solid #e5e5e5" borderRadius="6px">
    <chakra.a display="grid" href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank">
      <AspectRatio ratio={16 / 9}>
        <chakra.iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          borderTopLeftRadius="6px"
          borderTopRightRadius="6px"
        />
      </AspectRatio>
      <chakra.div display="grid" gap="1" p="4" lineHeight="1.6">
        <Heading as="h5" size="md" fontWeight="bold">
          {title}
        </Heading>
        <chakra.p>
          <chakra.a
            href={`https://www.youtube.com/channel/${channel.id}`}
            target="_blank"
            textDecoration="underline"
          >
            Channel: {channel.name}
          </chakra.a>
        </chakra.p>
        <chakra.p>
          <chakra.a
            href={`https://twitter.com/${twitterId}`}
            target="_blank"
            textDecoration="underline"
          >
            Twitter: @{twitterId}
          </chakra.a>
        </chakra.p>
      </chakra.div>
    </chakra.a>
  </chakra.li>
)
