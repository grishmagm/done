
import { Model } from 'mongoose';
import { Injectable} from '@nestjs/common';
import { User } from './interfaces/user.interface';
import {  UserDocument } from './schemas/user.schema';
import { InjectModel} from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import{bcrypt} from  'bcrypt'
import { from, Observable, of } from 'rxjs';
@Injectable()
export class UsersService {
constructor(@InjectModel('User') private readonly userModel:Model<UserDocument>,@InjectConnection() private connection: Connection,private authservice: AuthService){}
 //async findall(): {
    // return await this.userModel.find();

 //}
 // async findOne(id:string):Promise<User[]> {
  //  return await this.userModel.findOne({_id:id});
//}

async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
     //const hassedpassword = this.authservice.hashPassword(createdUser.password)
    return createdUser.save();
  }
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  googleLogin(req) {
    if (!req.user) {
      return 'No user from google'
    }

    return {
      message: 'User information from google',
      user: req.user
    }
  }

}
