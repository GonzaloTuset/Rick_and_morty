const validation = (userData, errors, setErrors) => {
  if (!userData.username) {
    setErrors({...errors, username: "Por favor completa este campo."});
  } else if (userData.username.length > 35) {
    setErrors({...errors, username: "No puede superar los 35 caracteres."});
  } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/.test(userData.username)) {
    setErrors({...errors, username: "Introduce una dirección de correo electrónico válida."});
  } else {
    setErrors({...errors, username: ""});
  }
  if(userData.password.length < 6 || userData.password.length > 10){
    setErrors({...errors,password:'longitud de password invalida'})
  }else if(!/\d/.test(userData.password)){
    setErrors({...errors,password:"debe contener alemenos  6 caracteres numero y letras"})
  }
};

export default validation;