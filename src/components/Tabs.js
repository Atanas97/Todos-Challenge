import { NavLink } from "react-router-dom";

import classes from './Tabs.module.css'

const Tabs = () => {
  return (
    <nav className={classes.tabs}>
      <ul>
        <NavLink to="/all" className={({ isActive }) => isActive ? classes.active : null}>All</NavLink>
        <NavLink to="/active" className={({ isActive }) => isActive ? classes.active : null}>Active</NavLink>
        <NavLink to="/completed" className={({ isActive }) => isActive ? classes.active : null}>Completed</NavLink>
      </ul>
    </nav>
  )
}

export default Tabs