import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => (
  <div className="App__header">
    <Link to="/top" className="App__homelinkicon"><img src="/img/logo.png" width="16" height="16" alt="" /></Link>{' '}
    <Link to="/top" className="App__homelink">React HN</Link>{' '}
    <NavLink to="/top" activeClassName="active">top</NavLink>{' | '}
    <NavLink to="/new" activeClassName="active">new</NavLink> {' | '}
    <NavLink to="/show" activeClassName="active">show</NavLink>{' | '}
    <NavLink to="/ask" activeClassName="active">ask</NavLink>{' | '}
    <NavLink to="/job" activeClassName="active">jobs</NavLink>
  </div>
)

export default Header
