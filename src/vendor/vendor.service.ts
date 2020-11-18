import { Injectable, Res } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { Vendor, VendorDocument } from './schemas/vendor.schema';

@Injectable()
export class VendorService {
    constructor(@InjectModel('Vendor') private readonly vendorModel:Model<VendorDocument>,@InjectConnection() private connection: Connection,private authservice: AuthService){}
    
    
    async create(CreateVendorDto: CreateVendorDto): Promise<Vendor> {
        const createdVendor = new this.vendorModel(CreateVendorDto);
         //const hassedpassword = this.authservice.hashPassword(createdUser.password)
         console.log(createdVendor);
         
        return createdVendor.save();
      }
      async findAll(): Promise<Vendor[]> {
         return this.vendorModel.find().exec();
       }
}
