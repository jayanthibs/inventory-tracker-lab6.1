// creating class Product
export class Product {
    sku: string;
    name : string;
    price: number;
    
// asigning properties for product that is passed from main.ts
    constructor(sku:string, name:string, price:number){

        this.sku = sku;
        this.name = name;
        this.price = price;
    }
// function to display name, sku, price
    displayDetails(): string {
        return `Productname: ${this.name} \nSku: ${this.sku} \nPrice: $ ${this.price}`;
        
    }
// method overriding function
    getPriceWithTax():number {

        return this.price*0.07 + this.price;

    }

}