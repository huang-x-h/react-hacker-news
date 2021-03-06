import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import User from '../components/User';
import Spinner from '../components/Spinner';
import { fetchUser, FETCH_USER } from '../actions';
import { createLoadingSelector } from '../redux/api/selectors';

class UserProfile extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { user, match, isFetching } = this.props;

    if (isFetching) {
      return (
        <div className="UserProfile UserProfile--loading">
          <h4>{match.params.id}</h4>
          <Spinner size="20" />
        </div>
      )
    } else {
      return <User {...user} />;
    }
  }
}

const loadingSelector = createLoadingSelector([FETCH_USER]);

const mapStateToProps = (state) => ({
  user: state.user,
  isFetching: loadingSelector(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: (id = ownProps.match.params.id) => {
    dispatch(fetchUser(id))
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile))
