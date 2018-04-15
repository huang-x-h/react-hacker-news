import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Item from '../components/Item'
import Paginator from '../components/Paginator'
import Spinner from '../components/Spinner'
import { fetchStories } from '../actions'
import { constants } from '../utils';

class ItemsList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchStories(this.props.topic, 1))
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.topic !== nextProps.topic
      || this.props.match.params.page !== nextProps.match.params.page) {
      this.props.dispatch(fetchStories(nextProps.topic, this.props.match.params.page))
    }
  }

  render() {
    const stories = this.props.stories || [];
    const total = this.props.ids && this.props.ids.length;
    const page = Number(this.props.match.params.page) || 1;
    const startIndex = (page - 1) * constants.pageSize;

    return (
      <div className="Items">
        <ol className="Items__list" start={startIndex + 1}>
          {stories.map((item => (
            <Item item={item} key={item.id} />
          )))}
        </ol>
        <Paginator topic={this.props.topic} total={total} page={page} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stories: state.stories[ownProps.topic],
    ids: state.list[ownProps.topic]
  }
}

export default withRouter(connect(mapStateToProps)(ItemsList));
