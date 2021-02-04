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
    marginBottom: '1rem',
  },
  description: {
    fontFamily: 'Sarabun, sans-serif !important',
    fontWeight: 300,
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
            <Typography variant="body1" className={classes.description}>
              {article.body}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default ArticleDetailCard
