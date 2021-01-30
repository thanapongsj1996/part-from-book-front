import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Grid, useMediaQuery, CircularProgress } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import ArticleCard from 'global/components/Article/ArticleCard'

import { ARTICLE } from '../constants/article.const'

import { fetchArticles } from 'actions/article.action'

const useStyles = makeStyles((theme) => ({
  article: {
    marginBottom: theme.spacing(2),
  },
  progress: {
    textAlign: 'center',
    marginTop: theme.spacing(8),
  },
}))

const AricleList = ({ actions, ...props }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const perPage = isMobile
        ? ARTICLE.PER_PAGE.MOBILE
        : ARTICLE.PER_PAGE.DESKTOP
      const res = await actions.fetchArticles(1, perPage)
      setArticles(res.data)
    } catch (e) {
      console.error(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {loading ? (
        <div className={classes.progress}>
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <Grid container spacing={3}>
          {articles.map((article) => (
            <Grid key={article._id} item xs={12} sm={6} md={4}>
              <ArticleCard key={article._id} article={article} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

const mapStates = () => ({})

const mapActions = { fetchArticles }

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, { actions: { ...dispatchProps } })

export default connect(mapStates, mapActions, mergeProps)(AricleList)
