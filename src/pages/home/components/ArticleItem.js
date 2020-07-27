import React from 'react'
import {
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core'
import moment from 'moment'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 300,
  },
  card: {
    boxShadow: '0px 0px 15px -3px rgba(0,0,0,0.75)',
  },
}))

export default function ProductItem(props) {
  const { title, body, photo: articlePhoto, writer, updatedAt } = props
  const { photo: writerPhoto, fname, lname } = writer

  const classes = useStyles()

  return (
    <Grid item xs={12} sm={9} md={7}>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar src={writerPhoto} />}
          title={`${fname} ${lname}`}
          subheader={moment(updatedAt).format('MMMM D YYYY, h:mm:ss A')}
        />

        <CardMedia
          className={classes.media}
          image={articlePhoto}
          title="Paella dish"
        />

        <CardContent>
          <Typography variant="title" color="textSecondary" component="h3">
            {title}
          </Typography>

          <Typography variant="body" color="textSecondary" component="p">
            {`${body.slice(0, 30)}${body.length > 30 ? '...' : ''}`}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
