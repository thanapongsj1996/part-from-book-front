import React, { useState, useEffect } from 'react'
import { Typography, Grid, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

import CategoryList from './CategoryList'
import ArticleItem from './ArticleItem'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  article: {
    marginBottom: theme.spacing(2),
  },
  progress: {
    textAlign: 'center',
    marginTop: theme.spacing(8),
  },
}))

export default function AricleList() {
  const classes = useStyles()
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true)

      const url = 'https://part-from-book.herokuapp.com/api/v1/article'
      const { data } = await axios.get(url)

      setArticles(data.data)
      setIsLoading(false)
    }
    fetchArticles()
  }, [])

  return (
    <>
      <Typography className={classes.title} variant="h4" component="h1">
        All Articles
      </Typography>

      <CategoryList />

      {isLoading ? (
        <div className={classes.progress}>
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <Grid container justify="center" spacing={2}>
          {articles.map((article) => (
            <ArticleItem key={article._id} {...article} />
          ))}
        </Grid>
      )}
    </>
  )
}
