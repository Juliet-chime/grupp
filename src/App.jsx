import './App.css'
import { baseRoutes } from './route/routes'
import { createBrowserRouter, RouterProvider } from 'react-router'

function App() {

  const routes = createBrowserRouter(baseRoutes)

  return (
    <div className='h-[100vh]'>
       <RouterProvider router={routes} />
    </div>
  )
}

export default App
