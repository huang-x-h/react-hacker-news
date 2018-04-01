import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from '../components/User'
import Spinner from '../components/Spinner'
import { fetchUser } from '../actions'

class UserProfile extends Component {
  state = {}

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.match.params.id !== prevState.id) {
      return {
        id: nextProps.match.params.id
      };
    }

    return null
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  componentDidUpdate() {
    if (this.state.id) this.props.fetchUser(this.state.id);
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

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
