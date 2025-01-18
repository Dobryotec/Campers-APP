import Button from '../Button/Button';
import { ICamperProps } from './Camper.types';
import { formatedPrice } from '../../utils/formatedPrice';

import sprite from '../../assets/images/sprite.svg';

import css from './Camper.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, selectFavorites } from '../../redux/campers/campersSlice';
import { truncatedText } from '../../utils/truncatedText';

const Camper: React.FC<ICamperProps> = ({
  id,
  name,
  price,
  rating,
  location,
  description,
  gallery,
  reviews,
  features,
}) => {
  const dispatch = useDispatch();

  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some(favorite => favorite.id === id);

  return (
    <>
      <div className={css['card-image-wrapper']}>
        <img src={gallery[0].original} alt="image" />
      </div>
      <div className={css['card-wrapper-content']}>
        <div className={css['card-header']}>
          <h2 className={css['card-title']}>{name}</h2>
          <div className={css['card-header-right-block']}>
            <p className={css['card-price']}>{formatedPrice(price)} </p>
            <svg
              onClick={() => dispatch(addToFavorites(id))}
              width="32"
              height="32"
              className={css['icon-favorite']}
            >
              <use href={`${sprite}#icon-${isFavorite ? 'red-heart' : 'heart'}`} />
            </svg>
          </div>
        </div>
        <div className={css['card-content']}>
          <div className={css['card-info']}>
            <p className={css['card-rating']}>
              <svg width="16" height="16">
                <use href={`${sprite}#icon-gold-star`} />
              </svg>

              <span className={css['card-reviews']}>
                {rating}({reviews.length} Reviews)
              </span>
            </p>
            <p className={css['card-location']}>
              <svg width="16" height="16">
                <use href={`${sprite}#icon-map`} />
              </svg>
              {location}
            </p>
          </div>
          <p className={css['card-description']}>{truncatedText(description)}</p>

          <ul className={css.features}>
            {features.map((feature, index) =>
              feature.value ? (
                <li key={index} className={css['feature-item']}>
                  <div className={css['feature-icon-wrapper']}>
                    <img src={feature.src} />
                  </div>
                  <p className={css['feature-label']}>{feature.label}</p>
                </li>
              ) : null
            )}
          </ul>
          <Button title="Show more" link={id} />
        </div>
      </div>
    </>
  );
};

export default Camper;
