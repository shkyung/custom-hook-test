import * as React from 'react'
import { useControl } from './useControl'

const style = {
  height: '500px',
}

export default function SidePanel({appState, setState}: {appState:boolean, setState: (state: boolean) => void}) {
  const {
    control,
    flip,
    invert,
    updateControl,
    updateFlip,
    updateInvert,
  } = useControl()
  console.error('------- SidePanel rendering')
  return (
    <div style={style}>
      <span>control : {control}</span>
      <br />
      <span>invert : {invert.toString()}</span>
      <br />
      <span>flip : {flip.toString()}</span>
      <br /><br/>
      <button onClick={() => updateControl('pan')}>pan</button>
      <button onClick={() => updateControl('adjust')}>adjust</button>
      <button onClick={() => updateInvert(!invert)}>invert</button>
      <button onClick={() => updateFlip(!flip)}>flip</button>
      <button onClick={() => setState(!appState)}>set App's state</button>
    </div>
  )
}
