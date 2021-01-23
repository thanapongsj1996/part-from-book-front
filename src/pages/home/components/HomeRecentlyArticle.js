import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, Grid } from '@material-ui/core'

import ArticleCard from 'global/components/Article/ArticleCard'
import SeparatorText from 'global/components/SeparatorText'

import { fetchArticles } from 'actions/article.action'

const HomeRecentlyArticle = ({ darkMode, actions, ...props }) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchData = async () => {
    try {
      const res = await actions.fetchArticles(1, 5)
      setArticles(res.data)
    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <Container id="recently-article">
      <SeparatorText text="บทความล่าสุด" />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {articles[0] && (
            <ArticleCard article={articles[0]} orientation="horizontal" />
          )}
        </Grid>

        {articles.slice(1).map((article) => (
          <Grid key={article._id} item xs={12} sm={6} md={3}>
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

const mapStates = ({ appState }) => ({ darkMode: appState.darkMode })

const mapActions = { fetchArticles }

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, { actions: { ...dispatchProps } })

export default connect(mapStates, mapActions, mergeProps)(HomeRecentlyArticle)
