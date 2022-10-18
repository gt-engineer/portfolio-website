import { FC } from 'react'
import NextScript from 'next/script'

import { chakra, Heading, HTMLChakraProps } from '@chakra-ui/react'

import { HomePageQueryQuery } from './HomePage.generated'

import { Works, Schedule, MainVisual, AboutMe } from './components'
import { ReactNode } from 'react'

export const HomePagePresenter: FC<{ data: HomePageQueryQuery }> = ({ data }) => (
  <chakra.div
    display="grid"
    sx={{
      '& > section': {
        _odd: {
          backgroundColor: 'orange.50',
        },
        _even: {
          backgroundColor: '#fff',
        },
      },
    }}
  >
    <MainVisual />
    <SectionWrapper
      sectionTitle={
        <>
          ABOUT
          <chakra.p mt="2" fontSize="18">
            - this site -
          </chakra.p>
        </>
      }
      sectionId=""
    >
      <chakra.p maxW="500px" lineHeight="1.6">
        ここはお仕事でWebエンジニア（フロントエンド・バックエンド）を、趣味でミックス（歌ってみた）をしている者のページです。
        <br />
        制作物や現在の稼働状況などについて簡単にまとめています。
        <br />
        エンジニアの経歴については、ここでは記載していませんが必要があればお送りしますので気軽に問い合わせください。
      </chakra.p>
    </SectionWrapper>
    <SectionWrapper
      sectionTitle={
        <>
          ABOUT
          <chakra.p mt="2" fontSize="18">
            - this me -
          </chakra.p>
        </>
      }
      sectionId=""
    >
      <AboutMe />
    </SectionWrapper>
    <SectionWrapper sectionTitle="SCHEDULE" sectionId="schedule">
      <Schedule fragment={data} />
    </SectionWrapper>
    <SectionWrapper sectionTitle="WORKS" sectionId="works">
      <Works />
    </SectionWrapper>
    <SectionWrapper sectionTitle="PRICE" sectionId="price">
      <chakra.p maxW="500px" textAlign="left" lineHeight="1.6">
        歌ってみたのMIX依頼についてはついては現在無償でやらせていただいております。（マスタリングのみも受け付けております）
        <br />
        <br />
        無償ではありますが仕上がりを聞いていただき、もしお金を払っていいと思っていただけた場合はありがたく頂戴させていただきます
        <br />
        金額は100円からでもお受けできます。
        <br />
        依頼する場合は次の物のご用意をお願いします
        <br />
        「歌ってみたの音源」「オフボーカルのインスト音源」
        <br />
        歌ってみたの音源は可能な限り頭出しのご対応をお願いします。
        <br />
        また動画のエンコードもできますので必要あればご依頼ください。
        <br />
        ※ その場合、エンコードする動画が必要になりますので一緒にお送りください。
        <br />
        <br />
        <br />
        <br />
        プログラミングスクール講師との稼働実績がありますので、プログラミング学習のサポートもさせていただきます。
        <br />
        プログラミングについては月3,000円〜お教えします。
        <br />
        質問内容や回数などに応じて金額は変動しますのでお気軽にお問い合わせください。
        <br />
        履歴書の書き方、経歴書の書き方などの転職サポートもします。（※
        企業の斡旋はツテがないのでできません）
        <br />
        <br />
        <br />
        下記が対応可能です
        <br />
        HTML / CSS / JavaScript / jQueryの初学者向けのサポート
        <br />
        React / Vue.js / Next.js /
        Nuxt.jsなどのフロントエンドエンジニアを目指す方への現場視点でのサポート
        <br />
        Java / Node.js / Express / NestJS / PHP / Ruby on
        Railsでのサーバサイドエンジニアを目指す方への現場視点でのサポート
        <br />
        <br />
        <br />
        <br />
        <br />
        Webサイトの制作は5,000円〜承ります。
        <br />
        あくまで上記は参考価格であり一度お見積り対応させていただきますのでお気軽にお問い合わせください。
        <br />
        <br />
        なお、当方Webデザイナーではありませんので、デザインはテンプレートを基に制作させていただくか、
        依頼主ご自身でデザインデータをご用意をお願いいたします。
        <br />
        <br />
        <br />
        <br />
        <br />
        Webサービス開発については時間単価5,000円〜でお仕事を承ります（月単価80万 / 160h）。
        <br />
        フリーランスではなく会社員ですので平日日中の稼働はできません。業務委託契約にて土日や平日夜間などでの開発業務となりますのでご理解の上ご連絡をお願いいたします。
        <br />
        スキルシートや職務経歴書はご連絡いただけましたらお送りします。
        <br />
        <br />
        独自サービスの開発の場合、別途時間単価に加算して料金を頂きますのでご了承ください。
        <br />
        また、その場合は見積もり段階で料金をいただく可能性があります。
      </chakra.p>
    </SectionWrapper>
    <SectionWrapper sectionTitle="CONTACT" sectionId="contact">
      <chakra.p>
        お問い合わせは
        <chakra.a
          href="https://twitter.com/_gt_engineer"
          target="_blank"
          px="2"
          textDecoration="underline"
        >
          Twitter
        </chakra.a>
        からDMまたはリプライでお願いいたします。
      </chakra.p>
      <chakra.div py="4" borderY="1px solid #C5C5C5">
        <chakra.div display="grid" justifyContent="center" height="400px">
          <chakra.a
            className="twitter-timeline"
            data-lang="ja"
            data-width="400"
            data-height="400"
            data-theme="light"
            href="https://twitter.com/_gt_engineer?ref_src=twsrc%5Etfw"
          >
            Tweets by _gt_engineer
          </chakra.a>
          <NextScript async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
        </chakra.div>
      </chakra.div>
    </SectionWrapper>
  </chakra.div>
)

const SectionWrapper: FC<
  { sectionTitle: ReactNode; sectionId: string; children: ReactNode } & HTMLChakraProps<'section'>
> = ({ sectionTitle, sectionId, children, ...chakraProps }) => (
  <chakra.section
    id={sectionId}
    display="grid"
    gap="12"
    py="20"
    px="4"
    sx={{
      '& > *': {
        maxW: '900px',
        mx: 'auto',
      },
    }}
  >
    <Heading as="h2" size="2xl" textAlign="center">
      {sectionTitle}
    </Heading>
    {children}
  </chakra.section>
)
