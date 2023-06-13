// Library Basic 
import React from 'react'
// Library Export 
import {Route,Routes} from 'react-router-dom'

import {Box} from '@mui/material'

// Import Style 
import './app.css'

// Import Components 
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail';

const App = () => {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m='auto'>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/exercise/:id' element={<ExerciseDetail/> } />
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App
