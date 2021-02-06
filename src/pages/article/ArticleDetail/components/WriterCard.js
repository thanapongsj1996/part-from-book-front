import React, { useMemo } from 'react'
import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Skeleton } from '@material-ui/lab'

import UserAvatar from 'global/components/User/UserAvatar'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '9.375rem',
  },
  avatarLoading: {
    width: '5rem',
    height: '5rem',
  },
  content: {
    padding: '16px 0 24px',
    margin: '0 1rem',
  },
  penName: {
    fontWeight: 600,
    fontSize: '1.125rem',
  },
}))

const WriterCard = ({ writer }) => {
  const classes = useStyles()

  const loading = useMemo(() => !writer, [writer])

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Grid container direction="column" alignItems="center" spacing={1}>
          <Grid item>
            {loading ? (
              <Skeleton variant="circle" className={classes.avatarLoading} />
            ) : (
              <UserAvatar
                photo={writer?.photo}
                name={writer?.fname}
                size="large"
              />
            )}
          </Grid>
          <Grid item container justify="center">
            {loading ? (
              <Skeleton width="100%" />
            ) : (
              <Typography variant="body1" className={classes.penName}>
                {writer?.dname}
              </Typography>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default WriterCard
