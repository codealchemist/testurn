import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import CircularProgress from '@material-ui/core/CircularProgress'
import { StatusContainer } from './elements'

const Status = ({ isOk, isLoading }) => (
  <StatusContainer isOk={isOk} isLoading={isLoading}>
    {isLoading && <CircularProgress />}
    {!isLoading && (isOk === null || isOk) && <CheckCircleIcon />}
    {!isLoading && isOk === false && <HighlightOffIcon />}
  </StatusContainer>
)

export default Status
