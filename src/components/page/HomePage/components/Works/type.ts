export type TwitterWorksItemType = {
  title: string
  videoUrl: string
  vocalAccount: string
  speialThanks?: { link: string; text: string }
  tweetLink: string
}

export type YouTubeWorksItemType = {
  videoId: string
  title: string
  channel: {
    id: string
    name: string
  }
  twitterId: string
}
