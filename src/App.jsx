import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Game from './components/Game'
import Empty from './Empty'
import Adhkar from './components/game/Adhkar'
import Routine from './components/game/Routine'
import Story from './components/Story'
import Priciples from './components/Priciples'
import Values from './components/Values'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Empty/>}/>
        <Route path='/games' element={<Game/>}/>
        <Route path='/games/adhkar' element={<Adhkar/>}/>
        <Route  path='/games/routine' element={<Routine/>}/>
        <Route path='/story' element={<Story/>}/>
        <Route path="/principles" element={<Priciples/>} />
        <Route path="/values" element={<Values/>} />
    </Routes>
  )
}

export default App