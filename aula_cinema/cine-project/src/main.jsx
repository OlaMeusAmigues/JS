import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Sobre from './Pages/Sobre.jsx'
import Filmes from './Pages/Filmes.jsx'
import Contato from './Pages/Contato.jsx'
import PageNotFound from './Pages/PageNotFound.jsx'
import MovieDetails from './Componentes/MoveDetails/MoveDetail.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true, element: <Home/>
      },
      {
        path: 'sobre',
        element: <Sobre/>
      },
      {
        path:'filmes',
        element: <Filmes/>
      },
      {
        path: 'contato',
        element: <Contato/>
      },
      {
        path: 'filmes/:id',
        element: <MovieDetails/>
      },
      {
        path: '*',
        element: <PageNotFound/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
