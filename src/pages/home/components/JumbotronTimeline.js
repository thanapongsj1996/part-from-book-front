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

import MuiLink from 'global/components/MuiLink'

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

  const handleClickLink = (url) => {
    const match = url.match(/^#((\w+-)*\w+)$/)
    const id = match?.[1]
    if (id) {
      const element = document.getElementById(id)
      const scrollY = element.offsetTop - 80
      window.scrollTo(0, scrollY)
    }
  }

  return (
    <Timeline align="right">
      {TIMELINES.map(({ label, active, isLast, url }) => (
        <TimelineItem key={label} classes={{ root: classes.rootTimelineItem }}>
          <TimelineSeparator>
            <TimelineDot color={active ? 'primary' : 'grey'} />
            {!isLast && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent className={active ? classes.active : ''}>
            {url ? (
              <MuiLink
                to={url}
                color="inherit"
                underline="none"
                onClick={() => handleClickLink(url)}
              >
                {label}
              </MuiLink>
            ) : (
              label
            )}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

export default JumbotronTimeline
