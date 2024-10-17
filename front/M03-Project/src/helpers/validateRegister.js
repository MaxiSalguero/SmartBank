export const validateRegister = (input) => {
  const { name, email, birthdate, dni, username, password } = input;

  const validarName = (name) => {
    const regex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    return regex.test(name);
  };

  const validarEmail = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  const validarDni = (dni) => {
    const regex = /^\d{7,10}$/;
    return regex.test(dni);
  };

  const validarBirthdate = (birth) => {
    const regex = /^(19[2-9][4-9]|200[0-6])-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
    return regex.test(birth);
  };

  const validarUser = (user) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5,}$/;
    return regex.test(user);
  };

  const validarPassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[.,!@#$%^&*()_+])[A-Za-z\d.,!@#$%^&*()_+]{8,}$/;
    return regex.test(password);
  };

  const errors = {};
  
  !validarName(name) &&
  (errors.name = "El nombre ingresado no es valido");
  
  !validarEmail(email) &&
  (errors.email = "El email ingresado no es valido");
  
  !validarDni(dni) &&
  (errors.dni = "El dni ingresado no es valido");
  
  !validarBirthdate(birthdate) &&
  (errors.birthdate = "La fecha de nacimiento no es valida");
  
  !validarUser(username) &&
    (errors.username = "El nombre de usuario no es valido");
  
  !validarPassword(password) &&
    (errors.password = "La contraseña ingresada no es valida");

  console.log(birthdate);
  
  return errors;
};
