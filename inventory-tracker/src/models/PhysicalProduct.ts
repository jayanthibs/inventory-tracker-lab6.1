//importing Product class to inherit it's properties
import { Product } from "./Product.ts";
  
//creating interface to implement it in the PhysicalProduct class
export interface DiscountableProduct  {
     applyDiscount(discountRate: number): number;
}

//creating PhysicalProduct that inherits Product class and implements DiscountableProduct interface
export class PhysicalProduct extends Product implements DiscountableProduct {
    private _weight: number;
    private _quantity: number;
    
// asigning properties for PhysicalProduct and passing Product class properties using super
    constructor (sku: string, name: string, price: number, weight: number, quantity: number) {
        super(sku, name, price);
        this._weight = weight;
        this._quantity = quantity;
    }
    
    //method overriding in PhysicalProduct class to implement it's own feature
    getPriceWithTax() :number {
        
        return this.applyBulkDiscount()*1.10;
        //return this.price*0.10 + this.price;
    }
//returns private property weight in a formatted string format using getter method
    get formattedWeight(): string{
        return `${this._weight}kg `;
    }
//returns private property quantity using getter method
    get physicalProductQuantity(): number{
        return this._quantity;
    }
// calculates discount
    applyDiscount(discountRate: number): number {
    return this.price * (1 - discountRate);
  }

  applyBulkDiscount(): number {
    // Bulk discount if quantity >= 10 OR weight >= 5kg
    if (this._quantity >= 10 || this._weight >= 5) {
      return this.applyDiscount(0.15); // 15% discount
    }
    return this.price;
  }


  }










//   import { Product } from "./Product";

// export interface DiscountableProduct {
//   applyDiscount(discountRate: number): number;
// }

// export class PhysicalProduct extends Product implements DiscountableProduct {
//   constructor(
//     sku: string,
//     name: string,
//     price: number,
//     private weight: number, // in kg
//     private quantity: number
//   ) {
//     super(sku, name, price);
//   }

//   get formattedWeight(): string {
//     return `${this.weight} kg`;
//   }

//   getPriceWithTax(): number {
//     return this.price * 1.10; // 10% tax
//   }

//   applyDiscount(discountRate: number): number {
//     return this.price * (1 - discountRate);
//   }

//   applyBulkDiscount(): number {
//     // Bulk discount if quantity >= 10 OR weight >= 5kg
//     if (this.quantity >= 10 || this.weight >= 5) {
//       return this.applyDiscount(0.15); // 15% discount
//     }
//     return this.price;
//   }
// }