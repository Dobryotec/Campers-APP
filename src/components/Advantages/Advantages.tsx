import { useSelector } from 'react-redux';

import { selectCamper } from '../../redux/campers/campersSlice';
import { ICamper } from '../Camper/Camper.types';

import VehicleDetails from '../VehicleDetails/VehicleDetails';
import OrderForm from '../OrderForm/OrderForm';
import Container from '../Container/Container';
import Features from '../Features/Features';

import css from './Advantages.module.css';

const Advantages: React.FC = () => {
  const camper = useSelector(selectCamper) as ICamper;

  return (
    <section className={css['section-features']}>
      <Container>
        <div className={css['features-content']}>
          <div className={css.features}>
            <Features camper={camper} />
            <VehicleDetails />
          </div>
          <OrderForm />
        </div>
      </Container>
    </section>
  );
};

export default Advantages;
