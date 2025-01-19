import { useDispatch, useSelector } from 'react-redux';

import { addToFavorites, selectFavorites } from '../../redux/campers/campersSlice';
import { AppDispatch } from '../../redux/store';
import { ICamper, ICamperProps } from './Camper.types';
import { formatedPrice } from '../../utils/formatedPrice';
import { truncatedText } from '../../utils/truncatedText';

import Button from '../Button/Button';
import Features from '../Features/Features';

import features from '../../data/features.json';

import sprite from '../../assets/images/sprite.svg';

import css from './Camper.module.css';

const Camper: React.FC<ICamperProps> = ({ camper }) => {
  const { gallery, name, price, id, rating, reviews, location, description } = camper;

  const dispatch: AppDispatch = useDispatch();

  const favorites = useSelector(selectFavorites);

  const filteredFeatures = features.filter(({ key }) => camper[key as keyof ICamper]);

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
              width="20"
              height="20"
              className={css['icon-favorite']}
              aria-label="icon heart"
            >
              <use href={`${sprite}#icon-${isFavorite ? 'red-heart' : 'heart'}`} />
            </svg>
          </div>
        </div>
        <div className={css['card-content']}>
          <div className={css['card-info']}>
            <p className={css['card-rating']}>
              <svg width="16" height="16" arai-label="icon star">
                <use href={`${sprite}#icon-gold-star`} />
              </svg>
              <span className={css['card-reviews']}>
                {rating}({reviews.length} Reviews)
              </span>
            </p>
            <p className={css['card-location']}>
              <svg width="16" height="16" aria-label="icon map">
                <use href={`${sprite}#icon-map`} />
              </svg>
              {location}
            </p>
          </div>
          <p className={css['card-description']}>{truncatedText(description)}</p>
          <Features filteredFeatures={filteredFeatures} />
          <Button title="Show more" link={id} />
        </div>
      </div>
    </>
  );
};

export default Camper;
