import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import Layout from './Layout';
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {index: true, path: '/', element: <App />},

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} basename={process.env.PUBLIC_URL} />
  </StrictMode>,
)
