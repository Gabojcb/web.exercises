import { DATA } from "./data";

class Categories {
  #items;
  get items() {
    return this.#items;
  }

  constructor() {
    this.#items = DATA;
  }
}

export const categories = new Categories();
