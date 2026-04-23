import { createBrowserRouter } from 'react-router'
import RootLayout from '../pages/RootLayout'
import HomePage from '../pages/HomePage'
import ComingSoon from '../components/ComingSoon'

export const router = createBrowserRouter(
  [ 
    {
      element: <RootLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/menu', element: <ComingSoon /> },
        { path: '/reservations', element: <ComingSoon /> },
        { path: '/functions', element: <ComingSoon /> },
        { path: '/order', element: <ComingSoon /> },
        { path: '/events', element: <ComingSoon /> },
      ],
    }
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);