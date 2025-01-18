import { object, string, date } from 'yup';

export const orderSchema = object({
  name: string()
    .trim()
    .min(3, 'Name must be at least 3 characters long.')
    .max(50, 'Name must be less than 50 characters.')
    .required('Name is required.'),
  email: string()
    .trim()
    .email('Email must be in the format example@domain.com.')
    .min(5, 'Email must be at least 5 characters long.')
    .max(100, 'Email must be less than 100 characters.')
    .required('Email is required.'),
  startDate: date().required('Start date is required'),
  endDate: date().required('End date is required'),
  comment: string()
    .trim()
    .min(5, 'Comment must be at least 5 characters long.')
    .max(250, 'Comment must be less than 250 characters.'),
});
