export type IntroItem = {
  image: string;
  text: string;
};

export type Intro = {
  items: Array<IntroItem>;
}

export type Ingredients = {
  amount: string;
  decoration: string;
  descriptionList: Array<string>;
  heading: string;
  image: string;
  largeText: string;
  list: Array<string>;
};

export type Recommendations = {
  heading: string;
  image: string;
  list: Array<string>;
};

export type Dose = {
  heading: string;
  image: string;
  text: string;
};

export type Dosage = {
  heading: string;
  doses: Array<Dose>;
  image: string;
};

export type InstructionStep = {
  hasSeparator?: boolean;
  heading?: string;
  image: string;
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
  list: Array<string>;
}
