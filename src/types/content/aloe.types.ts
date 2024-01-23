import { type ACFImage } from '../wordpress.types';

export type Species = {
  image: ACFImage;
  name: string;
}

export type SpeciesSection = {
  description: string;
  heading: string;
  species: Array<Species>;
}

export type AboutAloe = {
  heading: string;
  items: Array<{ item: string }>;
}

export type Cultivation = {
  decoration: ACFImage;
  description: string;
  heading: string;
  items: Array<{ item: string }>;
  map: string;
}
