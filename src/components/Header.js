import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'

const Header = () => (
  <div className="App__header">
    <Link to="/news" className="App__homelinkicon"><img src="img/logo.png" width="16" height="16" alt="" /></Link>{' '}
    <NavLink to="/news" activeClassName="active" className="App__homelink">React HN</NavLink>{' '}
    <NavLink to="/tops" activeClassName="active">top</NavLink>{' | '}
    <NavLink to="/news" activeClassName="active">new</NavLink> {' | '}
    <NavLink to="/shows" activeClassName="active">show</NavLink>{' | '}
    <NavLink to="/asks" activeClassName="active">ask</NavLink>{' | '}
    <NavLink to="/jobs" activeClassName="active">jobs</NavLink>
  </div>
)

export default Header
