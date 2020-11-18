import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { User,userSchema  } from './users/schemas/user.schema';
import { ConfigModule } from '@nestjs/config';
//import { dotenv } from '@nestjs/dotenvnestjs-dotenv';
import { UserController } from './users/user.controller';
import { UserService } from './user/user.service';
//import{UserModule} from  './user/';
import config from './config/keys';
import { SendGridModule } from '@ntegral/nestjs-sendgrid';
//import { ConfigModule } from '@ntegral/config';
import { ConfigService } from '@nestjs/config';
import{SendGridService} from  '@ntegral/nestjs-sendgrid'
import { GoogleStrategy } from './google.strategy';
//import { dotenv } from 'nestjs-dotenv';
import { AuthService } from './auth/auth.service';
import { JwtService } from '@nestjs/jwt';
//import { LocalAuthGuard } from './auth/local-auth.guard';
//import { AuthService } from './auth/auth.service';
import { CompanyModule } from './company/company.module';
import { VendorModule } from './vendor/vendor.module';
import { CacheModule , CacheInterceptor} from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { InvoiceModule } from './invoice/invoice.module';





@Module({
  imports: [  UsersModule, MongooseModule.forRoot(config.mongoURI), CompanyModule, VendorModule,CacheModule.register({ttl: 5, // seconds
    max: 10,}),SendGridModule.forRoot({
       apiKey: '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',
    }), InvoiceModule
    
],
  controllers: [AppController, UserController],
  providers: [AppService, UserService,GoogleStrategy, {
    provide: APP_INTERCEPTOR,
    useClass: CacheInterceptor,
  },],
})
export class AppModule {}
