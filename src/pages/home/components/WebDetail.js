import React from 'react'
import { connect } from 'react-redux'
import { Container, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import HomeDescriptionCard from './HomeDescriptionCard'
import ArticleCard from 'global/components/Article/ArticleCard'
import SeparatorText from 'global/components/SeparatorText'

import { DESCRIPTIONS } from '../constants/description.const'

import blueLogo from 'assets/images/logos/logo-blue.png'
import whiteLogo from 'assets/images/logos/logo-white.png'

const useStyles = makeStyles((theme) => ({
  root: {},
  titleWrapper: {
    marginBottom: theme.spacing(2),
  },
  title: {
    fontWeight: 600,
  },
  subTitle: {
    marginBottom: theme.spacing(11),
    textAlign: 'center',
    fontSize: 18,
  },
  descriptionCardWrapper: {
    marginBottom: theme.spacing(10),
  },
  descriptionCard: {
    textAlign: 'center',
  },
}))

const WebDetail = ({ darkMode, ...props }) => {
  const classes = useStyles()

  return (
    <Container>
      <Grid
        container
        className={classes.titleWrapper}
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <img
            className={classes.logo}
            src={darkMode ? whiteLogo : blueLogo}
            alt="small-logo"
          />
        </Grid>
        <Grid item>
          <Typography className={classes.title} variant="h4" component="h1">
            เรื่องเล่าจากหนังสือ
          </Typography>
        </Grid>
      </Grid>

      <Typography className={classes.subTitle} variant="subtitle1">
        เพราะหนังสือทุกเล่มมีเรื่องราว
        เราจึงอยากชวนให้คุณมาร่วมค้นหาและแบ่งปันสิ่งที่คุณได้จากการอ่าน <br />
        พร้อมเปิดรับและเรียนรู้ความคิดเห็นที่หลากหลายของผู้คนได้ที่นี่ใน
        <b> “เรื่องเล่าจากหนังสือ”</b>
      </Typography>

      <Grid
        container
        className={classes.descriptionCardWrapper}
        spacing={4}
        justify="center"
      >
        {DESCRIPTIONS.map((description) => (
          <Grid
            key={description.title}
            item
            container
            className={classes.descriptionCard}
            justify="center"
            sm={4}
          >
            <HomeDescriptionCard
              description={description}
              darkMode={darkMode}
            />
          </Grid>
        ))}
      </Grid>

      <Container id="recently-article">
        <SeparatorText text="บทความล่าสุด" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ArticleCard darkMode={darkMode} orientation="horizontal" />
          </Grid>

          {[0, 1, 2, 3].map((value) => (
            <Grid key={value} item xs={12} sm={6} md={3}>
              <ArticleCard darkMode={darkMode} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  )
}

const mapStates = ({ appState }) => ({ darkMode: appState.darkMode })

const mapActions = {}

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, { actions: { ...dispatchProps } })

export default connect(mapStates, mapActions, mergeProps)(WebDetail)
