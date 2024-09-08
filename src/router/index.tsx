import { createBrowserRouter } from 'react-router-dom';
import App from '../App.tsx'
import ErrorPage from '../error-page.tsx';
import Search from '../pages/search/index.tsx';
import Todo from '../pages/todo/index.tsx';
import Welcome from '../pages/welcome/index.tsx';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Welcome />
        },
        {
          path: '/search',
          element: <Search />
        },
        {
          path: '/todo',
          element: <Todo />
        }
      ],
      errorElement: <ErrorPage />
    }
  ]);
  
export default router;