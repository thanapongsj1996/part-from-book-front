import React from 'react'
import { Skeleton } from '@material-ui/lab'

const SkeletonMultipleLine = ({ numberLine, width = '100%' }) => {
  return new Array(numberLine)
    .fill({})
    .map((_, index) => <Skeleton key={index} width={width} />)
}

export default SkeletonMultipleLine
