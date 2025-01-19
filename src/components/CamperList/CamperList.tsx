import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampers,
  selectVisibleCampers,
  setVisibleCampers,
} from '../../redux/campers/campersSlice';
import { AppDispatch } from '../../redux/store';

import Camper from '../Camper/Camper';

import css from './CamperList.module.css';

const CamperList: React.FC = () => {
  const campers = useSelector(selectCampers);
  const visibleCampers = useSelector(selectVisibleCampers);

  const dispatch: AppDispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(setVisibleCampers(visibleCampers + 4));
  };

  return (
    <div className={css['card-list-wrapper']}>
      <ul className={css['card-list']}>
        {campers.slice(0, visibleCampers).map(camper => {
          return (
            <li key={camper.id} className={css.card}>
              <Camper camper={camper} />
            </li>
          );
        })}
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
