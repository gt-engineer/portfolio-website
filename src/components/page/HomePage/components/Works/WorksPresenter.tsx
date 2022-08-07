import { FC } from 'react'

import { chakra, HTMLChakraProps, Heading, AspectRatio, Divider } from '@chakra-ui/react'

import { TwitterWorksItemType, YouTubeWorksItemType } from './type'

export const WorksPresenter: FC<
  {
    twitterWorks: ReadonlyArray<TwitterWorksItemType>
    youtubeWorks: ReadonlyArray<YouTubeWorksItemType>
  } & HTMLChakraProps<'div'>
> = ({ twitterWorks, youtubeWorks, ...chakraProps }) => (
  <chakra.div {...chakraProps} textAlign="center">
    <Divider />
    <Heading
      as="h3"
      size="xl"
      display="inline-block"
      mt="12"
      px="8"
      pb="4"
      borderBottom="4px solid"
      borderBottomColor="cyan.500"
    >
      Engineering
    </Heading>
    <chakra.section display="grid" gap="4" mt="8">
      <chakra.p maxW="500px" mx="auto" textAlign="left" lineHeight="1.6">
        稼働実績はありますがこちらの名義では公開しておりませんので実績を確認したい場合はご連絡をお願いします。
        <br />
        こちらのサイトは React / Next.js / Chakra-ui / urql / GraphQL(Github API) / netlify
        で作成されています。
      </chakra.p>
    </chakra.section>
    <Divider mt="12" />

    <Heading
      as="h3"
      size="xl"
      display="inline-block"
      mt="12"
      px="8"
      pb="4"
      borderBottom="4px solid"
      borderBottomColor="cyan.500"
    >
      Mix
    </Heading>
    <chakra.section mt="12">
      <Heading
        as="h4"
        size="lg"
        display="inline-block"
        pb="4"
        borderBottom="2px solid"
        borderColor="cyan.200"
      >
        Twitter
      </Heading>
      <chakra.section mt="12">
        <chakra.ul display="grid" gap="6" gridTemplateColumns="1fr" listStyleType="none">
          {twitterWorks.map((v) => (
            <TwitterCardItem {...v} key={v.title} />
          ))}
        </chakra.ul>
      </chakra.section>
      <Divider mt="12" />
      <Heading
        as="h4"
        size="lg"
        mt="12"
        display="inline-block"
        pb="4"
        borderBottom="2px solid"
        borderColor="cyan.200"
      >
        YouTube
      </Heading>
      <chakra.section mt="12">
        <chakra.ul display="grid" gap="8" gridTemplateColumns="1fr" listStyleType="none">
          {youtubeWorks.map((v) => (
            <YouTubeCardItem {...v} key={v.videoId} />
          ))}
        </chakra.ul>
      </chakra.section>
    </chakra.section>
  </chakra.div>
)

const TwitterCardItem: FC<TwitterWorksItemType> = ({
  title,
  videoUrl,
  vocalAccount,
  speialThanks,
}) => (
  <chakra.li
    display="grid"
    gridTemplateColumns={{ md: '500px 1fr' }}
    w="100%"
    border="1px solid #e5e5e5"
    borderRadius="6px"
  >
    <AspectRatio
      ratio={16 / 9}
      borderTopLeftRadius="6px"
      borderTopRightRadius={{ base: '6px', sm: '0' }}
      borderBottomLeftRadius={{ base: '0', sm: '6px' }}
    >
      <chakra.video
        controls
        src={videoUrl}
        width="100%"
        preload="none"
        borderTopLeftRadius="6px"
        borderTopRightRadius={{ base: '6px', sm: '0' }}
        borderBottomLeftRadius={{ base: '0', sm: '6px' }}
      />
    </AspectRatio>

    <chakra.div display="grid" gap="1" alignItems="center" p="4" lineHeight="1.6">
      <Heading
        as="a"
        size="md"
        fontWeight="bold"
        href="https://twitter.com/_gt_engineer/status/1553424728550871040"
        target="_blank"
        _hover={{
          textDecoration: 'underline',
        }}
        _active={{
          textDecoration: 'underline',
          opacity: 0.3,
        }}
      >
        {title}
      </Heading>
      <chakra.a
        href={`https://twitter.com/${vocalAccount}`}
        target="_blank"
        _hover={{
          textDecoration: 'underline',
        }}
        _active={{
          textDecoration: 'underline',
          opacity: 0.3,
        }}
      >
        Vocal: @{vocalAccount}
      </chakra.a>
      {speialThanks && (
        <chakra.a
          href={speialThanks.link}
          target="_blank"
          _hover={{
            textDecoration: 'underline',
          }}
          _active={{
            textDecoration: 'underline',
            opacity: 0.3,
          }}
        >
          Special Thanks: {speialThanks.text}
        </chakra.a>
      )}
    </chakra.div>
  </chakra.li>
)

const YouTubeCardItem: FC<YouTubeWorksItemType> = ({ videoId, title, channel, twitterId }) => (
  <chakra.li
    display="grid"
    gridTemplateColumns={{ md: '500px 1fr' }}
    border="1px solid #e5e5e5"
    borderRadius="6px"
  >
    <AspectRatio
      ratio={16 / 9}
      borderTopLeftRadius="6px"
      borderTopRightRadius={{ base: '6px', md: '0' }}
      borderBottomLeftRadius={{ base: '0', md: '6px' }}
    >
      <chakra.iframe
        width="100%"
        height="100%"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        borderTopLeftRadius="6px"
        borderTopRightRadius={{ base: '6px', md: '0' }}
        borderBottomLeftRadius={{ base: '0', md: '6px' }}
      />
    </AspectRatio>
    <chakra.div display="grid" gap="1" alignItems="center" p="4" lineHeight="1.6">
      <Heading
        as="a"
        size="md"
        fontWeight="bold"
        _hover={{
          textDecoration: 'underline',
        }}
        _active={{
          textDecoration: 'underline',
          opacity: 0.3,
        }}
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
      >
        {title}
      </Heading>
      <chakra.a
        _hover={{
          textDecoration: 'underline',
        }}
        _active={{
          textDecoration: 'underline',
          opacity: 0.3,
        }}
        href={`https://www.youtube.com/channel/${channel.id}`}
        target="_blank"
      >
        Channel: {channel.name}
      </chakra.a>
      <chakra.a
        _hover={{
          textDecoration: 'underline',
        }}
        _active={{
          textDecoration: 'underline',
          opacity: 0.3,
        }}
        href={`https://twitter.com/${twitterId}`}
        target="_blank"
      >
        Twitter: @{twitterId}
      </chakra.a>
    </chakra.div>
  </chakra.li>
)
