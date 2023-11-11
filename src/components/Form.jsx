/*
    Componente para generar la strucutra del formulario, haciendo uso de los demás componentes.
*/

/*Importar componentes*/
import { A } from "./a"
import { Label } from "./Label"
import { Input } from "./Input"
import { Button } from "./Button"
import { Titulo } from "./Titulo"

export const Form = () => {
    return(
    <form id="form_login"> {/*Formulario con los componentes necesarios*/}
        <Titulo titulo="Iniciar Sesión"/>
        <Label input="username" nombre="Usuario"/>
        <Input tipo="text" name="username" placeholder="ingrese el usuario"/>
        <Label input="password" nombre="Contraseña"/>
        <Input tipo="password" name="password" placeholder="ingrese la contraseña"/>
        <Button type="submit" value="Ingresar"/>
        <A direction="#" text="Olvidó su contraseña"/><br/>
        <A direction="#" text="Registrarse"/>
    </form>
    )
}