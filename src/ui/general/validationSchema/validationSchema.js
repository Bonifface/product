import * as yup from 'yup';

export const productSchema = yup.object().shape({
  name: yup.string('Enter your task').min(3, 'Too short').max(200, 'Too long').required('Empty'),
  imageUrl: yup
    .string('Enter your task')
    .min(1, 'Too short')
    .max(200, 'Too long')
    .required('Empty'),
  description: yup
    .string('Enter description')
    .min(3, 'Too short')
    .max(1000, 'Too long')
    .required('Empty'),
  count: yup.number('Enter number').min(1, 'Too short').max(200, 'Too long').required('Empty'),
  size: yup.string('Enter size').min(1, 'Too short').max(200, 'Too long').required('Empty'),
  weight: yup.string('Enter weight').min(1, 'Too short').max(200, 'Too long').required('Empty'),
});


export const commentSchema = yup.object().shape({
  name: yup
    .string("Enter your name")
    .min(2, "Too short")
    .max(20, "Too long")
    .required("Empty"),
  description: yup
    .string("Enter your comment")
    .min(3, "Too short")
    .max(200, "Too long")
    .required("Empty"),
});