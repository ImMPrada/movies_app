const emptyCheck = {
  validationFunction: function(value){ return (value === '' || value === null)},
  prompt: 'Please enter a value'
}

const validateEmail = {
  emailReGex: /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
  validationFunction: function(value){ return value.match(this.emailReGex) ? false : true},
  prompt: 'Please enter a valid email'
}


export const validationSchema = {
  userEmail: {
    validations: [
      {
        ...emptyCheck,
        prompt: 'Please enter an email',
      },
      validateEmail,
    ]
  },
  password: {
    validations: [
      emptyCheck,
    ]
  }
};
