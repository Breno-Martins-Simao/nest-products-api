import { Module } from '@nestjs/common';
import { AppController } from './Controllers/app.controller';
import { AppService } from './Services/app.service';
import { BooksController } from './Controllers/books.controller';
import { BooksServices } from './Services/books.services';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { Book } from './Models/book.model';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DATABASE_SERVER,
      port: Number.parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PWD,
      database: process.env.DATABASE_NAME,
      autoLoadModels:true,
      synchronize: true
    }),
    SequelizeModule.forFeature([Book])
  ],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksServices],
})

export class AppModule {}
