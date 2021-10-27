import { IBook } from "src/Interfaces/book.interface";
import { Book } from "src/Models/book.model";

export class Converters{
    static IbookToBook(IBook:IBook):Book{
        let book = new Book()

        book.Code = IBook.Code
        book.Name = IBook.Name
        book.Price = IBook.Price

        return book
    }
}