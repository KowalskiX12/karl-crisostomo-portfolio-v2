import type { RouteObject } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import HomePage from '../pages/HomePage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [{ path: '', element: <HomePage /> }],
  },
];

export default routes;
