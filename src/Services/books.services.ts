import { Injectable } from "@nestjs/common";
import { Book } from "src/Models/book.model";

@Injectable()
export class BooksServices {
    Books : Book[] = [
        // new Book("BOOK001", "Java Book for begginers", 50),
        // new Book("BOOK002", "Typescript Book for begginers", 50),
        // new Book("BOOK003", "DotNet Book for begginers", 50),
        // new Book("BOOK004", "Javascript Book for begginers", 50),
    ]

    getAll():Book[]{
        return this.Books
    }

    getOne(id:number):Book {
        return this.Books[0]
    }

    create(product : Book):Book {
        this.Books.push(product)
        return product
    }

    update(product : Book): Book {
        return product
    }

    delete(id:number):Book{
        var productRemoved = this.Books[this.Books.length-1] 
        this.Books.pop()
        return productRemoved
    }

}