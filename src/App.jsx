import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  let photos;
  (async () => {
    let photos = await axios.get('http://localhost:3000/photos.json');

  })();



  return (
    <>
      <h2>photos-frontend</h2>

      <IndexTable photos={photos} />
    </>
  )
}

function IndexTable(props) {
  const photos = ;

  return (
    <>
      <table class="index">
        <tr>
          <th>Name</th>
          <th>Width</th>
          <th>Height</th>
        </tr>
        {props.photos.map(p => {
          return (
            <tr>
              <td>{p.name}</td>
              <td>{p.width}</td>
              <td>{p.height}</td>
            </tr>
          )
        })}
      </table>
    </>
  )
}

export default App
