import Container from '../Container/Container';
import Button from '../Button/Button';

import css from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={css['section-hero']}>
      <Container>
        <h1 className={css['section-hero-title']}>Campers of your dreams</h1>
        <h2 className={css['section-hero-subtitle']}>
          You can find everything you want in our catalog
        </h2>
        <Button title="View Now" link="/catalog" />
      </Container>
    </section>
  );
};

export default Hero;
