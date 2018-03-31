import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

const Paginator = ({ page, size = 20, total, topic }) => {
  const maxPage = total / size;
  const hasNext = page >= maxPage;

  return (
    <div className="Paginator">
      {page > 1 && <span className="Paginator__prev">
        <Link>Prev</Link>
      </span>}
      {page > 1 && hasNext && ' | '}
      {hasNext && <span className="Paginator__next">
        <Link>More</Link>
      </span>}
    </div>
  )
}

export default Paginator;
