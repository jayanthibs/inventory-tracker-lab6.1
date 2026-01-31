//importing Product class to inherit it's properties
import { Product } from "../models/Product.ts";


// another way of sorting using sort builtin method

// export function sortByPrice(products: Product[]): Product[] {
//   return [...products].sort((a, b) => a.price - b.price);
// }


//sorting products based on the price in ascending order
export function sortByPrice(products: Product[]): Product[] {
  const sorted = [...products];

  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      const a = sorted[i];
      const b = sorted[j];

      if (!a || !b) continue; // type guard

      if (a.price > b.price) {
        sorted[i] = b;
        sorted[j] = a;
      }
    }
  }

  return sorted;
}


//sorting products based on the name in alphabetical order

export function sortByName(products: Product[]): Product[] {
  return [...products].sort((a, b) => a.name.localeCompare(b.name));
}

