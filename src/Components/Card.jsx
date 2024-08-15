import React from 'react'

const Card = ({name, email, sport}) => {
    const estilo = {border: "1px solid white", width: "400px", margin:"2em auto"}
  return (
    <div style={estilo}>
        <h2>Hola {name}!</h2>
        <h3>Bienvenido al club Los Campeones, donde podras practicar tu deporte favorito, enviaremos toda la información a tu correo {email}</h3>
        <h2>Disfruta tus practicas de: {sport}</h2>
    </div>
  )
}

export default Card