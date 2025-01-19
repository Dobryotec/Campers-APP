import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import clsx from 'clsx';
import toast from 'react-hot-toast';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { orderSchema } from '../../utils/orderSchema';

import { IOrderFormValues } from './OrderForm.type';

import css from './OrderForm.module.css';

const OrderForm: React.FC = () => {
  const handleSubmit = (
    values: IOrderFormValues,
    { resetForm }: FormikHelpers<IOrderFormValues>
  ): void => {
    toast.success('Thank you for your reservation!');
    resetForm();
  };

  return (
    <Formik<IOrderFormValues>
      initialValues={{
        name: '',
        email: '',
        startDate: null,
        endDate: null,
        comment: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={orderSchema}
    >
      {({ errors, touched, setFieldValue, values }) => (
        <Form className={css['form']}>
          <div>
            <h2 className={css['form-title']}>Book your campervan now</h2>
            <p className={css['form-subtitle']}>Stay connected! We are always ready to help you.</p>
          </div>
          <div className={css['form-inputs']}>
            <Field
              className={clsx(css['form-input'], {
                [css['error-input']]: errors.name && touched.name,
                [css['success-input']]: !errors.name && touched.name,
              })}
              placeholder="Name*"
              name="name"
            />
            <ErrorMessage component="p" className={css.error} name="name" />
            <Field
              className={clsx(css['form-input'], {
                [css['error-input']]: errors.email && touched.email,
                [css['success-input']]: !errors.email && touched.email,
              })}
              name="email"
              placeholder="Email*"
            />
            <ErrorMessage component="p" className={css.error} name="email" />
            <div
              className={clsx(css['form-input'], {
                [css['error-input']]:
                  (errors.startDate || errors.endDate) && (touched.startDate || touched.endDate),
                [css['success-input']]:
                  !errors.startDate && !errors.endDate && (touched.startDate || touched.endDate),
              })}
            >
              <DatePicker
                selected={values.startDate}
                onChange={(dates: [Date | null, Date | null]) => {
                  const [start, end] = dates;
                  setFieldValue('startDate', start);
                  setFieldValue('endDate', end);
                }}
                selectsRange
                startDate={values.startDate}
                endDate={values.endDate}
                dateFormat="dd-MM-yyyy"
                placeholderText="Booking date*"
                minDate={new Date()}
                className={clsx(css['custom-datepicker'])}
              />
            </div>
            <ErrorMessage component="p" className={css.error} name="startDate" />
            <ErrorMessage component="p" className={css.error} name="endDate" />

            <Field
              className={clsx(css['form-input'], css['form-textarea'])}
              as="textarea"
              name="comment"
              placeholder="Comment"
            />
          </div>

          <button className={css.button} type="submit">
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default OrderForm;
