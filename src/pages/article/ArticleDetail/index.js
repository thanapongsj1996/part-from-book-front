import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container, Grid, Button, useMediaQuery } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import WriterCard from './components/WriterCard'
import ArticleDatailCard from './components/ArticleDetailCard'
import OtherArticles from './components/OtherArticles'

import { fetchArticleById } from 'actions/article.action'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.mixins.toolbar.minHeight + theme.spacing(5),
    paddingBottom: theme.spacing(5),
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
      console.log(res.data)
      setArticle(res.data)
    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        {mdUp && (
          <Grid item xs="auto">
            <WriterCard writer={article.writer} />
          </Grid>
        )}
        <Grid item xs={12} md={8}>
          <ArticleDatailCard article={article} mdUp={mdUp} />
        </Grid>
        <Grid item>
          <Button
            className={classes.editBtn}
            variant="contained"
            color="primary"
          >
            แก้ไข
          </Button>
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
