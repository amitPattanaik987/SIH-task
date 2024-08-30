import './App.css'
import Cancel from './components/Cancel'
import Payment from './components/Payment/Payment'
import Success from './components/Success'
import Userdata from './components/user-data/Userdata'
import Mentorprofile from './Mentor-page/Mentor-page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { itemsContext } from './store/Store'
// import { useState } from 'react'

function App() {

//   const [formData, setFormData] = useState({
//     name: '',
//     city: '',
//     email: '',
//     phone: '',
//     college: '',
//     domain: '',
//     lectureTime: '',
//     skills: ''
// });

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/mentor' element={<Mentorprofile />}></Route>
          <Route path='/userdata' element={<Userdata />}></Route>
          <Route path='/payment' element={<Payment />} />
          <Route path='/success' element={<Success />} />
          <Route path='/cancel' element={<Cancel />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
