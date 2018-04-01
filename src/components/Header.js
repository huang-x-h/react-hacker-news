import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => (
  <div className="App__header">
    <Link to="/news" className="App__homelinkicon"><img src="img/logo.png" width="16" height="16" alt="" /></Link>{' '}
    <NavLink to="/news" activeClassName="active" className="App__homelink">React HN</NavLink>{' '}
    <NavLink to="/top" activeClassName="active">top</NavLink>{' | '}
    <NavLink to="/new" activeClassName="active">new</NavLink> {' | '}
    <NavLink to="/show" activeClassName="active">show</NavLink>{' | '}
    <NavLink to="/ask" activeClassName="active">ask</NavLink>{' | '}
    <NavLink to="/job" activeClassName="active">jobs</NavLink>
  </div>
)

export default Header
