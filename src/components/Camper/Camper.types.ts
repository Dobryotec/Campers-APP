interface ICamperImage {
  thumb: string;
  original: string;
}

interface IReview {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface ICamper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  gallery: ICamperImage[];
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  transmission: string;
  engine: string;
  reviews: IReview[];
  form: string;
  consumption: string;
  height: string;
  length: string;
  width: string;
  tank: string;
}

export interface ICamperProps {
  camper: ICamper;
  basePath: string;
}
