import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Item from '../components/Item';
import Comment from '../components/Comment';
import Spinner from '../components/Spinner';
import { fetchComments } from '../actions';

class CommentsList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchComments(this.props.item.kids));
  }

  render() {
    const { match } = this.props;
    const item = this.props.item;
    const comments = this.props.comments;

    if (!comments) {
      return (
        <div className={'Comment Comment--loading Comment--level0'}>
          <Spinner size="20" />
        </div>
      )
    } else {
      return (
        <Fragment>
          <Item />
          <div className="Item__kids">
            {comments.map(id => (
              <Comment key={id} id={id} level={0} />
            ))}
          </div>
        </Fragment>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  comments: state.comments
});

export default withRouter(connect(mapStateToProps)(CommentsList));
