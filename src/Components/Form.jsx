import React, { useState } from 'react'
import MsgError from './MsgError'
import Card from './Card'

const Form = () => {
    const user = {
        name: "",
        email: "",
        sport: "",
    }
    const [member, setMember] = useState(user)
    const [show, setShow] = useState(0)

    /* ------------------------------------------------------------------------ */
    /* ----------------------------- Validaciones ----------------------------- */

    const validateName = (data) => {
        let newData = data.trim()
        if (newData.length >= 3){
            setMember({ ...member, name: newData})
            return true
        } else {
            return false
        }

    }

    const validateEmail = (data) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (regex.test(data)){
            setMember({ ...member, sport: data})
            return true
        } else {
            return false
        }
    }

    const validateSport = (data) => {
        let newData = data.trim()
        if (newData.length >= 6){
            setMember({ ...member, sport: newData})
            return true
        } else {
            return false
        }
    }


    /* ------------------------------------------------------------------------ */

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(member);
        const validatedName = validateName(member.name)
        const validatedEmail = validateEmail(member.email)
        const validatedSport = validateSport(member.sport)
        if (!validatedName || !validatedEmail || !validatedSport) {
            setShow(2)
            console.log("no entro");
        } else {
            setShow(1)
            console.log("entro");
        }
    }

    const handleName = (e) => {
        setMember({ ...member, name: e.target.value})
    }

    const handleEmail = (e) => {
        setMember({ ...member, email: e.target.value})
    }

    const handleSport = (e) => {
        setMember({ ...member, sport: e.target.value})
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">¿Cuál es tu nombre? </label>
            <input type="text" className="name" id="name" onChange={handleName}/>
            
            <label htmlFor="email"> ¿Cuál es tu Email? </label>
            <input type="email" className="email" id="email" onChange={handleEmail}/>

            <label htmlFor="sport"> Dinos tu deporte favorito </label>
            <input type="text" className="sport" id="sport" onChange={handleSport}/>

            <button type="submit" className='btn_enviar'>Enviar</button>
        </form>
        { show == 2 ? (<MsgError />) : show == 1 && (<Card 
                name={member.name}
                email={member.email}
                sport={member.sport}
        />)
        }
    </div>
  )
}

export default Form