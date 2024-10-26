import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootPage from "./pages/Root.jsx"
import HomePage from "./pages/Home.jsx"
import ContactPage from "./pages/Contact.jsx"


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
    ]
  }
])


export default function App() {

  return (
    <RouterProvider router={router} />
  )
}