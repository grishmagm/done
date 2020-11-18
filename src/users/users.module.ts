import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
//import { UserSchema } from './user.model';
//import { User, UserSchema } from './schemas/user.schema';
import { UserController } from './user.controller';
import{UserSchema}  from './schemas/user.schema';
import { GoogleStrategy } from '../google.strategy';
import { AuthModule } from 'src/auth/auth.module';
import { InvoiceModule } from './../invoice/invoice.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [ MongooseModule.forFeature([{name:'User',schema:UserSchema}]),AuthModule ],
  providers: [UsersService,GoogleStrategy],
  exports: [UsersService],
  controllers: [ UserController]
})
export class UsersModule {}
