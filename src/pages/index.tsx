import NextHead from 'next/head'
import NextScript from 'next/script'

import { HomePage, HomePageQueryQuery, HomePageQueryDocument } from '@/components/page/HomePage'
import { getGlobalLayout } from '@/components/shared/GlobalLayout'

import { NextPageWithLayout } from './_app'

import { urqlClient } from '@/graphql/createClient'
import MainVisual from '@/assets/main-visual.jpg'

export const getServerSideProps = async () => {
  const { data } = await urqlClient
    .query<HomePageQueryQuery>(
      HomePageQueryDocument,
      {},
      {
        requestPolicy: 'cache-and-network',
      },
    )
    .toPromise()
  if (!data) throw new Error('エラーが発生しました')
  return {
    props: {
      data,
    },
  }
}

const Home: NextPageWithLayout<{ data: HomePageQueryQuery }> = (props) => {
  return (
    <>
      <NextHead>
        <title>ぽげラボ</title>
        <meta name="author" content="ぽげちゃん" />
        <meta
          name="description"
          content="ぽげラボはお仕事としてWebエンジニアを、趣味として歌ってみたのMIXをする人のホームページです"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="ぽげラボ" />
        <meta
          property="og:description"
          content="ぽげラボはお仕事としてWebエンジニアを、趣味として歌ってみたのMIXをする人のホームページです"
        />
        <meta property="og:image" content={MainVisual.src} />
        <meta property="og:type" content="website" />
        <NextScript async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
      </NextHead>
      <HomePage {...props} />
    </>
  )
}

Home.getLayout = getGlobalLayout

export default Home
