import * as yup from 'yup'

export const YUP_VALIDATION = {
  FIRST_NAME: yup
    .string('Enter your first name')
    .required('First name is required'),
  LAST_NAME: yup
    .string('Enter your last name')
    .required('Last name is required'),
  EMAIL: yup
    .string('Enter your email')
    .required('Email is required')
    .email('Enter a valid email'),
  PHONE_NUMBER: yup
    .string('Enter your phone')
    .required('Phone number is required')
    .matches(/^(?:\d){3}-?(?:\d){3}-?(?:\d){4}$/, 'Enter a valid phone number'),
  USERNAME: yup.string('Enter your username').required('Username is required'),
  PASSWORD: yup
    .string('Enter your password')
    .required('Password is required')
    .min(8, 'Password should be of minimum 8 characters length')
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+\-=|\\]).{8,}$/,
      'Must contain at least one uppercase letter, one lowercase letter, one number and one special character'
    ),
}
