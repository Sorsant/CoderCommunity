const validate = (state) => {
  let errors = {};

  if (state.Account === "") {
    errors.Account = "Account is required";
  }

  // if (state.Account.length > 10) {
  //   errors.Account = "Cannot be longer than 10 characters";
  // }

  if (state.Password === "") {
    errors.Password = "Password is required";
  }

  return errors;
};

export default validate;