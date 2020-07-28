import React from 'react'
import {
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 350,
  },
  card: {
    boxShadow: '0px 0px 4px -1px rgba(0,0,0,0.75)',
  },
  writerName: {
    fontSize: 18,
  },
  title: {
    color: theme.palette.text.primary,
    padding: '16px 16px 0px 16px',
  },
  body: {
    color: theme.palette.text.primary,
    fontSize: 18,
  },
}))

export default function ArticleDetail() {
  const classes = useStyles()

  return (
    <main>
      <Grid container justify="center">
        <Grid item xs={12} sm={10} md={8} lg={8}>
          <Card className={classes.card}>
            <Typography variant="h4" className={classes.title} component="h1">
              Milk and Honey
            </Typography>

            <CardHeader
              avatar={<Avatar aria-label="recipe">T</Avatar>}
              title="Thanapong Somjai"
              subheader="June 3, 1996"
              classes={{ title: classes.writerName }}
            />

            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              title="Paella dish"
            />

            <CardContent>
              <Typography
                variant="body1"
                className={classes.body}
                component="p"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam condimentum lectus sed quam
                vehicula, in posuere lorem sagittis. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas. Donec egestas elit augue, sit amet ultricies erat
                malesuada id. Fusce sit amet dignissim dolor, ut tempor nunc. In
                hac habitasse platea dictumst. Donec ultricies volutpat erat. Ut
                viverra ante ac lacinia scelerisque. Etiam convallis in purus
                nec condimentum. Fusce vitae sem tellus. Aenean commodo odio sed
                interdum pellentesque. Sed nec
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lacus at nibh consequat
                lobortis. Nulla sit amet tincidunt ligula. Sed tempor interdum
                libero, ac rhoncus sem egestas a. Fusce sed dui neque. Morbi eu
                metus mauris. Maecenas velit ex, efficitur vitae justo id,
                tincidunt ultricies metus. Aliquam ut neque id quam condimentum
                fringilla sit amet fringilla erat. Nunc luctus elit imperdiet
                lectus ullamcorper tempor. Aenean aliquam vel ligula at
                ultrices. Nullam ac nulla id arcu malesuada mattis in vel risus.
                Mauris scelerisque dui eu ultricies ullamcorper. Donec id risus
                et felis aliquet vestibulum ac nec nulla. Curabitur tincidunt
                velit leo, ac lobortis nisl efficitur eget. Morbi pharetra diam
                sit amet dolor semper, ultrices euismod lectus venenatis. Donec
                sollicitudin, odio sed ultrices accumsan, nisl enim fringilla
                ante, quis accumsan nibh enim vitae nibh. Curabitur eu sapien a
                tellus condimentum tristique. Ut et diam at arcu dignissim
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;auctor sodales sed massa.
                Donec lectus urna, rutrum at lacus sit amet, placerat dictum
                felis. Donec a ultrices dolor, ut vulputate ipsum. Curabitur non
                tellus accumsan, tempor nulla a, cursus ligula. Nullam ac tortor
                magna. In gravida purus sed molestie sollicitudin. Curabitur
                maximus lobortis orci, ac porttitor ligula sagittis ut. In enim
                enim, luctus a dignissim a, auctor eu neque. Aliquam et sem
                mollis, porttitor nulla vel, pulvinar magna. Class aptent taciti
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Vestibulum eget mi
                id tellus elementum consectetur non finibus dui. Nullam non
                faucibus purus. Morbi blandit urna et est dapibus lobortis.
                Nulla mattis in ex a accumsan. Proin at auctor libero, eu
                ultricies sem. Donec feugiat odio eu augue rhoncus egestas.
                Donec accumsan, velit vel finibus aliquam, ligula lectus lacinia
                nunc, id posuere libero augue quis nulla. Mauris id arcu nec sem
                volutpat porta in sed ligula. Maecenas rhoncus,
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; sapien facilisis cursus
                euismod, lacus ex porta nibh, vel viverra leo libero et massa.
                Phasellus semper tristique nunc at imperdiet. Mauris a luctus
                lacus. Vivamus nec euismod ligula. Vestibulum vel lacinia.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </main>
  )
}
