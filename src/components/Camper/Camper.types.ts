interface ICamperImage {
  thumb: string;
  original: string;
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
}
