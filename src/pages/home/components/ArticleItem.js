import React from 'react'
import moment from 'moment'
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
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 280,
  },
  card: {
    boxShadow: '0px 0px 4px -2px rgba(0,0,0,0.75)',
  },
  button: {
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: theme.palette.primary[theme.palette.type],
  },
  writerName: {
    fontSize: 15,
  },
  title: {
    margin: theme.spacing(1, 0),
  },
  content: {
    paddingBottom: theme.spacing(1),
  },
}))

export default function ProductItem(props) {
  const { _id, title, body, photo: articlePhoto, writer, updatedAt } = props
  const { photo: writerPhoto, fname, lname } = writer

  const classes = useStyles()

  return (
    <Grid item xs={12} sm={9} md={5}>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar src={writerPhoto} />}
          title={`${fname} ${lname}`}
          subheader={moment(updatedAt).format('MMMM D, YYYY')}
          classes={{ title: classes.writerName }}
        />

        <CardMedia
          className={classes.media}
          image={articlePhoto}
          title="Paella dish"
        />

        <CardContent classes={{ root: classes.content }}>
          <Typography variant="h6" component="h3" className={classes.title}>
            {title}
          </Typography>

          <Typography variant="body2" component="p">
            {`${body.slice(0, 120)}${body.length > 120 ? '...' : ''}`}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <Grid container justify="flex-end">
            <Grid item xs={12} sm={4}>
              <Button
                component={Link}
                to={`/article/${_id}`}
                fullWidth={true}
                variant="contained"
                color="primary"
                href="#contained-buttons"
                className={classes.button}
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
