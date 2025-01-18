import { Link, NavLink, NavLinkProps } from 'react-router-dom';
import clsx from 'clsx';

import logo from '../../assets/images/logo.svg';

import css from './Navigation.module.css';

const Navigation: React.FC = () => {
  const getActiveClass: NavLinkProps['className'] = ({ isActive }) =>
    clsx(css.link, { [css.active]: isActive });

  return (
    <nav className={css.nav}>
      <Link to="/" className={css['nav-logo']}>
        <img src={logo} alt="logo" />
      </Link>
      <ul className={css['nav-list']}>
        <li>
          <NavLink to="/" end className={getActiveClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" end className={getActiveClass}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
