import { useEffect } from 'react';
import { NavLink, NavLinkProps, Outlet, useParams } from 'react-router-dom';
import clsx from 'clsx';

import { fetchCamperById } from '../../redux/campers/campersOps';
import { useDispatch, useSelector } from 'react-redux';
import { selectCamper, selectLoading } from '../../redux/campers/campersSlice';
import CamperProfile from '../../components/CamperProfile/CamperProfile';

import css from './CamperDetails.module.css';
import Container from '../../components/Container/Container';
import { AppDispatch } from '../../redux/store';
import { RouteParams } from './CamperDetails.types';
import Spinner from '../../components/Spinner/Spinner';

const CamperDetailsPage: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const dispatch: AppDispatch = useDispatch();
  const loading = useSelector(selectLoading);
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
      {camper && !loading && <CamperProfile />}
      <Container>
        {loading ? (
          <Spinner />
        ) : (
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
      </Container>
      <Outlet />
    </>
  );
};

export default CamperDetailsPage;
