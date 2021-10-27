import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

import { Book } from "src/Models/book.model";
import { BooksServices } from "src/Services/books.services";
import { IBook } from "src/Interfaces/book.interface";
import { Converters } from "src/Utils/converters.utils";

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
    async create(@Body() body : IBook):Promise<Book> {
        console.log(Converters.IbookToBook(body))
        return this.productsService.create(Converters.IbookToBook(body))
    }

    @Put()
    async update(@Body() body:IBook): Promise<[number, Book[]]> {
        return this.productsService.update(Converters.IbookToBook(body))
    }

    @Delete(':id')
    async delete(@Param('id') id:number):Promise<Book>{
        return this.productsService.delete(id)
    }


}