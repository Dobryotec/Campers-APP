import { useSelector } from 'react-redux';
import css from './Features.module.css';
import { selectCamper } from '../../redux/campers/campersSlice';

import sprite from '../../assets/images/sprite.svg';

import features from '../../data/features.json';
import VehicleDetails from '../VehicleDetails/VehicleDetails';
import OrderForm from '../OrderForm/OrderForm';
import Container from '../Container/Container';
import { ICamper } from '../Camper/Camper.types';

const Features: React.FC = () => {
  const camper = useSelector(selectCamper) as ICamper;

  const filteredFeatures = features.filter(({ key }) => camper[key as keyof ICamper]);

  return (
    <section className={css['section-features']}>
      <Container>
        <div className={css['features-content']}>
          <div className={css.features}>
            <ul className={css['features-list']}>
              {filteredFeatures.map(({ label, image }, index) => (
                <li key={index} className={css['feature-item']}>
                  <svg className={css['feature-icon']}>
                    <use href={`${sprite}#icon-${image}`} />
                  </svg>
                  <p className={css['feature-label']}>{label}</p>
                </li>
              ))}
            </ul>
            <VehicleDetails />
          </div>
          <OrderForm />
        </div>
      </Container>
    </section>
  );
};

export default Features;
