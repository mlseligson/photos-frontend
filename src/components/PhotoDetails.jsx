import axios from "axios";
import { useLoaderData } from "react-router-dom";

export async function photoLoader({params}) {
  const apiUrl = `http://localhost:3000/photos/${params.id}.json`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (e) {
    return null;
  }
}

export default () => {
  const photo = useLoaderData();

  return (
    <>
      <h3>[#{photo.id}] {photo.name}</h3>
      {photo.width}px by {photo.height}px
    </>
  )
}