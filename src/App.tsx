import { RouterProvider } from 'react-router-dom';
import '@/styles/App.scss';
import { CreateAppRouter } from './lib/routing';
import { NavigationProvider } from './context/NavigationContext';

const router = CreateAppRouter();
function App() {
  return (
    <NavigationProvider>
      <div className="background" />
      <RouterProvider router={router} />
    </NavigationProvider>
  );
}

export default App;
