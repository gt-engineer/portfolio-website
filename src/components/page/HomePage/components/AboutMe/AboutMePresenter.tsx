import { FC, ReactNode } from 'react'
import NextImage from 'next/image'
import { chakra, Heading, HTMLChakraProps, Tag, Divider } from '@chakra-ui/react'

import Android from '@/assets/skill/android-vertical.svg'
import Apollostack from '@/assets/skill/apollostack.svg'
import AWSECS from '@/assets/skill/aws-ecs.svg'
import AWSEC2 from '@/assets/skill/aws-ec2.svg'
import AWSLamda from '@/assets/skill/aws-lambda.svg'
import CircleCI from '@/assets/skill/circleci.svg'
import Css3 from '@/assets/skill/css-3.svg'
import DataDog from '@/assets/skill/datadog.svg'
import Docker from '@/assets/skill/docker-icon.svg'
import ESLint from '@/assets/skill/eslint.svg'
import Firebase from '@/assets/skill/firebase.svg'
import Flutter from '@/assets/skill/flutter.svg'
import Git from '@/assets/skill/git-icon.svg'
import Github from '@/assets/skill/github-icon.svg'
import GraphQL from '@/assets/skill/graphql.svg'
import Heroku from '@/assets/skill/heroku-icon.svg'
import Html5 from '@/assets/skill/html-5.svg'
import Java from '@/assets/skill/java.svg'
import JavaScript from '@/assets/skill/javascript.svg'
import Jest from '@/assets/skill/jest.svg'
import Kotlin from '@/assets/skill/kotlin-icon.svg'
import MySQL from '@/assets/skill/mysql.svg'
import NestJS from '@/assets/skill/nestjs.svg'
import NextJs from '@/assets/skill/nextjs-icon.svg'
import NodeJs from '@/assets/skill/nodejs-icon.svg'
import PHP from '@/assets/skill/php.svg'
import Postgresql from '@/assets/skill/postgresql.svg'
import Prettier from '@/assets/skill/prettier.svg'
import Prisma from '@/assets/skill/prisma.svg'
import ReactIcon from '@/assets/skill/react.svg'
import Redux from '@/assets/skill/redux.svg'
import Ruby from '@/assets/skill/ruby.svg'
import Sass from '@/assets/skill/sass.svg'
import Sentry from '@/assets/skill/sentry-icon.svg'
import SocketIO from '@/assets/skill/socket.io.svg'
import SolidJS from '@/assets/skill/solidjs-icon.svg'
import Spring from '@/assets/skill/spring-icon.svg'
import Storybook from '@/assets/skill/storybook-icon.svg'
import TestingLibrary from '@/assets/skill/testing-library.svg'
import TypeORM from '@/assets/skill/typeorm.svg'
import TypeScript from '@/assets/skill/typescript-icon.svg'
import Vagrant from '@/assets/skill/vagrant-icon.svg'
import Vue from '@/assets/skill/vue.svg'
import Webpack from '@/assets/skill/webpack.svg'
import Wordpress from '@/assets/skill/wordpress-icon.svg'

export const AboutMePresenter: FC<HTMLChakraProps<'div'>> = ({ ...chakraProps }) => (
  <chakra.div {...chakraProps}>
    <chakra.p maxW="500px" mx="auto" lineHeight="1.6">
      都内で働くWebエンジニアです。
      <br />
      フロントエンド・バックエンドが主な領域です。場合によってはネイティブアプリもやります。ただインフラ周りが苦手です。副業でのプロダクト開発、個人でのサイト作成や運用も承ります。
      <br />
      また、趣味でMIX（歌ってみた）をやっています。独学ですが将来的には作曲をやりたいと思っています。
      <br />
      よろしくお願いします！
    </chakra.p>
    <Divider mt="12" />
    <SectionWrapper sectionTitle="GADGET">
      <chakra.p mt="8" lineHeight="1.6">
        <b>PC:</b> MacBook Pro Apple M1 Max / Windows11 <br />
        <b>OTHER:</b> UR22C / MDR-CD900ST / Eris E3.5
      </chakra.p>
    </SectionWrapper>
    <SectionWrapper sectionTitle="SOFTWARE">
      <chakra.p mt="8">Logic Pro X / Waves Horizon / Melodyne 5 / Ozone 9 / Nectar 3</chakra.p>
    </SectionWrapper>
    <SectionWrapper sectionTitle="SKILL SET">
      <chakra.ul display="flex" gap="2" flexWrap="wrap" mt="8" listStyleType="none">
        {[
          Html5,
          Css3,
          Sass,
          JavaScript,
          TypeScript,
          ReactIcon,
          NextJs,
          Redux,
          TestingLibrary,
          Jest,
          Storybook,
          ESLint,
          Prettier,
          Webpack,
          Vue,
          SolidJS,
          NodeJs,
          NestJS,
          TypeORM,
          Prisma,
          Java,
          Kotlin,
          Spring,
          Apollostack,
          GraphQL,
          PHP,
          Wordpress,
          Ruby,
          Flutter,
          Android,
          MySQL,
          Postgresql,
          SocketIO,
          Docker,
          Vagrant,
          Firebase,
          Heroku,
          AWSECS,
          AWSEC2,
          AWSLamda,
          CircleCI,
          DataDog,
          Sentry,
          Git,
          Github,
        ].map((v) => {
          const paths = v.src.split('/')
          const fileName = paths[paths.length - 1].split('.')[0]
          return (
            <Tag key={fileName} as="li" py="2" px="4">
              <NextImage
                src={v.src}
                alt={fileName}
                width="30px"
                height="30px"
                objectFit="fill"
                layout="fixed"
                loading="lazy"
              />
            </Tag>
          )
        })}
      </chakra.ul>
    </SectionWrapper>
    <Divider mt="12" />
  </chakra.div>
)

const SectionWrapper: FC<
  { sectionTitle: string; children: ReactNode } & HTMLChakraProps<'section'>
> = ({ sectionTitle, children, ...chakraProps }) => (
  <chakra.section mt="12" textAlign="center" {...chakraProps}>
    <Heading
      as="h3"
      size="xl"
      display="inline-block"
      px="8"
      textAlign="center"
      borderX="4px dotted"
      borderColor="red.600"
    >
      {sectionTitle}
    </Heading>
    {children}
  </chakra.section>
)
