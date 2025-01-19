import { Field } from 'formik';
import features from '../../data/features.json';

import sprite from '../../assets/images/sprite.svg';

import css from './FeaturesFilter.module.css';

const FeaturesFilter: React.FC = () => {
  const filteredFeatures = features.filter(({ key }) => key !== 'engine' && key !== 'transmission');

  return (
    <ul className={css['features-list']}>
      {filteredFeatures.map(({ key, label, image }) => (
        <li key={key} className={css['checkbox-item']}>
          <Field
            type="checkbox"
            name="features"
            value={key}
            id={key}
            className={css['checkbox-input']}
          />
          <label htmlFor={key} className={css['checkbox-label']}>
            <svg
              width="32"
              height="32"
              className={css['icon-feature']}
              aria-label={`icon-${label}`}
            >
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
