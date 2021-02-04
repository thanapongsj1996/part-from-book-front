import React from 'react'
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { timeConverted } from 'utils/thaiTimeConvert'

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    padding: '2rem',
  },
  title: {
    fontSize: '1.875',
    fontWeight: 600,
  },
  media: {
    height: 350,
  },
  // card: {
  //   boxShadow: '0px 0px 4px -1px rgba(0,0,0,0.75)',
  // },
  // writerName: {
  //   fontSize: '1.125rem',
  // },
  // title: {
  //   color: theme.palette.text.primary,
  //   padding: '16px 16px 0px 16px',
  // },
  // body: {
  //   color: theme.palette.text.primary,
  //   fontSize: '1.125rem',
  // },
}))

const ArticleDetailCard = ({ article, ...props }) => {
  const classes = useStyles()

  return (
    <>
      {article.title && (
        <Card>
          <CardHeader
            className={classes.cardHeader}
            title={article.title}
            titleTypographyProps={{
              variant: 'h4',
              component: 'h1',
              className: classes.title,
              gutterBottom: true,
            }}
            subheader={timeConverted(article.updatedAt, 'short')}
            subheaderTypographyProps={{ variant: 'subtitle2' }}
          />

          <CardMedia className={classes.media} image={article.photo} />

          <CardContent>
            <Typography variant="body1" className={classes.body}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ส่วนหนึ่งของหนังสือ
              จึงรวบรวมบทความและคอร์สอบรมอันหลากหลาย
              เพื่อตอบสนองการเขียนโปรแกรมในแต่ละภาษา
              พร้อมหลักการที่สำคัญเช่นคณิตศาสตร์และอัลกอริทึม
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Etiam condimentum lectus sed quam
              vehicula, in posuere lorem sagittis. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Donec egestas elit augue, sit amet ultricies erat malesuada id.
              Fusce sit amet dignissim dolor, ut tempor nunc. In hac habitasse
              platea dictumst. Donec ultricies volutpat erat. Ut viverra ante ac
              lacinia scelerisque. Etiam convallis in purus nec condimentum.
              Fusce vitae sem tellus. Aenean commodo odio sed interdum
              pellentesque. Sed nec
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; sapien facilisis cursus
              euismod, lacus ex porta nibh, vel viverra leo libero et massa.
              Phasellus semper tristique nunc at imperdiet. Mauris a luctus
              lacus. Vivamus nec euismod ligula. Vestibulum vel lacinia.
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default ArticleDetailCard
