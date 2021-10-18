import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

import { Book } from "src/Models/book.model";
import { BooksServices } from "src/Services/books.services";

@Controller('books')
export class BooksController {
    constructor(private productsService : BooksServices){

    }

    @Get()
    getAll():Book[]{
        return this.productsService.getAll()
    }

    @Get(':id')
    getOne(@Param() params):Book {
        return this.productsService.getOne(params.id)
    }

    @Post()
    create(@Body() body : Book):Book {
        return this.productsService.create(body)
    }

    @Put()
    update(@Body() body:Book): Book {
        return this.productsService.update(body)
    }

    @Delete(':id')
    delete(@Param() params):Book{
        return this.productsService.delete(params.id)
    }


}