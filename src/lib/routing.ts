import { createBrowserRouter } from 'react-router-dom';
import routes from '../router/routes';

export const CreateAppRouter = () => {
  return createBrowserRouter(routes);
};
