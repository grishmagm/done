//import { Injectable } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import {CreateItemDto} from 'src/item/dto/create-item.dto';
import { Item } from 'src/item/interfaces/item.interface';
import { UserDocument } from 'src/users/schemas/user.schema';
import { ItemDocument } from './schemas/item.schema';

@Injectable()
export class ItemService {
    //findAll(): Promise<User[]> {
       // throw new Error('Method not implemented.');
   // }
   // userModel: any;
    constructor(@InjectModel('Item') private readonly itemModel:Model<ItemDocument>,@InjectConnection() private connection: Connection ){}
//async findall(): {
    // return await this.userModel.find();

 //}
 // async findOne(id:string):Promise<User[]> {
  //  return await this.userModel.findOne({_id:id});
//}

    async create(CreateItemDto: CreateItemDto): Promise<Item> {
        const createditem = new this.itemModel(CreateItemDto);
         //const hassedpassword = this.authservice.hashPassword(createdUser.password)
        return createditem.save();
      }
      async findAll(): Promise<Item[]> {
         return this.itemModel.find().exec();
       }
}