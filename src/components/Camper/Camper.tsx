import Button from '../Button/Button';
import { ICamper } from './Camper.types';


import css from './Camper.module.css';

const Camper: React.FC = ({
  id,
  name,
  price,
  rating,
  location,
  description,
  gallery,
  features,
}) => {
  console.log(features);

  return (
    <div className={css.card}>
      <div className={css['card-image-wrapper']}>
        <img src={gallery[0].original} alt="image" />
      </div>
      <div>
        <div>
          <h2>{name}</h2>
          <p>{price}</p>
        </div>
        <div>
          <p>{rating}</p>
          <p>{location}</p>
        </div>
        <p>{description}</p>

        <div className={css['features']}>
          {features.map((feature, index) =>
            feature.value ? (
              <div key={index} className={css['feature-item']}>
                <img src={feature.src} />
                {feature.label}
              </div>
            ) : null
          )}
        </div>
        <Button title="Show more" link={id} />
      </div>
    </div>
  );
};

export default Camper;
