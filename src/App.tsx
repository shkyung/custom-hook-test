import * as React from 'react'
import Viewer from './Viewer'
import SidePanel from './SidePanel'
import {useState} from "react";
function App() {
  const [appFlg, setAppFlg] = useState<boolean>(false)
  return (
    <div>
      <Viewer/>
      <SidePanel appState={appFlg} setState={setAppFlg}/>
    </div>
  )
}

export default App
