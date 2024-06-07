import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import PhotoDetails, { photoLoader } from './components/PhotoDetails.jsx'
import IndexTable, { indexLoader } from './components/IndexTable.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/index",
        element: <IndexTable />,
        loader: indexLoader
      },{
        path: "/view/:id",
        element: <PhotoDetails />,
        loader: photoLoader,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
