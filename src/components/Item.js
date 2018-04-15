import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import TimeAgo from './TimeAgo'
import { pluralise, host } from '../utils'

const ItemMeta = ({ id, type, time, text, title, url, by, score, dead, descendants }) => {
  if (type === 'job') {
    return (
      <div className="Item__meta">
        <TimeAgo date={time} className="Item__time" />
      </div>
    )
  }

  return (
    <div className="Item__meta">
      <span className="Item__score">
        {score} point{pluralise(score)}
      </span>{' '}
      <span className="Item__by">
        by <Link to={`/user/${by}`}>{by}</Link>
      </span>{' '}
      <TimeAgo date={time} className="Item__time" />
      {' | '}
      <Link to={`/${type}/${id}`}>
        {descendants > 0 ? descendants + ' comment' + pluralise(descendants) : 'discuss'}
      </Link>
    </div>
  )
}

const ItemTitle = ({ id, type, time, text, title, url, by, score, dead, descendants }) => {
  const hasURL = !!url
  const itemTitle = dead ? `[dead] ${title}` : (hasURL ? <a href={url}>{title}</a>
    : <Link to={`/${type}/${id}`}>{title}</Link>)

  return (
    <div className="Item__title">
      {itemTitle}
      {hasURL && ' '}
      {hasURL && <span className="Item__host">({host(url)})</span>}
    </div>
  )
}

const Item = ({ item }) => (
  <li className={classnames('ListItem', { 'ListItem--dead': item.dead })}>
    <ItemTitle {...item} />
    <ItemMeta {...item} />
  </li>
)

export default Item
