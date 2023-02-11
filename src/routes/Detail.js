import { useLoaderData } from 'react-router-dom';

function Detail() {
  const {
    res: {
      data: { movie },
    },
  } = useLoaderData();
  console.log(movie);
  return <h1>{movie.id}</h1>;
}
export default Detail;
