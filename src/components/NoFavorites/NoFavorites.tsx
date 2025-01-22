import React from 'react';

import ButtonLink from '../Button/Button';

import css from './NoFavorites.module.css';

const NoFavorites: React.FC = () => {
  return (
    <div className={css['empty-favorites']}>
      <h2 className={css['empty-favorites__title']}>You don't have any favorite campers yet</h2>
      <p className={css['empty-favorites__text']}>
        Browse our catalog and add your favorite campers to this list!
      </p>
      <ButtonLink title="Add Campers" link="/catalog" />
    </div>
  );
};

export default NoFavorites;
