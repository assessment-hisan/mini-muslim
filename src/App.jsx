import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Game from './components/Game'
import Empty from './Empty'
import Adhkar from './components/game/Adhkar'
import Routine from './components/game/Routine'
import Story from './components/Story'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Empty/>}/>
        <Route path='/games' element={<Game/>}/>
        <Route path='/games/adhkar' element={<Adhkar/>}/>
        <Route  path='/games/routine' element={<Routine/>}/>
        <Route path='/story' element={<Story/>}/>
    </Routes>
  )
}

export default App