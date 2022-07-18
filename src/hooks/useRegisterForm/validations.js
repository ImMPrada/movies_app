const emptyCheck = {
  validationFunction: function(value){ return (value === '' || value === null)},
  prompt: 'Please enter a value'
}

const validateEmail = {
  emailReGex: /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
  validationFunction: function(value){ return value.match(this.emailReGex) ? false : true},
  prompt: 'Please enter a valid email'
}

const checkEquality = {
  validationFunction: function(values){ return values.every(value => value === values[0])},
  prompt: 'Values must be the same'
}


export const validationSchema = {
  fieldByField: {
    regEmail: {
      validations: [
        {
          ...emptyCheck,
          prompt: 'Please enter an email',
        },
        validateEmail,
      ]
    },
    password1: {
      validations: [
        emptyCheck,
      ]
    },
    password2: {
      validations: [
        emptyCheck,
      ]
    }
  },
  multipleFields: [
    {
      fields: ['password1', 'password2'],
      validations: [
        {
          ...checkEquality,
          prompt: 'Passwords must match'
        },
      ]
    },
  ]
};
