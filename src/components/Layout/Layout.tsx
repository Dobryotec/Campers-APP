import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';

import css from './Layout.module.css';

const Layout: React.FC = () => {
  return (
    <>
      <header className={css.header}>
        <Container>
          <Navigation />
        </Container>
      </header>
      <main className={css.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
