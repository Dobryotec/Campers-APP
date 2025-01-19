import { IFeaturesProps } from './Features.type';
import { ICamper } from '../Camper/Camper.types';

import features from '../../data/features.json';

import sprite from '../../assets/images/sprite.svg';

import css from './Features.module.css';

const Features: React.FC<IFeaturesProps> = ({ camper }) => {
  return (
    <ul className={css['features-list']}>
      {features.map(({ key, label, image, value }, index) => {
        const isFeatureAvailable =
          camper[key as keyof ICamper] === true || camper[key as keyof ICamper] === value;

        if (isFeatureAvailable) {
          return (
            <li key={index} className={css['feature-item']}>
              <svg className={css['feature-icon']} aria-label={`icon ${label}`}>
                <use href={`${sprite}#icon-${image}`} />
              </svg>
              <p className={css['feature-label']}>{label}</p>
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};

export default Features;
