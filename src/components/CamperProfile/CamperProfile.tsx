import { useSelector } from 'react-redux';
import { useState } from 'react';

import { selectCamper } from '../../redux/campers/campersSlice';
import { formatedPrice } from '../../utils/formatedPrice';
import { ICamper } from '../Camper/Camper.types';

import Container from '../Container/Container';
import ImageModal from '../Modal/ImageModal';

import sprite from '../../assets/images/sprite.svg';

import css from './CamperProfile.module.css';

const CamperProfile: React.FC = () => {
  const { name, rating, location, price, reviews, gallery, description } = useSelector(
    selectCamper
  ) as ICamper;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  return (
    <section className={css['camper-profile']}>
      <Container>
        <div className={css['camper-profile-header']}>
          <h2 className={css['camper-profile-title']}>{name}</h2>
          <div className={css['camper-profile-info']}>
            <p className={css['camper-profile-rating']}>
              <svg width="16" height="16" arai-label="icon star">
                <use href={`${sprite}#icon-gold-star`} />
              </svg>
              <span className={css['camper-profile-reviews']}>
                {rating} ({reviews.length} Reviews)
              </span>
            </p>
            <p className={css['camper-profile-location']}>
              <svg width="16" height="16" aria-label="icon map">
                <use href={`${sprite}#icon-map`} />
              </svg>
              {location}
            </p>
          </div>
          <p className={css['camper-profile-price']}>{formatedPrice(price)} </p>
        </div>
        <ul className={css['camper-profile-image-list']}>
          {gallery.map(({ original }, index) => (
            <li key={index}>
              <div
                className={css['camper-profile-image-wrapper']}
                onClick={() => openModal(original)}
              >
                <img
                  src={original}
                  alt={`image-${index}`}
                  className={css['camper-profile-image']}
                />
                <div className={css['card-shine']}></div>
              </div>
            </li>
          ))}
        </ul>
        <p className={css['card-description']}>{description}</p>
        <ImageModal isOpen={modalIsOpen} image={selectedImage} onClose={closeModal} />
      </Container>
    </section>
  );
};

export default CamperProfile;
