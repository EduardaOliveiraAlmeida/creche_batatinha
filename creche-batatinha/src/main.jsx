import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'

import Home from "./routes/Home";
import Cadastro from "./routes/Cadastro"
import Lista from "./routes/Lista"
import Notas from "./routes/Notas"

const router = createBrowserRouter([
/*   {
    path: "/",
    element: <Home />
  },
  {
    path: "cadastro",
    element: <Cadastro />
  },
  {
    path: "lista",
    element: <Lista />
  },
  {
    path: "notas",
    element: <Notas />
  } */

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "cadastro",
        element: <Cadastro />
      },
      {
        path: "lista",
        element: <Lista />
      },
      {
        path: "notas",
        element: <Notas />
      }
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
