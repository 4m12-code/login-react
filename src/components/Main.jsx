/*
    Componente principal con toda la estrucutura de Login
*/
import React from 'react'
import {Logon} from "./Logon"
import Slider from './Slider'
import fondo1 from "../img/Login.png"
import fondo3 from "../img/Registrar.png"
import fondo4 from "../img/Búsqueda.png"
import fondo2 from "../img/fondo4.jpg"

export const Main = () => { //Imagenes para el slider
    const mockImagenes = [
		fondo1,
		fondo3,
        fondo4
	];

    return(
        <div>
            <div className="titulo">
                <h1>Bienvenido al SRCA</h1>
            </div>
            <div className="general">
                <div className="section">
                    <div class="info">
                        <h2>Información</h2>
                    </div>
                    <Slider imagenes={mockImagenes}/>
                </div>
                <div class="login">
                    <Logon/>
                </div>
            </div>
        </div>
    )
}