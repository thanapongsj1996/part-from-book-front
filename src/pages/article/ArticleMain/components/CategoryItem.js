import React from 'react'
import { useHistory, useRouteMatch, useLocation } from 'react-router-dom'
import { Grid, Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import queryString from 'query-string'

const useStyles = makeStyles((theme) => ({
  item: {
    cursor: 'pointer',
    backgroundColor: '#d5d5d8',
    boxShadow: '0px 0px 4px -2px rgba(0,0,0,0.8)',
  },
  itemActive: {
    backgroundColor: '#b6cce6',
  },
  icon: {
    color: '#000000',
  },
  label: {
    color: 'black',
    fontFamily: 'Prompt',
  },
}))

export default function CategoryItem({ title, category, Icon }) {
  const classes = useStyles()
  const history = useHistory()
  const { path } = useRouteMatch()
  const { search } = useLocation()

  const { category: categoryQueryString } = queryString.parse(search)

  const filterArticlesByCategory = () => {
    history.push(`${path}${category === 'all' ? '' : `?category=${category}`}`)
  }

  const categoryActive = () => {
    if (!categoryQueryString) return 'all'
    return categoryQueryString
  }

  return (
    <Grid item onClick={filterArticlesByCategory}>
      <Chip
        icon={<Icon />}
        label={title}
        classes={{ icon: classes.icon, label: classes.label }}
        className={`${classes.item} ${
          category === categoryActive() && classes.itemActive
        }`}
      />
    </Grid>
  )
}
