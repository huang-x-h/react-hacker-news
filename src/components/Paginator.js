import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { constants } from '../utils'

const Paginator = ({ page = 1, total, topic }) => {
  const maxPage = total / constants.pageSize;
  const hasNext = page < maxPage;

  return (
    <div className="Paginator">
      {page > 1 && <span className="Paginator__prev">
        <Link to={`/${topic}/${page - 1}`}>Prev</Link>
      </span>}
      {page > 1 && hasNext && ' | '}
      {hasNext && <span className="Paginator__next">
        <Link to={`/${topic}/${page + 1}`}>More</Link>
      </span>}
    </div>
  )
}

export default Paginator;
