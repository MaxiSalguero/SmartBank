export const validateLogin = (input) => {
    const { username, password } = input;
  
    const validarUser = (user) => {
      const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5,}$/;
      return regex.test(user);
    };
  
    const validarPassword = (pass) => {
      const regex =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[.,!@#$%^&*()_+])[A-Za-z\d.,!@#$%^&*()_+]{8,}$/;
      return regex.test(pass);
    };
  
    const errors = {};
  
    !validarUser(username) &&
      (errors.username = "El nombre de usuario no es valido");
  
    !validarPassword(password) &&
      (errors.password = "La contraseña ingresada no es valida");
  
    return errors;
  };
  