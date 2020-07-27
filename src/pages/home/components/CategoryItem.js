import React from 'react'
import { Grid, Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  item: {
    boxShadow: ' 0px 0px 15px -3px rgba(0,0,0,0.75)',
  },
}))

export default function CategoryItem({ title, Icon }) {
  const classes = useStyles()
  return (
    <Grid item>
      <Chip
        icon={<Icon />}
        label={title}
        clickable
        color="primary"
        className={classes.item}
      />
    </Grid>
  )
}
