//importing Product class to inherit it's properties
import { Product } from "./Product.ts";

//creating DigitalProduct that inherits Product class 
export class DigitalProduct extends Product {
    private _fileSize: number;

    // asigning properties for DigitalProduct and passing Product class properties using super
    constructor(sku: string, name: string, price: number, fileSize: number){
        super(sku, name, price);
        this._fileSize = fileSize;

    }

    //method overriding in DigitalProduct class to implement it's own feature
    getPriceWithTax() :number {
        return this.price; //no tax
    }
//returns private property fileSize in a formatted string format using getter method
    get formattedFileSize(): string{
        return `${this._fileSize} MB`;
    }
}
