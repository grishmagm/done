import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
//import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
//import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { model } from 'mongoose';
//import { User, UserDocument } from './schemas/user.schema';
//import { CreateCatDto } from './dto/create-cat.dto';


//import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  userModel: any;
  constructor(@InjectModel(User.name) private catModel: Model<UserDocument>,@InjectConnection() private connection: Connection) {}
async register(name:String, email:String, password:String){
  const newUser = new this.userModel({name:name,email:email,password:password});
  const result = await newUser.save();
  console.log(result);
  return 'userId'
}
  
}
