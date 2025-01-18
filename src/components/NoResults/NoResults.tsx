import React from 'react';

import nodata from '../../assets/images/nodata.jpg';

import css from './NoResults.module.css';

const NoResults: React.FC = () => {
  return (
    <div className={css['no-results-wrapper']}>
      <img src={nodata} alt="image no data" className={css['no-results-image']} />
      <h2 className={css['no-results-title']}>No Results Found</h2>
      <p className={css['no-results-text']}>
        We couldn’t find anything matching your search. Please try adjusting your filters or
        searching again.
      </p>
    </div>
  );
};

export default NoResults;
