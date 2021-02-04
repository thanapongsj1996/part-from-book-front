import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import WriterCard from './components/WriterCard'
import ArticleDatailCard from './components/ArticleDetailCard'
import OtherArticles from './components/OtherArticles'

import { fetchArticleById } from 'actions/article.action'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.mixins.toolbar.minHeight + theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}))

const ArticleDetail = ({ actions, ...props }) => {
  const classes = useStyles()
  const [article, setArticle] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const fetchData = async () => {
    setArticle({})
    try {
      const res = await actions.fetchArticleById(id)
      console.log(res.data)
      setArticle(res.data)
    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs="auto">
          <WriterCard writer={article.writer} />
        </Grid>
        <Grid item xs={12} md={9}>
          <ArticleDatailCard article={article} />
        </Grid>
      </Grid>

      <OtherArticles id={id} />
    </Container>
  )
}

const mapStates = () => ({})

const mapActions = { fetchArticleById }

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, { actions: { ...dispatchProps } })

export default connect(mapStates, mapActions, mergeProps)(ArticleDetail)
