import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Item from '../components/Item'
import Paginator from '../components/Paginator'
import { fetchStories } from '../actions'

class ItemsList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchStories(this.props.topic))
  }

  componentWillReceiveProps(prevProps, nextProps) {
    if (prevProps.topic !== nextProps.topic) {
      this.props.dispatch(fetchStories(nextProps.topic))
    }
  }

  render() {
    const stories = this.props.stories || [];

    return (
      <div className="Items">
        <ol className="Items__list">
          {stories.map((item => (
            <Item item={item} key={item.id} />
          )))}
        </ol>
        <Paginator />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    stories: state.stories[props.topic]
  }
}

export default withRouter(connect(mapStateToProps)(ItemsList));
