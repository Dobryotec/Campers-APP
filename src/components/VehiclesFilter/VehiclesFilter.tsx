import { Field } from 'formik';
import sprite from '../../assets/images/sprite.svg';

import vehicles from '../../data/vehicles.json';

import css from './VehiclesFilter.module.css';

const VehiclesFilter = () => {
  return (
    <ul className={css['vehicles-list']}>
      {vehicles.map(({ key, label, image }) => (
        <li key={key} className={css['radio-item']}>
          <Field type="radio" name="vehicle" value={key} id={key} className={css['radio-input']} />
          <label htmlFor={key} className={css['radio-label']}>
            <svg width="32" height="32" className={css['icon-feature']}>
              <use href={`${sprite}#icon-${image}`} />
            </svg>
            {label}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default VehiclesFilter;
