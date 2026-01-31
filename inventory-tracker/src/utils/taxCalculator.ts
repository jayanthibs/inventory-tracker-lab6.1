//importing Product class to inherit it's properties
import { Product } from "../models/Product.ts";

// function to calculate the tax based on the product type
export function calculateTax(product: Product): number {
  return product.getPriceWithTax();
}