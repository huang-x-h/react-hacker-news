import React from 'react'
import { timeFormat } from '../utils'

const TimeAgo = ({ date }) => (
  <span>{timeFormat(date)}</span>
)

export default TimeAgo
