import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import User from '../components/User'
import Spinner from '../components/Spinner'
import { fetchUser } from '../actions'

class UserProfile extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  componentWillReceiveProps(prevProps, nextProps) {
    if (nextProps.match && (prevProps.match.params.id !== nextProps.match.params.id))
      this.props.fetchUser(nextProps.match.params.id);
  }

  render() {
    const user = this.props.user
    const id = this.props.match.params.id

    if (user) {
      return <User {...user} />
    } else {
      return (
        <div className="UserProfile UserProfile--loading">
          <h4>{id}</h4>
          <Spinner size="20" />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    fetchUser: (id = ownProps.match.params.id) => {
      dispatch(fetchUser(id))
    }
  }
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile))
