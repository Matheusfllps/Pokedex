import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Home } from './routes/Home.jsx';

import './index.css'
import PokemonNew from './routes/PokemonNew.jsx';
import PokemonFeature from './routes/PokemonFeature.jsx';


const router = createBrowserRouter([
  { element : <App />,
    children: [
  { path: "/", element: <Home /> },
  { path: "/new", element: <PokemonNew/> },
  { path: "/feature", element: <PokemonFeature/> },

]}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
