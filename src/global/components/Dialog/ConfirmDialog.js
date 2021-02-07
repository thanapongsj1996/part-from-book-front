import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Grid,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  content: {
    paddingTop: '40px !important',
    textAlign: 'center',
  },
  actionArea: {
    margin: 0,
    paddingBottom: theme.spacing(3),
    '& button': {
      minWidth: 120,
    },
  },
}))

const ConfirmDialog = ({
  open,
  onCloseDialog,
  content,
  confirmText = 'ยืนยัน',
  cancelText = 'ยกเลิก',
}) => {
  const classes = useStyles()
  const handleClose = (isConfirm) => onCloseDialog(isConfirm)

  return (
    <Dialog maxWidth="xs" fullWidth onClose={() => handleClose()} open={open}>
      <DialogContent className={classes.content}>{content}</DialogContent>

      <DialogActions disableSpacing>
        <Grid
          container
          className={classes.actionArea}
          spacing={3}
          justify="center"
        >
          <Grid item>
            <Button
              className={classes.button}
              variant="outlined"
              onClick={() => handleClose()}
            >
              {cancelText}
            </Button>
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => handleClose(true)}
            >
              {confirmText}
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog
