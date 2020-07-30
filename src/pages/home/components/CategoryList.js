import React from 'react'
import { Grid } from '@material-ui/core'
import { Public, Book, Star } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import CategoryItem from './CategoryItem'

const categories = [
  {
    title: 'ทั้งหมด',
    Icon: Public,
  },
  {
    title: 'มาใหม่',
    Icon: Book,
  },
  {
    title: 'ยอดนิยม',
    Icon: Star,
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
}))

export default function CategoryList() {
  const classes = useStyles()

  return (
    <Grid className={classes.root} container justify="center" spacing={2}>
      {categories.map((category) => (
        <CategoryItem key={category.title} {...category} />
      ))}
    </Grid>
  )
}
