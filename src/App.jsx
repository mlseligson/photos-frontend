
import './App.css'
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <div className='main'>
        <Outlet />
      </div>
    </>
  )
}

export default App
