import React, { useCallback, useMemo } from 'react'
import {
  Paper,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import utils from 'utils'

import { ARTICLE } from 'global/constants/article.const'
import COLOR from 'assets/scss/variables/__colors.scss'

// orientation = [horizontal, vertical]
const ArticleCard = ({
  orientation = 'vertical',
  darkMode,
  article,
  ...props
}) => {
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
        backgroundColor: verticalMode
          ? 'transparent'
          : theme.palette.background.paper,
      },
      title: {
        marginBottom: verticalMode ? theme.spacing(1) : theme.spacing(3),
        fontWeight: verticalMode ? 500 : 600,
        color: darkMode ? COLOR.white : COLOR.black,
      },
      description: {
        marginBottom: verticalMode ? theme.spacing(1) : theme.spacing(3),
      },
      cover: {
        height: 200,
        borderRadius: 4,
      },
      coverLandscape: {
        minWidth: 250,
        [theme.breakpoints.down('sm')]: {
          minWidth: 150,
        },
      },
      info: {
        color: darkMode ? COLOR.grey3 : COLOR.grey2,
      },
      hideBorder: {
        boxShadow: 'none',
      },
    })),
    [orientation, darkMode, isMobile]
  )
  const classes = useStyles()

  const cardClass = useMemo(() => {
    const className = [classes.root]
    if (verticalMode) {
      className.push(classes.hideBorder)
    }

    return className.join(' ')
  }, [classes.hideBorder, classes.root, verticalMode])

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
    const { fname, lname } = article.writer
    return `${fname} ${lname}`
  }, [article])

  return (
    <Card component={Paper} className={cardClass}>
      <CardMedia
        className={verticalMode ? classes.cover : classes.coverLandscape}
        image={article.photo}
        title={article.title}
      />

      <CardContent>
        <Typography
          className={classes.title}
          variant={typographys.title}
          component="h4"
        >
          {shortTitle()}
        </Typography>

        <Typography
          className={classes.description}
          variant={typographys.desciption}
        >
          {shortDescription()}
        </Typography>

        <Typography className={classes.info} variant={typographys.info}>
          {verticalMode ? (
            <span>
              {writerName} <br /> {utils.timeConverted(article.updatedAt)}
            </span>
          ) : (
            <span>
              {writerName} &nbsp; &#8226; &nbsp;
              {utils.timeConverted(article.updatedAt)}
            </span>
          )}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ArticleCard