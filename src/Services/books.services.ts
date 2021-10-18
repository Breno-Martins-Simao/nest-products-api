import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Book } from "src/Models/book.model";

@Injectable()
export class BooksServices {
    constructor(
        @InjectModel(Book)
        private BookModel: typeof Book
    ){}

    async getAll():Promise<Book[]>{
        return this.BookModel.findAll()
    }

    async getOne(id:number):Promise<Book> {
        return this.BookModel.findByPk(id)
    }

    async create(product : Book):Promise<Book> {
        
        return this.BookModel.create(product)
    }

    async update(product : Book): Promise<[number, Book[]]> {
        return this.BookModel.update(product, {
            where: {
                id: product.id
            }
        })
    }

    async delete(id:number):Promise<Book>{
        var productRemoved = await this.getOne(id)
        productRemoved.destroy()
        return productRemoved
    }

}