import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

import { Book } from "src/Models/book.model";
import { BooksServices } from "src/Services/books.services";

@Controller('books')
export class BooksController {
    constructor(private productsService : BooksServices){

    }

    @Get()
    async getAll():Promise<Book[]>{
        return this.productsService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id') id:number):Promise<Book> {
        return this.productsService.getOne(id)
    }

    @Post()
    async create(@Body() body : Book):Promise<Book> {
        return this.productsService.create(body)
    }

    @Put()
    async update(@Body() body:Book): Promise<[number, Book[]]> {
        return this.productsService.update(body)
    }

    @Delete(':id')
    async delete(@Param('id') id:number):Promise<Book>{
        return this.productsService.delete(id)
    }


}