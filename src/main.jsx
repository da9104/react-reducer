import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import App from './App'
import Layout from './Layout';
import NotFound from './NotFound'
import ErrorPage from './ErrorPage';
import ReducerExample from './ReducerExample'
import './index.css'

const router = createBrowserRouter([
  {
    path: "react-reducer",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <App />},
      {path: 'example', element: <ReducerExample />}
    ]
  },
  { path: "*", element: <NotFound /> },
 ],
 { basename: import.meta.env.PUBLIC_URL }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
