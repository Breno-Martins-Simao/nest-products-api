import { Module } from '@nestjs/common';
import { AppController } from './Controllers/app.controller';
import { AppService } from './Services/app.service';
import { BooksController } from './Controllers/books.controller';
import { BooksServices } from './Services/books.services';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { Book } from './Models/book.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Db@Password',
      database: 'bookstore',
      autoLoadModels:true,
      synchronize: true
    }),
    SequelizeModule.forFeature([Book])
  ],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksServices],
})

export class AppModule {}
