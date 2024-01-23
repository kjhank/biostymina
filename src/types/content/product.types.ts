import { type ACFImage } from '../wordpress.types';

export type IntroItem = {
  image: ACFImage;
  text: string;
};

export type Intro = {
  introItems: Array<IntroItem>;
}

export type Ingredients = {
  amount: string;
  decoration: ACFImage;
  descriptionList: Array<{ item: string }>;
  heading: string;
  image: ACFImage;
  largeText: string;
  list: Array<{ item: string }>;
};

export type Recommendations = {
  heading: string;
  image: ACFImage;
  list: Array<{ item: string }>;
};

export type Dose = {
  heading: string;
  image: ACFImage;
  text: string;
};

export type Dosage = {
  heading: string;
  doses: Array<Dose>;
  image: ACFImage;
};

export type InstructionStep = {
  hasSeparator?: boolean;
  heading?: string;
  image: ACFImage;
  text: string;
};

export type Instructions = {
  instructions: Array<InstructionStep>;
  title: {
    description: string;
    heading: string;
  };
}

export type Warnings = {
  list: Array<{ item: string }>;
}
