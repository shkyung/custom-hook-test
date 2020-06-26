import * as React from 'react'
import { useControl } from './useControl'

const style = {
  height: '500px',
}

export default function Viewer() {
  const {
    control,
    flip,
    invert,
    updateControl,
    updateFlip,
    updateInvert,
  } = useControl()

   console.error('------- Viewer rendering')
  return (
    <div style={style}>
      <span>control : {control}</span>
      <br />
      <span>invert : {invert.toString()}</span>
      <br />
      <span>flip : {flip.toString()}</span>
      <br />
    </div>
  )
}
