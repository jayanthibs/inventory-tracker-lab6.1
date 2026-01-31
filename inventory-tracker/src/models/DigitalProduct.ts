import { Product } from "./Product.ts";

export class DigitalProduct extends Product {
    private _fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number){
        super(sku, name, price);
        this._fileSize = fileSize;

    }
    getPriceWithTax() :number {
        return this.price; //no tax
    }

    get formattedFileSize(): string{
        return `${this._fileSize} MB`;
    }
}
