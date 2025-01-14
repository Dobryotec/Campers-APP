// src/utils/featuresUtil.ts
import shower from '../assets/images/shower.svg';
import diagram from '../assets/images/diagram.svg';
import kitchen1 from '../assets/images/kitchen.svg';
import tv from '../assets/images/tv.svg';
// import radio from "../assets/images/";
import fridge from '../assets/images/fridge.svg';
import microwave1 from '../assets/images/microwave.svg';
import gas1 from '../assets/images/gas.svg';
import water1 from '../assets/images/water.svg';

export const getFeatures = ({
  bathroom,
  AC,
  kitchen,
  TV,
  radio,
  refrigerator,
  microwave,
  gas,
  water,
}: {
  bathroom: boolean;
  AC: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
}) => [
  { key: 'bathroom', label: 'Bathroom', src: shower, value: bathroom },
  { key: 'AC', label: 'AC', src: diagram, value: AC },
  { key: 'kitchen', label: 'Kitchen', src: kitchen1, value: kitchen },
  { key: 'TV', label: 'TV', src: tv, value: TV },
  // { key: 'radio', label: 'Radio', src: radio, value: radio },
  { key: 'refrigerator', label: 'Refrigerator', src: fridge, value: refrigerator },
  { key: 'microwave', label: 'Microwave', src: microwave1, value: microwave },
  { key: 'gas', label: 'Gas', src: gas1, value: gas },
  { key: 'water', label: 'Water', src: water1, value: water },
];
