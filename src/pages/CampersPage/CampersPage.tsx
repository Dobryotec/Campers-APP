import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../redux/store';
import { fetchCampers } from '../../redux/campers/campersOps';
import {
  selectCampers,
  selectError,
  selectFiltered,
  selectLoading,
} from '../../redux/campers/campersSlice';

import CamperList from '../../components/CamperList/CamperList';
import Container from '../../components/Container/Container';
import Filters from '../../components/Filters/Filters';
import NoResults from '../../components/NoResults/NoResults';
import Spinner from '../../components/Spinner/Spinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import css from './CampersPage.module.css';

const CampersPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filtered = useSelector(selectFiltered);

  useEffect(() => {
    if (filtered) return;
    dispatch(fetchCampers());
  }, [dispatch, filtered]);

  return (
    <Container>
      <div className={css['content-wrapper']}>
        <Filters />
        {campers.length > 0 && !loading && !error && <CamperList />}
        {campers.length === 0 && !loading && !error && <NoResults />}
        {loading && !error && <Spinner />}
        {!loading && error && <ErrorMessage />}
      </div>
    </Container>
  );
};

export default CampersPage;
