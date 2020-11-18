import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import {CreateCompanyDto} from 'src/company/dto/create-company.dto';
import { Company } from 'src/company/interfaces/company.interface';
import { UserDocument } from 'src/users/schemas/user.schema';
import { CompanyDocument } from './schemas/company.schema';

@Injectable()
export class CompanyService {
    //findAll(): Promise<User[]> {
       // throw new Error('Method not implemented.');
   // }
   // userModel: any;
    constructor(@InjectModel('Company') private readonly companyModel:Model<CompanyDocument>,@InjectConnection() private connection: Connection,private authservice: AuthService){}
//async findall(): {
    // return await this.userModel.find();

 //}
 // async findOne(id:string):Promise<User[]> {
  //  return await this.userModel.findOne({_id:id});
//}

    async create(CreateCompanyDto: CreateCompanyDto): Promise<Company> {
        const createdCompany = new this.companyModel(CreateCompanyDto);
         //const hassedpassword = this.authservice.hashPassword(createdUser.password)
        return createdCompany.save();
      }
      async findAll(): Promise<Company[]> {
         return this.companyModel.find().exec();
       }
}
