import { Product } from "../models/Product.ts";

export function calculateTax(product: Product): number {
  return product.getPriceWithTax();
}