
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
  address: String;

  @Prop()
  states: string;

  @Prop()
  email: string;
  @Prop()
  password: string;

  @Prop()
  contact: Number;

  @Prop()
  balance: string;
  @Prop()
  Gst: string;

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
 qty:String,
 address: String,
 states: String,
 contact: String,
 balance: String,
 Gst: String

});