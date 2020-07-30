import React from 'react'
import { Grid, Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  item: {
    fontFamily: 'Prompt',
    boxShadow: '0px 0px 4px -2px rgba(0,0,0,0.75)',
    backgroundColor: theme.palette.primary[theme.palette.type],
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
