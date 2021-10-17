export class Product {
    Id : number
    Code : string
    Name : string
    Price : number

    constructor(code:string, name:string, price:number){
        this.Code = code
        this.Name = name
        this.Price = price
    }
}