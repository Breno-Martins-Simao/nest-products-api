import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from "src/Models/products.model";

@Controller('products')
export class ProductsController {
    products : Product[] = [
        new Product("BOOK001", "Java Book for begginers", 50),
        new Product("BOOK002", "Typescript Book for begginers", 50),
        new Product("BOOK003", "DotNet Book for begginers", 50),
        new Product("BOOK004", "Javascript Book for begginers", 50),
    ]

    @Get()
    getAll():Product[]{
        return this.products
    }

    @Get(':id')
    getOne(@Param() params):Product {
        return this.products[params.id]
    }

    @Post()
    create(@Body() body : Product):Product {
        this.products.push(body)
        return this.products.find(item => item.Id == body.Id)
    }

    @Put()
    update(@Body() body:Product): Product {
        this.products[this.products.findIndex(item => item.Id == body.Id)] = body
        return this.products.find(item => item.Id == body.Id)
    }

    @Delete(':id')
    delete(@Param() params):Product{
        var productRemoved = this.products[this.products.length-1] 
        this.products.pop()
        return productRemoved
    }


}