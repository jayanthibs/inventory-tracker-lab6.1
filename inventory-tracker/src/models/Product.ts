export class Product {
    sku: string;
    name : string;
    price: number;
    

    constructor(sku:string, name:string, price:number){

        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    displayDetails(): string {
        return `Productname: ${this.name} \nSku: ${this.sku} \nPrice: $ ${this.price}`;
        
    }

    getPriceWithTax():number {

        return this.price*0.07 + this.price;

    }

}