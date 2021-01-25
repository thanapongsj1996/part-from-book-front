import React, { useState, useEffect } from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

import Api from 'api'
import ArticleCard from 'global/components/Article/ArticleCard'

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

      const url = Api.getAllArticles()
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
