import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, Grid } from '@material-ui/core'

import ArticleCard from 'global/components/Article/ArticleCard'
import SeparatorText from 'global/components/SeparatorText'

import { fetchArticles } from 'actions/article.action'

const HomeRecentlyArticle = ({ actions, ...props }) => {
  const [articles, setArticles] = useState([{}, {}, {}, {}])

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchData = async () => {
    try {
      const { data } = await actions.fetchArticles(1, 4)
      const { articles } = data
      setArticles(articles)
    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <Container id="recently-article">
      <SeparatorText text="บทความล่าสุด" />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ArticleCard article={articles[0]} orientation="horizontal" />
        </Grid>

        {articles.slice(1).map((article, index) => (
          <Grid key={article._id || index} item xs={12} sm={6} md={4}>
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

const mapStates = () => ({})

const mapActions = { fetchArticles }

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, { actions: { ...dispatchProps } })

export default connect(mapStates, mapActions, mergeProps)(HomeRecentlyArticle)
