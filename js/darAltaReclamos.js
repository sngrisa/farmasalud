
let darAltaReclamos = () => {
    event.preventDefault();
    let nombre = String(document.getElementById("nombre").value);
    let apellido = String(document.getElementById("apellido").value);
    let email = String(document.getElementById("email").value);
    let confirmEmail = document.getElementById("confirmEmail").value;
    let estado = String(document.getElementById("estado").value);
    let confirmedUser = confirmEmailUser(confirmEmail); 
    console.log(confirmedUser);
}

let confirmEmailUser = (confirm) =>{
    return (confirm.trim().length()<=0) ? false : true;
}