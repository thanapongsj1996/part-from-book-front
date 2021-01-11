import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@material-ui/lab'

import { TIMELINES } from '../constants/timelines.const'
import { primary } from 'assets/scss/variables/__colors.scss'

const useStyles = makeStyles({
  rootTimelineItem: {
    '&:before': {
      display: 'none',
    },
  },
  active: {
    color: primary,
    fontWeight: 600,
  },
})

const JumbotronTimeline = () => {
  const classes = useStyles()

  return (
    <>
      <Timeline align="right">
        {TIMELINES.map(({ label, active, isLast }) => (
          <TimelineItem
            key={label}
            classes={{ root: classes.rootTimelineItem }}
          >
            <TimelineSeparator>
              <TimelineDot color={active ? 'primary' : 'grey'} />
              {!isLast && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent className={active ? classes.active : ''}>
              {label}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  )
}

export default JumbotronTimeline
