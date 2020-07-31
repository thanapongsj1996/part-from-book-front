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
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 350,
  },
  card: {
    boxShadow: '0px 0px 4px -1px rgba(0,0,0,0.75)',
  },
  writerName: {
    fontSize: 18,
  },
  title: {
    color: theme.palette.text.primary,
    padding: '16px 16px 0px 16px',
  },
  body: {
    color: theme.palette.text.primary,
    fontSize: 18,
  },
}))

export default function ArticleDetail() {
  // const { id } = useParams()
  const classes = useStyles()

  return (
    <main>
      <Grid container justify="center">
        <Grid item xs={12} sm={10} md={8} lg={8}>
          <Card className={classes.card}>
            <Typography variant="h4" className={classes.title} component="h1">
              Milk and Honey
            </Typography>

            <CardHeader
              avatar={<Avatar aria-label="recipe">T</Avatar>}
              title="Thanapong Somjai"
              subheader="June 3, 1996"
              classes={{ title: classes.writerName }}
            />

            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              title="Paella dish"
            />

            <CardContent>
              <Typography
                variant="body1"
                className={classes.body}
                component="p"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ส่วนหนึ่งของหนังสือ
                จึงรวบรวมบทความและคอร์สอบรมอันหลากหลาย
                เพื่อตอบสนองการเขียนโปรแกรมในแต่ละภาษา
                พร้อมหลักการที่สำคัญเช่นคณิตศาสตร์และอัลกอริทึม
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam condimentum lectus sed quam
                vehicula, in posuere lorem sagittis. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas. Donec egestas elit augue, sit amet ultricies erat
                malesuada id. Fusce sit amet dignissim dolor, ut tempor nunc. In
                hac habitasse platea dictumst. Donec ultricies volutpat erat. Ut
                viverra ante ac lacinia scelerisque. Etiam convallis in purus
                nec condimentum. Fusce vitae sem tellus. Aenean commodo odio sed
                interdum pellentesque. Sed nec
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; sapien facilisis cursus
                euismod, lacus ex porta nibh, vel viverra leo libero et massa.
                Phasellus semper tristique nunc at imperdiet. Mauris a luctus
                lacus. Vivamus nec euismod ligula. Vestibulum vel lacinia.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </main>
  )
}
