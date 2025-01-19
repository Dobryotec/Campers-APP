import { IFeaturesProps } from './Features.type';

import sprite from '../../assets/images/sprite.svg';

import css from './Features.module.css';

const Features: React.FC<IFeaturesProps> = ({ filteredFeatures }) => {
  return (
    <ul className={css['features-list']}>
      {filteredFeatures.map(({ label, image }, index) => (
        <li key={index} className={css['feature-item']}>
          <svg className={css['feature-icon']} aria-label={`icon ${label}`}>
            <use href={`${sprite}#icon-${image}`} />
          </svg>
          <p className={css['feature-label']}>{label}</p>
        </li>
      ))}
    </ul>
  );
};

export default Features;
