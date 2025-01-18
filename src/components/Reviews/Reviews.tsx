import { useSelector } from 'react-redux';
import { selectCamper } from '../../redux/campers/campersSlice';
import { getFirstLetter } from '../../utils/getfirstLetter';

import sprite from '../../assets/images/sprite.svg';

import css from './Reviews.module.css';
import Container from '../Container/Container';
import OrderForm from '../OrderForm/OrderForm';

const Reviews: React.FC = () => {
  const camper = useSelector(selectCamper);

  return (
    <section className={css['review-section']}>
      <Container>
        <div className={css['review-content']}>
          <ul className={css['review-list']}>
            {camper?.reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
              <li key={index} className={css['review-item']}>
                <div className={css['review-header']}>
                  <div className={css['review-avatar']}>{getFirstLetter(reviewer_name)}</div>
                  <div className={css['review-rating']}>
                    <h3 className={css['review-name']}>{reviewer_name}</h3>
                    <ul className={css['review-stars-list']}>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <li key={index}>
                          <svg key={index} className={css['review-star']} width="16" height="16">
                            <use
                              href={`${sprite}#icon-${
                                index < reviewer_rating ? 'gold-star' : 'star'
                              }`}
                            />
                          </svg>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className={css['review-comment']}>{comment}</p>
              </li>
            ))}
          </ul>
          <OrderForm />
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
