/*
    Componente para generar los inputs, es reutilizable.
*/
export const Input = (props) => {
    return(
        <input type={props.tipo} name={props.name} placeholder={props.placeholder} required/>
    );
}