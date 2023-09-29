export type DbData = {
  name: string;
  tags: Array<string>;
  description: string;
  imageURL: string;
};


export type ResponseArray = {
  combination: Array<string>;
  movieNames: string;
}

export type movieWithCombinations = {
  "combination": string[]; // You can replace `any` with a more specific type if needed
  "movieNames": string[];
};