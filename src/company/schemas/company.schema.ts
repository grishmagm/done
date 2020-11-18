import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BeforeInsert } from 'typeorm';
//import { Company } from '../interfaces/company.interface';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
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

export const CompanySchema = new mongoose.Schema({
 name:String,
 email:String,
 password:String,
 confirmpass:String,
 qty:String
});