import React from 'react'
import { Link } from 'react-router-dom'
import {
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@material-ui/core'
import moment from 'moment'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 280,
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
    <Grid item xs={12} sm={9} md={5}>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar src={writerPhoto} />}
          title={`${fname} ${lname}`}
          subheader={moment(updatedAt).format('MMMM D, YYYY')}
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
            {`${body.slice(0, 120)}${body.length > 120 ? '...' : ''}`}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <Grid container justify="flex-end">
            <Grid item xs={12} sm={4}>
              <Button
                component={Link}
                to="/article"
                fullWidth="true"
                variant="contained"
                color="primary"
                href="#contained-buttons"
              >
                อ่านเพิ่มเติม
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  )
}
