import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import TimeAgo from './TimeAgo'
import Spinner from './Spinner'
import { pluralise } from '../utils'

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
      {text}
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
      {hasURL && <span className="Item__host">({url})</span>}
    </div>
  )
}

class Item extends Component {
  render() {
    if (!this.props.item) {
      return (
        <li className="ListItem ListItem--loading">
          <Spinner />
        </li>
      )
    }

    return (
      <li className={classnames('ListItem', { 'ListItem--dead': this.props.item.dead })}>
        <ItemTitle {...this.props.item} />
        <ItemMeta {...this.props.item} />
      </li>
    )
  }
}

export default Item
