
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
import { IsEmail } from 'class-validator';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UsersService {
 
constructor(@InjectModel('User') private readonly userModel:Model<UserDocument>,@InjectConnection() private connection: Connection,private authservice: AuthService, private jwtService: JwtService){}
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
  async findOne(username: string): Promise<User[]> {
    return this.userModel.find(User => User.email === username,user => user.password === user);
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
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userModel.findOne(IsEmail);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(name:string,password: string ) :Promise<any> {
    const payload = await this.userModel.find( (User: { name: string; }) => User.name === name,user => user.password === password );
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}
