import { Injectable  } from '@nestjs/common';
import { InjectSendGrid, SendGridService } from '@ntegral/nestjs-sendgrid';
//import { SendGridService } from '@ntegral/nestjs-sendgrid';
//import { InjectModel } from '@nestjs/mongoose';
//import { User } from './users/users.schema';
//import { AuthGuard } from '@nestjs/passport';
//import { model } from 'mongoose';
//import { InjectConnection } from '@nestjs/mongoose';
//import { Connection } from 'mongoose';

@Injectable()
export class AppService {
  //constructor(private readonly sendGrid:SendGridService){}
  public constructor(@InjectSendGrid() private readonly sendGrid: SendGridService) {}
  googleLogin(req) {
    if (!req.user) {
      return 'No user from google'
    }

    return {
      message: 'User information from google',
      user: req.user
    }
  }

 
async sendEmail(email:string,name:string):Promise<void>{
  await this.sendGrid.send({
    to:email,
   from:process.env.FROM_EMAIL,
    subject:"User Created",
    text:`thankyou ${name}`,
   html:"<strong>${name}, thank you</strong>"
 })
 }
 // userModel: any;
  //constructor(@InjectModel(User.name) private catModel: Model<UserDocument>,@InjectConnection() private connection: Connection) {}
//async register(name:String, email:String, password:String){
  //const newUser = new this.userModel({name:name,email:email,password:password});
  //const result = await newUser.save();
 // console.log(result);
 // return 'userId'
}
  
  
//}
