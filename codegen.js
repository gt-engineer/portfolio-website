// overwrite: true
// schema: "https://api.github.com/graphql"
// documents: "src/**/*.graphql"
// generates:
//   src/generated/graphql.tsx:
//     plugins:
//       - "typescript"
//       - "typescript-operations"
//       - "typescript-react-apollo"
//   ./graphql.schema.json:
//     plugins:
//       - "introspection"
//   src/:
//     preset: 'near-operation-file',
const { parsed: env } = require('dotenv').config({
  path: './.env',
})

module.exports = {
  schema: {
    'https://api.github.com/graphql': {
      headers: {
        Authorization: `bearer ${env.ACCESS_TOKEN}`,
      },
    },
  },
  overwrite: true,
  documents: ['./src/**/*.graphql'],
  generates: {
    'src/graphql/generated/type.ts': { plugins: ['typescript'] },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: '~@/graphql/generated/type',
      },
      plugins: ['typescript-operations', 'typescript-urql', 'typescript-msw'],
      config: {
        withComponent: false,
        withHOC: false,
        withHooks: true,
      },
    },
  },
}
