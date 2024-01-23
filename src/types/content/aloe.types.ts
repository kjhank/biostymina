export type Species = {
  image: string;
  name: string;
}

export type SpeciesSection = {
  description: string;
  heading: string;
  species: Array<Species>;
}

export type AboutAloe = {
  heading: string;
  items: Array<string>;
}

export type Cultivation = {
  decoration: string;
  description: string;
  heading: string;
  items: Array<string>;
  map: string;
}
