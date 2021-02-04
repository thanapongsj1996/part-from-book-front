import React from 'react'
import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import UserAvatar from 'global/components/User/UserAvatar'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 2rem',
  },
  penName: {
    fontWeight: 600,
    fontSize: '1.125rem',
  },
}))

const WriterCard = ({ writer }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container direction="column" justify="center" spacing={1}>
          <Grid item>
            <UserAvatar
              photo={writer?.photo}
              name={writer?.fname}
              size="large"
            />
          </Grid>
          <Grid item>
            <Typography variant="body1" className={classes.penName}>
              {writer?.dname}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default WriterCard
