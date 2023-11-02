import classes from '../components/Todos.module.css'

const All = () => {
    return (
    <div className={classes.todos}>
        <label htmlFor='todo'>
          <input type="checkbox" id='todo' />
          <span className={classes.checkbox}></span>
          <span>Todo text</span>
        </label>
    </div>
  )
}

export default All