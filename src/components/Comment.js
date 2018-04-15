import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { timeFormat } from '../utils'
import { fetchComments } from '../actions'
import TimeAgo from './TimeAgo'

const CommentMeta = ({ comment, collapsed, toggleCollapse }) => {
  return (
    <div className="Comment__meta">
      <span className="Comment__collapse" onClick={toggleCollapse} tabIndex="0">
        [{collapsed ? '+' : '–'}]
      </span>
      <Link to={`/user/${comment.by}`} className="Comment__user">{comment.by}</Link>{' '}
      <TimeAgo date={comment.time} />
      {comment.dead && ' | [dead]'}
    </div>
  )
}

const CommentText = ({ comment }) => (
  <div className="Comment__text">
    {(!comment.dead) ? <div dangerouslySetInnerHTML={{ __html: comment.text }} /> : '[dead]'}
  </div>
)

class Comment extends Component {
  state = {
    collapsed: false
  };

  componentDidMount() {
    this.props.dispatch(fetchComments(this.props.comment.kids));
  }

  render() {
    const level = this.props.level;
    const comment = this.props.comment;
    const collapsed = this.state.collapsed;

    const className = classnames('Comment Comment--level' + level, {
      'Comment--collapsed': collapsed,
      'Comment--dead': comment.dead
    });

    return (
      <div className={className}>
        <div className="Comment__content">
          <CommentMeta comment={comment} collapsed={collapsed} toggleCollapse={this.toggleCollapse} />
          <CommentText comment={comment} />
        </div>
        {comment.kids && <div className="Comment__kids">
        </div>}
      </div>
    )
  }

  toggleCollapse = () => {
    // this.setState((prevState) => (
    //   collapsed: !prevState.collapsed
    // ))
  }
}

export default Comment;
