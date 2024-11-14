import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootPage from "./pages/Root.jsx"
import HomePage from "./pages/Home.jsx"
import ContactPage from "./pages/Contact.jsx"
import ProjectPage from "./pages/Project.jsx"
import PfPage from "./pages/Portfolio.jsx"


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage/>,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: 'contact',
        element: <ContactPage/>,
      },
      {
        path: 'project/:id',
        element: <ProjectPage/>,
      },
      {
        path: 'portfolio',
        element: <PfPage/>,
      },
    ]
  }
])




export default function App() {
  return (
    <RouterProvider router={router} />
  )
}