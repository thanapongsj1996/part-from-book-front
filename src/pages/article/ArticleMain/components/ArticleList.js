import React, { useState, useEffect } from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

import ArticleItem from './ArticleItem'

const useStyles = makeStyles((theme) => ({
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

      const url =
        'https://part-from-book-api-j4vlqdhg7q-an.a.run.app/api/v1/articles'
      const { data } = await axios.get(url)

      setArticles(data.data)
      setIsLoading(false)
    }
    fetchArticles()
  }, [])

  return (
    <>
      {isLoading ? (
        <div className={classes.progress}>
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <Grid container justify="center" spacing={3}>
          {articles.map((article) => (
            <ArticleItem key={article._id} {...article} />
          ))}
        </Grid>
      )}
    </>
  )
}
