import { useEffect } from 'react';
import { NavLink, NavLinkProps, Outlet, useParams } from 'react-router-dom';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCamperById } from '../../redux/campers/campersOps';
import { selectCamper, selectError, selectLoading } from '../../redux/campers/campersSlice';
import { AppDispatch } from '../../redux/store';
import { RouteParams } from './CamperDetails.types';

import CamperProfile from '../../components/CamperProfile/CamperProfile';
import Container from '../../components/Container/Container';
import Spinner from '../../components/Spinner/Spinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import css from './CamperDetails.module.css';

const CamperDetailsPage: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const dispatch: AppDispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const camper = useSelector(selectCamper);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(id));
    }
  }, [dispatch, id]);

  const getActiveClass: NavLinkProps['className'] = ({ isActive }) =>
    clsx(css.link, { [css.active]: isActive });

  return (
    <>
      {camper && !loading && !error && <CamperProfile />}
      <Container>
        {loading && !error && <Spinner />}
        {!loading && !error && (
          <ul className={css['description-links-list']}>
            <li>
              <NavLink to="features" className={getActiveClass}>
                Features
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" className={getActiveClass}>
                Reviews
              </NavLink>
            </li>
          </ul>
        )}
        {!loading && error && <ErrorMessage />}
      </Container>
      <Outlet />
    </>
  );
};

export default CamperDetailsPage;
