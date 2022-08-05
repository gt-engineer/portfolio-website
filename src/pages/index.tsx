import NextHead from 'next/head'

import { HomePage } from '@/components/page/HomePage'
import { getGlobalLayout } from '@/components/shared/GlobalLayout'

import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <NextHead>
        <title>ぽげちゃん STUDIO</title>
        <meta name="author" content="ぽげちゃん" />
        <meta
          name="descirption"
          content="ぽげちゃん STUDIOは歌ってみたのミックス依頼とホームページ作成依頼を承っています。"
        />
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </NextHead>
      <HomePage />
    </>
  )
}

Home.getLayout = getGlobalLayout

export default Home
