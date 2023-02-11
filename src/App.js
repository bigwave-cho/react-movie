import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/movie/:id',
    element: <Detail />,
    loader: async ({ params }) => {
      let res;
      await (
        await fetch(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}`
        )
      )
        .json()
        .then((data) => (res = data));
      return { res };
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
