import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First'
import Registration from './components/Registration'
import Tabs from './components/Tabs'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasic from './components/StateBasic'
import Counter from './components/Counter'
import Welcome from './components/Welcome'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <First/> */}
      {/* <Registration/> */}
      {/* <Tabs/> */}
      
      <Navbar/>
       <Routes>
        <Route path='/' element={<First/>}/>
        <Route path='/reg' element={<Registration/>}/>
        <Route path='/tab' element={<Tabs/>}/>
        <Route path='/s' element={<StateBasic/>}/>
        <Route path='/c' element={<Counter/>}/>
        <Route path='/h' element={<Welcome/>}/>
       </Routes>
    </>
  )
}

export default App
