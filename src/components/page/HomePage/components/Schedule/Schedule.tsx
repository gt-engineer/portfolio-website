import { FC, useMemo } from 'react'

import { HTMLChakraProps } from '@chakra-ui/react'

import { HomePageScheduleQueryFragment } from './Schedule.generated'
import {
  ProjectV2ItemFieldSingleSelectValue,
  ProjectV2ItemFieldTextValue,
} from '@/graphql/generated/type'

import { SchedulePresenter } from './SchedulePresenter'

export const Schedule: FC<{ fragment: HomePageScheduleQueryFragment } & HTMLChakraProps<'div'>> = ({
  fragment,
  ...chakraProps
}) => {
  const scheduleList = useMemo(() => {
    const items = fragment.node?.__typename === 'ProjectV2' ? fragment.node.items.nodes : []
    const targetItems = (items || []).filter((item) => {
      const statusField = item?.fieldValues.nodes?.find(
        (v) => v?.__typename === 'ProjectV2ItemFieldSingleSelectValue',
      ) as Pick<ProjectV2ItemFieldSingleSelectValue, 'name'> | undefined
      if (statusField?.name === '完了') {
        return false
      }
      return true
    })
    return targetItems
      .reduce<Array<{ title: string; progress: number; status: string }>>((prev, current) => {
        const selectValueNode = (current?.fieldValues?.nodes || []).find(
          (v) => v?.__typename === 'ProjectV2ItemFieldSingleSelectValue',
        ) as Pick<ProjectV2ItemFieldSingleSelectValue, 'name'> | undefined
        const pushText = (current?.fieldValues?.nodes || []).find(
          (v) => v?.__typename === 'ProjectV2ItemFieldTextValue',
        ) as Pick<ProjectV2ItemFieldTextValue, 'text'> | undefined
        if (!(pushText?.text && selectValueNode?.name)) return prev
        if (selectValueNode.name === '作業中') {
          prev.push({ title: pushText.text, progress: 30, status: '作業中' })
        } else if (selectValueNode.name === '確認依頼中') {
          prev.push({ title: pushText.text, progress: 70, status: '確認依頼中' })
        } else if (selectValueNode.name === 'リテイク') {
          prev.push({ title: pushText.text, progress: 90, status: 'リテイク' })
        } else {
          prev.push({ title: pushText.text, progress: 0, status: '未着手' })
        }
        return prev
      }, [])
      .sort((a, b) => b.progress - a.progress)
  }, [fragment])
  return <SchedulePresenter scheduleList={scheduleList} {...chakraProps} />
}
