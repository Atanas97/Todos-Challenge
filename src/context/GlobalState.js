import { createContext } from "react";

//initial state
const TodosContext = createContext({
    todos: []
})

export default TodosContext