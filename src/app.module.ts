import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { User,userSchema  } from './users/schemas/user.schema';
import { ConfigModule } from '@nestjs/config';
//import { dotenv } from '@nestjs/dotenv';

@Module({
  imports: [ConfigModule.forRoot( '.env.development.local', '.env.development')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
