import { useSelector } from 'react-redux';

import { selectCamper } from '../../redux/campers/campersSlice';
import { ICamper } from '../Camper/Camper.types';

import css from './VehicleDetails.module.css';

const VehicleDetails: React.FC = () => {
  const camper = useSelector(selectCamper) as ICamper;

  const { form, length, width, height, tank, consumption } = camper;

  return (
    <>
      <p className={css['vehicle-details-title']}>Vehicle details</p>
      <ul className={css['vehicle-details-list']}>
        <li className={css['vehicle-details-item']}>
          <p>Form</p>
          <p>{form}</p>
        </li>
        <li className={css['vehicle-details-item']}>
          <p>Length</p>
          <p>{length}</p>
        </li>
        <li className={css['vehicle-details-item']}>
          <p>Width</p>
          <p>{width}</p>
        </li>
        <li className={css['vehicle-details-item']}>
          <p>Height</p>
          <p>{height}</p>
        </li>
        <li className={css['vehicle-details-item']}>
          <p>Tank</p>
          <p>{tank}</p>
        </li>
        <li className={css['vehicle-details-item']}>
          <p>Consumption</p>
          <p>{consumption}</p>
        </li>
      </ul>
    </>
  );
};

export default VehicleDetails;
