import { makeStyles } from '@material-ui/core/styles'

import COLOR from 'assets/scss/variables/__colors.scss'

export default makeStyles((theme) => ({
  cardHeader: {
    padding: '2rem',
  },
  title: {
    fontSize: '1.875rem',
    fontWeight: 600,
  },
  media: {
    width: '100%',
    height: 350,
    objectFit: 'cover',
    objectPosition: 'center',
    marginBottom: theme.spacing(3),
  },
  uploadPicBtn: {
    width: 150,
  },
  picCaption: {
    fontWeight: 500,
    color: COLOR.GREY5,
    '&.error': {
      color: theme.palette.error.main,
    },
  },
  form: {
    margin: '3rem 0',
  },
  formGroup: {
    margin: '24px 0',
  },
  label: {
    color: theme.palette.primary.main,
    fontSize: '1.25rem',
    fontWeight: 500,
    '&.dark:not(.error)': {
      color: COLOR.WHITE,
    },
    '&.error': {
      color: theme.palette.error.main,
    },
  },
  input: {
    marginTop: theme.spacing(1),
    borderRadius: 7,
    '& > .MuiInputBase-root': {
      background: COLOR.WHITE,
    },
    '&.dark > .MuiInputBase-root': {
      background: COLOR.GREY2,
    },
  },
  textArea: {
    marginTop: theme.spacing(1),
    outline: 'none',
    border: '1px solid rgba(22, 39, 83, 0.2)',
    background: COLOR.WHITE,
    fontFamily: 'Sarabun, sans-serif',
    '&.dark': {
      background: COLOR.GREY2,
      color: COLOR.WHITE,
      '&:hover:not(.error):not(:focus)': {
        borderColor: COLOR.WHITE,
      },
    },
    '&:hover:not(.error)': {
      borderColor: theme.palette.primary.main,
    },
    '&:focus': {
      borderWidth: 2,
      padding: 'calc(1rem - 1px)',
      '&:not(.error)': {
        borderColor: theme.palette.primary.main,
      },
    },
  },
  actionBtn: {
    width: '100%',
    maxWidth: 350,
  },
}))
