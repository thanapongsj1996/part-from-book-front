import React, { useState, useEffect, useCallback, useRef } from 'react'
import { connect } from 'react-redux'
import { Grid, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

import ArticleCard from 'global/components/Article/ArticleCard'

import { ARTICLE } from '../constants/article.const'

import { fetchArticles } from 'actions/article.action'

const AricleList = ({ actions, ...props }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const perPage = useRef(ARTICLE.PER_PAGE.DESKTOP)
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perPage])

  useEffect(() => {
    perPage.current = isMobile
      ? ARTICLE.PER_PAGE.MOBILE
      : ARTICLE.PER_PAGE.DESKTOP
  }, [isMobile])

  const fetchData = async () => {
    setArticles(getEmptyObject())
    try {
      const { data } = await actions.fetchArticles(1, perPage.current)
      const { articles, ...pagination } = data
      setArticles(articles)
    } catch (e) {
      console.error(e.message)
    }
  }

  const getEmptyObject = useCallback(() => {
    const result = []

    for (let i = 0; i < perPage.current; i++) {
      result.push({ loading: true })
    }

    return result
  }, [perPage])

  return (
    <>
      <Grid container spacing={3}>
        {articles.map((article, index) => (
          <Grid key={article._id || index} item xs={12} sm={6} md={4}>
            <ArticleCard key={article._id} article={article} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

const mapStates = () => ({})

const mapActions = { fetchArticles }

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, { actions: { ...dispatchProps } })

export default connect(mapStates, mapActions, mergeProps)(AricleList)
