import React, { useEffect, useState, useMemo } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container, Grid, useMediaQuery } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import WriterCard from './components/WriterCard'
import ArticleDatailCard from './components/ArticleDetailCard'
import OtherArticles from './components/OtherArticles'
import ArticleEditCard from 'global/components/Article/ArticleEditCard'

import { fetchArticleById } from 'actions/article.action'

import { ARTICLE } from 'global/constants/article.const'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.mixins.toolbar.minHeight + theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  content: {
    marginBottom: theme.spacing(10),
  },
  editBtn: {
    width: 80,
  },
}))

const ArticleDetail = ({ actions, ...props }) => {
  const { id } = useParams()
  const classes = useStyles()
  const theme = useTheme()
  const mdUp = useMediaQuery(theme.breakpoints.up('md'))
  const [article, setArticle] = useState({})

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const fetchData = async () => {
    setArticle({})
    try {
      const res = await actions.fetchArticleById(id)
      setArticle({ ...res.data, state: ARTICLE.STATE.READ })
    } catch (e) {
      console.error(e.message)
    }
  }

  const editState = useMemo(() => article?.state === ARTICLE.STATE.EDIT, [
    article.state,
  ])

  return (
    <Container className={classes.root}>
      <Grid container className={classes.content} spacing={3}>
        {mdUp && (
          <Grid item xs="auto">
            <WriterCard writer={article.writer} />
          </Grid>
        )}
        <Grid item xs={12} md={8}>
          {editState ? (
            <ArticleEditCard article={article} setArticle={setArticle} />
          ) : (
            <ArticleDatailCard
              article={article}
              setArticle={setArticle}
              mdUp={mdUp}
              editState={editState}
            />
          )}
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
