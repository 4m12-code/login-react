import React from 'react'
import {Logon} from "./Logon"
import Slider from './Slider'
import fondo1 from "../img/fondo.jpg"
import fondo3 from "../img/fondo2.jpg"
import fondo4 from "../img/fondo3.jpg"
import fondo2 from "../img/fondo4.jpg"
export const Main = () => {
    const mockImagenes = [
		fondo1,
		fondo2,
		fondo3,
        fondo4
	];

    return(
        // <div ClassName="principal" style={
        //     {
        //         backgroundImage:`url(${Fondor})` ,
        //         display: "block",
        //         alignItems: "center",
        //         backgroundSize: "cover",
        //         color: "white",
        //         backdropFilter: "blur(5px)",
        //         boxShadow: "inset 0 0 0 .5vw #313131",
        //         width:"100vw",
        //         height:"100vh",
        //         margin: "0",
        //         padding: "0"
        //     }}>
        //     <div className="titulo">
        //         <h1>Bienvenido al SRCA</h1>
        //     </div>
        //     <Slider/>
        //     <Logon/>
        // </div>
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