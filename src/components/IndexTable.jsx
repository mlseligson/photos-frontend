import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom';

export async function indexLoader () {
  const apiUrl = 'http://localhost:3000/photos.json';

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (e) {
    return [];
  }
}

export default () => {
  const [photos, setPhotos] = useState([]);

  const data = useLoaderData();

  useEffect(() => {
    setPhotos(data);
  }, [data]);

  return (
    <>
      <table className="index">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Width</th>
            <th colSpan="3">Height</th>
          </tr>
        </thead>
        
        <tbody>
          {photos && photos.length && photos.map(p =>
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.width}</td>
              <td>{p.height}</td>
              <td><a href={`/view/${p.id}`}>View</a></td>
              <td><a href={`/edit/${p.id}`}>Edit</a></td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
};