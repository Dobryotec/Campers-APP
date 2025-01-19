import { Link } from 'react-router-dom';

import { IButtonProps } from './Button.types';

import css from './Button.module.css';

const ButtonLink: React.FC<IButtonProps> = ({ title, link, newTab = false }) => {
  return (
    <Link
      to={link}
      className={css.button}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
    >
      {title}
    </Link>
  );
};

export default ButtonLink;
