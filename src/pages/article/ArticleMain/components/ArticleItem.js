import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import utils from 'utils'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 220,
    cursor: 'pointer',
  },
  card: {
    boxShadow: '0px 0px 4px -2px rgba(0,0,0,0.75)',
  },
  writerName: {
    fontSize: 15,
  },
  title: {
    margin: theme.spacing(1, 0),
  },
  content: {
    cursor: 'pointer',
    paddingBottom: theme.spacing(1),
  },
}))

export default function ProductItem(props) {
  const { _id, title, body, photo: articlePhoto, writer, updatedAt } = props
  const { photo: writerPhoto, fname, lname } = writer

  const classes = useStyles()
  const history = useHistory()

  const navigateToDetail = () => history.push(`/article/${_id}`)

  return (
    <Grid item xs={12} sm={9} md={6} lg={4}>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar src={writerPhoto} />}
          title={`${fname} ${lname}`}
          subheader={utils.timeConverted(updatedAt)}
          classes={{ title: classes.writerName }}
        />

        <CardMedia
          onClick={navigateToDetail}
          className={classes.media}
          image={articlePhoto}
          // image="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          title="Paella dish"
        />

        <CardContent
          onClick={navigateToDetail}
          classes={{ root: classes.content }}
        >
          <Typography variant="h6" component="h3" className={classes.title}>
            {title}
          </Typography>

          <Typography variant="body2" component="p">
            {`${body.slice(0, 120)}${body.length > 120 ? '...' : ''}`}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
