import { Module } from '@nestjs/common';
import { AppController } from './Controllers/app.controller';
import { AppService } from './Services/app.service';
import { ProductsController } from './Controllers/products.controller';
@Module({
  imports: [],
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
