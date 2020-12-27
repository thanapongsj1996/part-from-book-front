import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer,
    backgroundColor: '#0e4e9c',
    boxShadow: '0px 0px 4px 0px rgba(0,0,0,0.75)',
  },
  appBarBlack: {
    zIndex: theme.zIndex.drawer,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    border: 0,
  },
  logoLink: {
    marginRight: theme.spacing(1),
  },
  logoImage: {
    width: 40,
    height: 40,
  },
  whiteIcon: {
    color: 'white',
  },
  userIconPopover: {
    color: '#95A5A6',
    fontSize: 100,
  },
  userIconPopoverProfile: {
    color: '#95A5A6',
    fontSize: 80,
  },
  profileSection: {
    textAlign: 'left',
  },
  profileHeader: {
    fontSize: 18,
  },
  lookProfile: {
    marginTop: -5,
  },
  userNamePopover: {
    textAlign: 'center',
    marginTop: '-14px',
  },
  navButton: {
    fontSize: 18,
    fontWeight: 400,
    fontFamily: 'Prompt',
    margin: theme.spacing(0, 1),
    color: 'white',
  },
  navButtonPopover: {
    width: '100%',
    fontSize: 18,
    fontWeight: 400,
    fontFamily: 'Prompt',
    color: theme.palette.text.primary,
  },
  navButtonPopoverProfile: {
    width: '100%',
    fontSize: 15,
    fontWeight: 400,
    fontFamily: 'Prompt',
    paddingRight: 20,
    color: theme.palette.text.primary,
  },
  spacer: {
    flexGrow: 1,
  },
  divider: {
    margin: theme.spacing(0, 0.5, 0, 2),
    height: 40,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
  },
  dividerPopover: {
    margin: theme.spacing(1, 0),
  },
  popover: {
    width: '100%',
    padding: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  popoverProfile: {
    padding: 12,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  textCenter: {
    textAlign: 'center',
  },
  authLabel: {
    textTransform: 'none',
  },
}))
