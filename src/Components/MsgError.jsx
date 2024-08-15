import React from 'react'

const MsgError = () => {
    const estiloError = {color:"red"}
  return (
    <div>
        <p style={estiloError}>Por favor chequea que la información sea correcta.</p>
    </div>
  )
}

export default MsgError