import { createBrowserRouter } from 'react-router'
import RootLayout from '../pages/RootLayout'
import HomePage from '../pages/HomePage'
import Catering from '../pages/Catering'
import ComingSoon from '../components/ComingSoon'
import MenuComingSoon from '../components/MenuComingSoon'

export const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/menu', element: <MenuComingSoon/> },
        { path: '/reservations', element: <ComingSoon /> },
        { path: '/functions', element: <ComingSoon /> },
        { path: '/order', element: <ComingSoon /> },
        { path: '/events', element: <ComingSoon /> },
        { path: '/catering', element: <Catering /> }
      ],
    }
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);