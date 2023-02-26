import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CycleNames from './Components/CycleNames';


function App() {

  const names = ["Alice", "Bob", "Charlie", "Dave"];
  
  return(<div className='container'>

<CycleNames names={names} />
</div>

  )
}

export default App
