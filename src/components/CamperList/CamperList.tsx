import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampers,
  selectVisibleCampers,
  setVisibleCampers,
} from '../../redux/campers/campersSlice';
import Camper from '../Camper/Camper';

import css from './CamperList.module.css';
import { getFeatures } from '../../utils/featuresUtil';

const CamperList: React.FC = () => {
  const campers = useSelector(selectCampers);
  const visibleCampers = useSelector(selectVisibleCampers);

  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(setVisibleCampers(visibleCampers + 4));
  };

  return (
    <div className={css['card-list-wrapper']}>
      <ul className={css['card-list']}>
        {campers
          .slice(0, visibleCampers)
          .map(
            ({
              id,
              name,
              price,
              rating,
              location,
              description,
              reviews,
              gallery,
              ...featuresData
            }) => {
              const features = getFeatures(featuresData);
              return (
                <li key={id} className={css.card}>
                  <Camper
                    id={id}
                    name={name}
                    price={price}
                    rating={rating}
                    location={location}
                    description={description}
                    reviews={reviews}
                    gallery={gallery}
                    features={features}
                  />
                </li>
              );
            }
          )}
      </ul>
      {visibleCampers < campers.length && (
        <button className={css.button} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CamperList;
