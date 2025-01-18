import { Field } from 'formik';
import features from '../../data/features.json';
import sprite from '../../assets/images/sprite.svg';

import css from './FeaturesFilter.module.css';

const FeaturesFilter: React.FC = () => {
  return (
    <ul className={css['features-list']}>
      {features.map(({ key, label, image }) => (
        <li key={key} className={css['checkbox-item']}>
          <Field
            type="checkbox"
            name="features"
            value={key}
            id={key}
            className={css['checkbox-input']}
          />
          <label htmlFor={key} className={css['checkbox-label']}>
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

export default FeaturesFilter;
