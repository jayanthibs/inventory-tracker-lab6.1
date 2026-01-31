import { Product } from "../models/Product.ts";

// export function sortByPrice(products: Product[]): Product[] {
//   return [...products].sort((a, b) => a.price - b.price);
// }
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




export function sortByName(products: Product[]): Product[] {
  return [...products].sort((a, b) => a.name.localeCompare(b.name));
}

