
import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BeforeInsert } from 'typeorm';

export type VendorDocument = Vendor & Document;

@Schema()
export class Vendor {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;

  @Prop()
  email: string;
  @Prop()
  password: string;

 @BeforeInsert()
 emailTOLowerCase(){
   this.email = this.email.toLowerCase();
 }

}

export const VendorSchema = new mongoose.Schema({
 name:String,
 email:String,
 password:String,
 confirmpass:String,
 qty:String
});