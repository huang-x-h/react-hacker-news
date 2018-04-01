import React from 'react'
import PropTypes from 'prop-types'
import TimeAgo from './TimeAgo'

const User = ({ id, created, karma, delay, about }) => {
  return (
    <div className="UserProfile">
      <h4>{id}</h4>
      <dl>
        <dt>Created</dt>
        user <dd><TimeAgo date={created} /> ({new Date(created * 1000).toDateString()})</dd>
        <dt>Karma</dt>
        <dd>{karma}</dd>
        <dt>Delay</dt>
        <dd>{delay}</dd>
        {about && <dt>About</dt>}
        {about && <dd><div className="UserProfile__about" dangerouslySetInnerHTML={{ __html: about }} /></dd>}
      </dl>
    </div>
  )
}

User.propTypes = {
  id: PropTypes.string,
  delay: PropTypes.number,
  created: PropTypes.number,
  karma: PropTypes.number,
  about: PropTypes.string
}

export default User
