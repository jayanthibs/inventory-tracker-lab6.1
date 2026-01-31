// importing all the classes and functions
import { PhysicalProduct } from "./models/PhysicalProduct.ts";
import { DigitalProduct } from "./models/DigitalProduct.ts";
import { calculateTax } from "./utils/taxCalculator.ts";
import { Product } from "./models/Product.ts";
import { sortByPrice, sortByName } from "./utils/sortProduct.ts";

// Create instances
const products: Product[] = [
  new PhysicalProduct("P001", "Laptop", 1200, 2.5, 10),
  new PhysicalProduct("P002", "Tablet", 700, 1.5, 5),
  new PhysicalProduct("P003", "TV", 500, 25, 12),
  new DigitalProduct("D001", "E-book", 30, 5),
  new DigitalProduct("D002", "MS-Office", 30, 10),
  new DigitalProduct("D003", "Audio-book", 20, 7.5),
];

// Display details and prices
for (const product of products) {
  console.log(product.displayDetails());

  // If it's a physical product, show weight, quantity
  if (product instanceof PhysicalProduct) {
    console.log(`Weight: ${product.formattedWeight}`);
    console.log(`Quantity: ${product.physicalProductQuantity}`);
    console.log(`Discounted Price for products with quantity>=10 or weight>=5 (Discount-15%): $${product.applyBulkDiscount()}`);
  }

  // If it's a digital product, show file size
  if (product instanceof DigitalProduct) {
    console.log(`File Size: ${product.formattedFileSize}`);
  }
//calculate tax
  console.log(`Price with Tax: $${calculateTax(product).toFixed(2)}`);
  console.log("-------------------------");
}

//sorting
//sort by price
console.log("\n SORTED BY PRICE ");
console.log("----------------");
sortByPrice(products).forEach(p =>
  console.log(`${p.name}: $${p.price}`)
);

//sort by name
console.log("\n SORTED BY NAME ");
console.log("---------------");
sortByName(products).forEach((p) => console.log(p.name));
