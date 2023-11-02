
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TodosContext from './context/GlobalState'

//pages
import All from './pages/All'
import Active from './pages/Active'
import Completed from './pages/Completed'
import RootLayout from "./pages/RootLayout";


const router = createBrowserRouter([
      {path: '/', element: <RootLayout />, children: [
      {path: '/all', element: <All />},
      {path: '/active', element: <Active />},
      {path: '/completed', element: <Completed />}
    ]},
    
])

function App() {
  return (
    <TodosContext.Provider value={{ todos:[] }}>
      <RouterProvider router={router} />
    </TodosContext.Provider>
  );
}

export default App;
