import { createClient } from 'urql'

const createUrqlClient = () => {
  return createClient({
    url: 'https://api.github.com/graphql',
    fetchOptions: () => ({
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    }),
  })
}

export const urqlClient = createUrqlClient()
