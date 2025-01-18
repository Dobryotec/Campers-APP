import { useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { selectLoading } from '../../redux/campers/campersSlice';

const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner: React.FC = () => {
  const loading = useSelector(selectLoading);

  return (
    <ClipLoader
      color={'#D84343'}
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};

export default Spinner;
