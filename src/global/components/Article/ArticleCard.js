import React, { useCallback, useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Skeleton } from '@material-ui/lab'

import UserAvatar from 'global/components/User/UserAvatar'

import { timeConverted } from 'utils/thaiTimeConvert'

import { ARTICLE } from 'global/constants/article.const'
import COLOR from 'assets/scss/variables/__colors.scss'

// orientation = [horizontal, vertical]
const ArticleCard = ({
  orientation = 'vertical',
  darkMode,
  article,
  ...props
}) => {
  const history = useHistory()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const verticalMode = orientation === 'vertical' || isMobile

  const typographys = {
    title: verticalMode ? 'body1' : 'h6',
    desciption: verticalMode ? 'body2' : 'body1',
    info: verticalMode ? 'caption' : 'body2',
  }

  const useStyles = useCallback(
    makeStyles((theme) => ({
      root: {
        display: 'flex',
        flexDirection: verticalMode ? 'column' : 'row',
        boxShadow: 'none',
      },
      title: {
        marginBottom: verticalMode ? theme.spacing(1) : theme.spacing(3),
        fontWeight: verticalMode ? 500 : 600,
        color: darkMode ? COLOR.white : COLOR.black,
      },
      description: {
        marginBottom: verticalMode ? theme.spacing(1) : theme.spacing(3),
        fontFamily: 'Sarabun, sans-serif !important',
        fontWeight: 300,
      },
      cover: {
        height: 200,
      },
      coverLandscape: {
        minWidth: 400,
        [theme.breakpoints.down('sm')]: {
          minWidth: 200,
        },
      },
      infoWrapper: {
        marginTop: theme.spacing(2),
      },
      info: {
        color: darkMode ? COLOR.grey3 : COLOR.grey2,
      },
    })),
    [orientation, darkMode, isMobile]
  )
  const classes = useStyles()

  const loading = useMemo(() => !article.title, [article.title])

  const shortTitle = () => {
    const title = article.title
    const n = title.length
    const max = ARTICLE.CARD.MAX_TITLE_LENGTH

    if (!verticalMode) {
      return title
    }

    return n < max ? title : title.substr(0, max).trim() + '...'
  }

  const shortDescription = () => {
    const description = article.body
    const n = description.length
    let max = ARTICLE.CARD.MAX_DESC_LENGTH
    if (!verticalMode) {
      max += 80
    }

    return n < max ? description : description.substr(0, max).trim() + '...'
  }

  const writerName = useMemo(() => {
    if (loading) {
      return ''
    }

    const { fname, lname } = article.writer
    return `${fname} ${lname}`
  }, [article.writer, loading])

  const openArticleDetailPage = () => history.push(`/articles/${article._id}`)

  return (
    <Card
      component={Paper}
      className={classes.root + ' cursor-pointer'}
      onClick={openArticleDetailPage}
    >
      {loading ? (
        <Skeleton
          width={verticalMode ? '100%' : 500}
          height={verticalMode ? 200 : 'auto'}
          variant="rect"
          animation="wave"
        ></Skeleton>
      ) : (
        <CardMedia
          className={verticalMode ? classes.cover : classes.coverLandscape}
          image={article.photo}
        />
      )}

      <CardContent className="w-100">
        {loading ? (
          <Skeleton
            width="60%"
            className={classes.title}
            animation="wave"
          ></Skeleton>
        ) : (
          <Typography
            className={classes.title}
            variant={typographys.title}
            component="h4"
          >
            {shortTitle()}
          </Typography>
        )}

        {loading ? (
          <>
            <Skeleton width="90%" animation="wave"></Skeleton>
            <Skeleton width="90%" animation="wave"></Skeleton>
            <Skeleton
              width="90%"
              className={classes.description}
              animation="wave"
            ></Skeleton>
          </>
        ) : (
          <Typography
            className={classes.description}
            variant={typographys.desciption}
          >
            {shortDescription()}
          </Typography>
        )}

        <Grid
          container
          className={classes.infoWrapper}
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            {loading ? (
              <Skeleton
                animation="wave"
                variant="circle"
                width={40}
                height={40}
              />
            ) : (
              <UserAvatar
                photo={article?.writer?.photo}
                name={article.writer.fname}
              />
            )}
          </Grid>
          <Grid item>
            <Typography className={classes.info} variant={typographys.info}>
              {loading && verticalMode ? (
                <>
                  <Skeleton width={150} animation="wave"></Skeleton>
                  <Skeleton width={150} animation="wave"></Skeleton>
                </>
              ) : loading && !verticalMode ? (
                <Skeleton width={180} animation="wave"></Skeleton>
              ) : verticalMode ? (
                <span>
                  {writerName} <br /> {timeConverted(article.updatedAt)}
                </span>
              ) : (
                <span>
                  {writerName} &nbsp; &#8226; &nbsp;
                  {timeConverted(article.updatedAt)}
                </span>
              )}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

const mapStates = ({ appState }) => ({ darkMode: appState.darkMode })

const mapActions = {}

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, { actions: { ...dispatchProps } })

export default connect(mapStates, mapActions, mergeProps)(ArticleCard)
