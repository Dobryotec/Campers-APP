import { useSelector } from 'react-redux';
import css from './ErrroMessage.module.css';
import { selectError } from '../../redux/campers/campersSlice';

const ErrorMessage: React.FC = () => {
  const error = useSelector(selectError);

  return <div className={css.error}>Sorry,something went wrong! {error}</div>;
};

export default ErrorMessage;
