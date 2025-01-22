import React from 'react';
import { useSelector } from 'react-redux';

import Container from '../../components/Container/Container';
import Camper from '../../components/Camper/Camper';
import NoFavorites from '../../components/NoFavorites/NoFavorites';

import { selectFavorites } from '../../redux/campers/campersSlice';

import css from './FavoritesPage.module.css';

const FavoritesPage: React.FC = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <Container>
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <ul className={css['card-list']}>
          {favorites.map(camper => (
            <li key={camper.id} className={css['favorite-card']}>
              <Camper camper={camper} basePath="catalog" />
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default FavoritesPage;
