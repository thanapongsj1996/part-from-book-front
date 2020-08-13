import React from 'react'
import { Container, Divider, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import penImg from 'assets/images/pen-detail.png'
import bookImg from 'assets/images/book-detail.png'
import goalImg from 'assets/images/goal-detail.png'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    fontFamily: 'Prompt',
    padding: theme.spacing(10, 0, 8, 0),
  },
  divider: {
    marginTop: 15,
    width: 60,
    height: 4,
  },
  imgDetail: {
    width: 150,
    height: 150,
  },
  detailHeader: {
    textAlign: 'center',
    fontFamily: 'Prompt',
    fontSize: 24,
    padding: theme.spacing(3, 0, 1, 0),
  },
  detailBody: {
    textAlign: 'left',
    fontFamily: 'Prompt',
    fontSize: 20,
    padding: theme.spacing(1, 2),
  },
}))

export default function WebDetail() {
  const classes = useStyles()

  return (
    <section>
      <Container>
        <Typography className={classes.title} variant="h4" component="h1">
          เขียนเรื่องเล่าให้เป็นเรื่องราว
          <Grid container justify="center">
            <Divider
              className={classes.divider}
              variant="middle"
              color="primary"
            />
          </Grid>
        </Typography>
        <Grid container spacing={4} justify="center">
          <Grid item sm={4} style={{ textAlign: 'center' }}>
            <img className={classes.imgDetail} src={penImg} alt="pen" />
            <br />
            <Typography
              className={classes.detailHeader}
              variant="h6"
              component="h1"
            >
              เขียนเรื่องราวของคุณ
            </Typography>
            <Typography
              className={classes.detailBody}
              variant="p"
              component="p"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sodales non turpis nec sodales.
            </Typography>
          </Grid>
          <Grid item sm={4} style={{ textAlign: 'center' }}>
            <img className={classes.imgDetail} src={bookImg} alt="pen" />
            <br />
            <Typography
              className={classes.detailHeader}
              variant="h6"
              component="h1"
            >
              อ่านและร่วมแสดงความเห็น
            </Typography>
            <Typography
              className={classes.detailBody}
              variant="p"
              component="p"
            >
              In eget velit vel erat tempus viverra ac sit amet massa. In
              blandit egestas elit. Maecenas diam ligula, dapibu
            </Typography>
          </Grid>
          <Grid item sm={4} style={{ textAlign: 'center' }}>
            <img className={classes.imgDetail} src={goalImg} alt="pen" />
            <br />
            <Typography
              className={classes.detailHeader}
              variant="h6"
              component="h1"
            >
              ตั้งเป้าหมายในการอ่าน
            </Typography>
            <Typography
              className={classes.detailBody}
              variant="p"
              component="p"
            >
              In eget velit vel erat tempus viverra ac sit amet massa. In
              blandit egestas elit. Maecenas diam ligula, dapibu
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
