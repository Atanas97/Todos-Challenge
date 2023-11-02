import classes from './Header.module.css'

const Header = ({title}) => {
  return (
    <header className={classes.header}>
        <h1>{title}</h1>
    </header>
  )
}

export default Header