import './App.css'
import Userdata from './components/user-data/Userdata'
import Mentorprofile from './Mentor-page/Mentor-page'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/mentor' element={<Mentorprofile/>}></Route>
        <Route path='/userdata' element={<Userdata/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
