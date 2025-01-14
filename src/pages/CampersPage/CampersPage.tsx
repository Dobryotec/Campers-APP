import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../redux/store';
import { fetchCampers } from '../../redux/campersOps';

import CamperList from '../../components/CamperList/CamperList';
import Container from '../../components/Container/Container';

const CampersPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <Container>
      <CamperList />
    </Container>
  );
};

export default CampersPage;
