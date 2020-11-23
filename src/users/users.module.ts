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
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { LocalStrategy } from './local.strategy';
@Module({
  imports: [ MongooseModule.forFeature([{name:'User',schema:UserSchema}]),AuthModule ,JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),],
  providers: [UsersService,GoogleStrategy, LocalStrategy],
  exports: [UsersService],
  controllers: [ UserController]
})
export class UsersModule {}
