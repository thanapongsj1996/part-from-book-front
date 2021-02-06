import React, { useMemo } from 'react'
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Skeleton } from '@material-ui/lab'

import SkeletonMultipleLine from 'global/components/Skeleton/SkeletonMultipleLine'

import { thaiTimeConvert } from 'utils/conversion.util'

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    padding: '2rem',
  },
  title: {
    fontSize: '1.875rem',
    fontWeight: 600,
    marginBottom: '0.35em',
  },
  media: {
    height: 350,
    marginBottom: '1rem',
  },
  description: {
    fontFamily: 'Sarabun, sans-serif !important',
    fontWeight: 300,
  },
}))

const ArticleDetailCard = ({ article, ...props }) => {
  const classes = useStyles()
  const loading = useMemo(() => !article._id, [article._id])

  return (
    <Card>
      {loading ? (
        <div className={classes.cardHeader}>
          <Skeleton className={classes.title} width="80%" />
          <Skeleton width={120} />
        </div>
      ) : (
        <CardHeader
          className={classes.cardHeader}
          title={article.title}
          titleTypographyProps={{
            variant: 'h4',
            component: 'h1',
            className: classes.title,
          }}
          subheader={thaiTimeConvert(article.updatedAt, 'short')}
          subheaderTypographyProps={{ variant: 'subtitle2' }}
        />
      )}

      {loading ? (
        <Skeleton variant="rect" className={classes.media} />
      ) : (
        <CardMedia className={classes.media} image={article.photo} />
      )}

      <CardContent>
        {loading ? (
          <SkeletonMultipleLine numberLine={6} />
        ) : (
          <Typography variant="body1" className={classes.description}>
            {article.body}
          </Typography>
        )}
      </CardContent>
    </Card>
  )
}

export default ArticleDetailCard
