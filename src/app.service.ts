import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users/users.schema';
import { AuthGuard } from '@nestjs/passport';
import { model } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class AppService {
 
  userModel: any;
  constructor(@InjectModel(User.name) private catModel: Model<UserDocument>,@InjectConnection() private connection: Connection) {}
async register(name:String, email:String, password:String){
  const newUser = new this.userModel({name:name,email:email,password:password});
  const result = await newUser.save();
  console.log(result);
  return 'userId'
}
  
  
}
