import { createBrowserRouter } from 'react-router'
import RootLayout from '../pages/RootLayout'
import HomePage from '../pages/HomePage'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
    ],
  },
])
