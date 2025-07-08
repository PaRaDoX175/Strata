import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './pages/Main/Main.jsx'
import Contacts from './pages/Contacts/Contacts.jsx'
import Projects from './pages/Projects/Projects.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'


const router = createBrowserRouter([
  { path: '/', element: <Main /> },
  { path: '/contacts', element: <Contacts /> },
  { path: '/about-us', element: <AboutUs /> },
  { path: '/projects', element: <Projects/> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
