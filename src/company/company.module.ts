import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/users/schemas/user.schema';
import { AuthModule } from 'src/auth/auth.module';
import { CompanySchema } from './schemas/company.schema';

@Module({
  imports: [ MongooseModule.forFeature([{name:'Company',schema:CompanySchema}]),AuthModule ],
  providers: [CompanyService],
  controllers: [CompanyController]
})
export class CompanyModule {}
