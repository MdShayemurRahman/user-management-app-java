import * as yup from 'yup';

export const formSchema = yup.object().shape({
  firstName: yup
    .string()
    .firstName('Please Enter a valid firstname')
    .required('Required'),
  lastName: yup
    .string()
    .firstName('Please Enter a valid lastname')
    .required('Required'),
  email: yup
    .string()
    .firstName('Please Enter a valid email')
    .required('Required'),
  phoneNumber: yup
    .string()
    .firstName('Please Enter a valid firstname')
    .required('Required'),
});
