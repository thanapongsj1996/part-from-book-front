import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import SeparatorText from 'global/components/SeparatorText'
import ArticleList from './components/ArticleList'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.mixins.toolbar.minHeight + theme.spacing(5),
  },
  title: {
    textAlign: 'center',
    margin: theme.spacing(3, 0, 4, 0),
  },
  content: {
    padding: theme.spacing(2, 0),
  },
  divider: {
    marginTop: 15,
    width: 60,
    height: 4,
  },
}))

export default function Content() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" className={classes.root}>
      <SeparatorText text="บทความ" size={2.1875} />

      <ArticleList />
    </Container>
  )
}
