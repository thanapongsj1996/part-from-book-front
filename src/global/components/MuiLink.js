import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@material-ui/core'

const MuiLink = ({ children, ...props }) => {
  return (
    <Link component={RouterLink} {...props}>
      {children}
    </Link>
  )
}

export default MuiLink
