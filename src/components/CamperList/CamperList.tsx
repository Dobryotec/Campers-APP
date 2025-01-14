import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campersSlice';
import Camper from '../Camper/Camper';

import css from './CamperList.module.css';
import { getFeatures } from '../../utils/featuresUtil';

const CamperList: React.FC = () => {
  const campers = useSelector(selectCampers);

  return (
    <ul className={css['card-list']}>
      {campers.map(
        ({ id, name, price, rating, location, description, gallery, ...featuresData }) => {
          const features = getFeatures(featuresData);
          return (
            <li key={id}>
              <Camper
                id={id}
                name={name}
                price={price}
                rating={rating}
                location={location}
                description={description}
                gallery={gallery}
                features={features}
              />
            </li>
          );
        }
      )}
    </ul>
  );
};

export default CamperList;
