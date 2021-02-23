import React, { useMemo, useState } from 'react'
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Skeleton } from '@material-ui/lab'

import SkeletonMultipleLine from 'global/components/Skeleton/SkeletonMultipleLine'
import ConfirmDialog from 'global/components/Dialog/ConfirmDialog'
import ArticleDetailMenu from './ArticleDetailMenu'
import UserAvatar from 'global/components/User/UserAvatar'

import { ARTICLE } from 'global/constants/article.const'

import { thaiTimeConvert } from 'utils/conversion.util'

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    padding: '2rem',
  },
  writerSection: {
    padding: '0 2rem 1.5rem calc(2rem - 8px)',
    '&.loading': {
      paddingLeft: '2rem',
    },
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
    fontSize: '1.125rem',
    lineHeight: 1.75,
  },
  headerWrapper: {
    position: 'relative',
  },
  writerName: {
    fontWeight: 600,
  },
  updatedAt: {
    marginTop: 5,
    fontSize: '0.625rem',
  },
}))

const ArticleDetailCard = ({ article, editState, ...props }) => {
  const classes = useStyles()
  const [openDialog, setOpenDialog] = useState(false)

  const loading = useMemo(() => !article._id, [article._id])

  const handleClickEdit = () =>
    props.setArticle({ ...article, state: ARTICLE.STATE.EDIT })

  const handleClickRemove = () => setOpenDialog(true)

  const confirmRemove = (confirm) => {
    if (confirm) {
      alert(`Remove Article: ${article._id}`)
    }
    setOpenDialog(false)
  }

  const showMenu = useMemo(() => {
    return !editState && article._id
  }, [editState, article._id])

  return (
    <>
      <Card>
        {loading ? (
          <div className={classes.cardHeader}>
            <Skeleton className={classes.title} width="80%" />
            {props.mdUp && <Skeleton width={120} />}
          </div>
        ) : (
          <div className={classes.headerWrapper}>
            <CardHeader
              className={classes.cardHeader}
              title={article.title}
              titleTypographyProps={{
                variant: 'h4',
                component: 'h1',
                className: classes.title,
              }}
              subheader={
                props.mdUp ? thaiTimeConvert(article.updatedAt, 'short') : ''
              }
              subheaderTypographyProps={{ variant: 'subtitle2' }}
            />
            {showMenu && (
              <ArticleDetailMenu
                handleClickEdit={handleClickEdit}
                handleClickRemove={handleClickRemove}
              />
            )}
          </div>
        )}

        {!props.mdUp && (
          <Grid
            container
            className={
              loading
                ? classes.writerSection + ' .loading'
                : classes.writerSection
            }
            spacing={2}
          >
            <Grid item>
              {loading ? (
                <Skeleton variant="circle" width={40} height={40} />
              ) : (
                <UserAvatar
                  photo={article.writer?.photo}
                  name={article.writer?.fname}
                />
              )}
            </Grid>
            <Grid item>
              {loading ? (
                <>
                  <Skeleton width={120} />
                  <Skeleton width={80} />
                </>
              ) : (
                <>
                  <Typography
                    className={classes.writerName}
                    variant="subtitle2"
                  >
                    {article.writer?.dname}
                  </Typography>

                  <Typography className={classes.updatedAt}>
                    {thaiTimeConvert(article.updatedAt, 'short')}
                  </Typography>
                </>
              )}
            </Grid>
          </Grid>
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

      <ConfirmDialog
        open={openDialog}
        onCloseDialog={confirmRemove}
        content="คุณต้องการลบบทความนี้หรือไม่ ?"
        confirmText="ลบ"
        cancelText="ยกเลิก"
      />
    </>
  )
}

export default ArticleDetailCard
