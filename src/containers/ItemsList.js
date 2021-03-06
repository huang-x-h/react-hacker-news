import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Item from '../components/Item'
import Paginator from '../components/Paginator'
import Spinner from '../components/Spinner'
import { fetchStories, FETCH_STORIES } from '../actions'
import { constants } from '../utils';
import { createLoadingSelector } from '../redux/api/selectors';

class ItemsList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchStories(this.props.match.params.topic, 1))
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location !== nextProps.location) {
      this.props.dispatch(fetchStories(nextProps.match.params.topic, nextProps.match.params.page));
    }
  }

  render() {
    const { isFetching, stories = [], match, ids } = this.props;
    const total = ids && ids.length;
    const page = Number(match.params.page) || 1;
    const startIndex = (page - 1) * constants.pageSize;

    return (
      <div className="Items">
        {isFetching ? (<Spinner />) : (
          <ol className="Items__list" start={startIndex + 1}>
            {stories.map((item => (
              <Item item={item} key={item.id} />
            )))}
          </ol>
        )}
        <Paginator topic={match.params.topic} total={total} page={page} />
      </div>
    )
  }
}

const loadingSelector = createLoadingSelector([FETCH_STORIES]);

const mapStateToProps = (state, ownProps) => {
  let topic = ownProps.match.params.topic;

  return {
    stories: state.stories[topic],
    ids: state.list[topic],
    isFetching: loadingSelector(state)
  }
}

export default withRouter(connect(mapStateToProps)(ItemsList));
