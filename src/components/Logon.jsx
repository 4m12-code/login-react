import React from 'react'
import imgAvatar from "../img/user.png" //Importar imagen para el formulario
import { Form } from './Form' //Importar Formulario

export const Logon = () => {
    return(
        <div className="main-box"> {/* Unir la imagen con el formulario */}
            <img srcSet={imgAvatar} className="avatar" alt="avatar"/>
            <Form/>
        </div>
    )
}  