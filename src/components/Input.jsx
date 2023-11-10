export const Input = (props) => {
    return(
        <input type={props.tipo} name={props.name} placeholder={props.placeholder} required/>
        // type="text" name="username" placeholder="Ingresa nombre de usuario"
    );
}