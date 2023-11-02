import { useContext, useEffect, useState } from 'react'
import classes from './SearchbarForm.module.css'
import TodosContext from '../context/GlobalState'


const SearchbarForm = ({placeholder, type}) => {
    const [todo, setTodo] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
    }, [todo])

    const { todos } = useContext(TodosContext)

    console.log(todos)

    return (
    <form className={classes.searchbar} onSubmit={handleFormSubmit}>
        <input 
            placeholder={placeholder} 
            onChange={(e) => setTodo(e.target.value)} 
            />
        <button type={type ? type : 'button'}>Add</button>
    </form>
  )
}

export default SearchbarForm