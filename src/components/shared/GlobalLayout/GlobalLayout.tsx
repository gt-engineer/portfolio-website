import { ReactElement } from 'react'
import { GlobalLayoutPresenter } from './GlobalLayoutPresenter'

export const getGlobalLayout = (page: ReactElement) => (
  <GlobalLayoutPresenter>{page}</GlobalLayoutPresenter>
)
