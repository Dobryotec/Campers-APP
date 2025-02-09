import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import clsx from 'clsx';
import { useId } from 'react';
import { useDispatch } from 'react-redux';

import { setVisibleCampers } from '../../redux/campers/campersSlice';
import { IParamsFiltering } from './Filters.types';
import { AppDispatch } from '../../redux/store';
import { filtersSchema } from '../../utils/filtersSchema';
import { fetchFilteredCampers } from '../../redux/campers/campersOps';

import sprite from "../../assets/images/sprite.svg";

import FeaturesFilter from '../FeaturesFilter/FeaturesFilter';
import VehiclesFilter from '../VehiclesFilter/VehiclesFilter';

import css from './Filters.module.css';

const Filters: React.FC = () => {
  const locationId = useId();
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (
    values: IParamsFiltering,
    { resetForm }: FormikHelpers<IParamsFiltering>
  ) => {
    dispatch(fetchFilteredCampers(values));
    dispatch(setVisibleCampers(4));
    resetForm();
  };

  return (
    <Formik<IParamsFiltering>
      initialValues={{
        location: '',
        features: [],
        vehicle: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={filtersSchema}
    >
      {({ errors, touched }) => (
        <Form className={css['form-filters']}>
          <div>
            <div className={css['form-input-wrapper']}>
              <label htmlFor={locationId} className={css['form-input-label']}>
                <svg
                  width="20"
                  height="20"
                  className={css['icon-map']}
                  aria-label="icon map"
                >
                  <use href={`${sprite}#icon-map`} />
                </svg>
                Location
              </label>
              <Field
                className={clsx(css['form-input'], {
                  [css['error-input']]: errors.location && touched.location,
                  [css['success-input']]: !errors.location && touched.location,
                })}
                id={locationId}
                placeholder="Kyiv"
                name="location"
              />
            </div>
            <ErrorMessage component="p" className={css['error-message']} name="location" />
            <p className={css.filters}>Filters</p>
            <h3 className={css['filters-title']}>Vehicle equipment</h3>
            <FeaturesFilter />
            <h3 className={css['filters-title']}>Vehicle type</h3>
            <VehiclesFilter />
          </div>
          <button className={css['form-button']} type="submit">
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Filters;
