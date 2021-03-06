import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { ItemSchema } from './schemas/item.schema';

@Module({
  imports: [ MongooseModule.forFeature([{name:'Item',schema:ItemSchema}]) ],
  providers: [ItemService],
  controllers: [ItemController]
})
export class ItemModule {}
