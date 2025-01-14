import { Link } from 'react-router-dom';

import { IButtonProps } from './Button.types';

import css from './Button.module.css';

const Button: React.FC<IButtonProps> = ({ title, link }) => {
  return (
    <Link to={link} className={css.button}>
      {title}
    </Link>
  );
};

export default Button;
