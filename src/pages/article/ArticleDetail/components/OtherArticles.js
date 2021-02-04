import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, Grid } from '@material-ui/core'

import ArticleCard from 'global/components/Article/ArticleCard'
import SeparatorText from 'global/components/SeparatorText'

import { fetchArticles } from 'actions/article.action'

const OtherArticles = ({ actions, ...props }) => {
  const [articles, setArticles] = useState([{}, {}, {}])

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.id])

  const fetchData = async () => {
    setArticles([{}, {}, {}])
    try {
      const { data } = await actions.fetchArticles(1, 3)
      const { articles } = data
      setArticles(articles)
    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <Container>
      <SeparatorText text="บทความอื่น ๆ" />
      <Grid container spacing={2}>
        {articles.map((article, index) => (
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

export default connect(mapStates, mapActions, mergeProps)(OtherArticles)
