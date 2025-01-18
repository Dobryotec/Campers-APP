import { object, string } from 'yup';

export const filtersSchema = object({
  location: string()
    .trim()
    .min(3, 'Location must be at least 3 characters long.')
    .max(50, 'Location must be less than 50 characters.')
    .required('Location is required.'),
});
