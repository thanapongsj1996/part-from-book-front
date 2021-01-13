import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import COLOR from 'assets/scss/variables/__colors.scss'

const SeparatorText = ({ text, darkMode }) => {
  const useStyle = useCallback(
    makeStyles((theme) => ({
      root: {
        display: 'flex',
        alignItems: 'flex-end',
        margin: '20px 0',
        '&::before': {
          content: "''",
        },
        '&::after': {
          content: "''",
          flex: 1,
          borderBottom: darkMode
            ? `1px solid ${COLOR.white}`
            : `1px solid ${COLOR.primary}`,
          marginBottom: theme.spacing(1),
          marginLeft: theme.spacing(3),
        },
      },
      text: {
        fontSize: 30,
        fontWeight: 600,
      },
    })),
    [darkMode]
  )
  const classes = useStyle()

  return (
    <div className={classes.root}>
      <Typography className={classes.text} variant="h4" component="h2">
        {text}
      </Typography>
    </div>
  )
}

const mapStates = ({ appState }) => ({ darkMode: appState.darkMode })

const mapActions = {}

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, { actions: { ...dispatchProps } })

export default connect(mapStates, mapActions, mergeProps)(SeparatorText)
