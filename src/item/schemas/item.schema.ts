import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BeforeInsert } from 'typeorm';
//import { Company } from '../interfaces/company.interface';

export type ItemDocument = Item & Document;

@Schema()
export class Item {
  @Prop()
  itemname: string;

  @Prop()
  unit: string;

  @Prop()
  itemcode: string;

  @Prop()
  hsn: string;
  @Prop()
  saleprice: string;
  @Prop()
  purchaseprice: string;
  @Prop()
  taxrate: string;
  @Prop()
  img: string;



}

export const ItemSchema = new mongoose.Schema({
    itemname: String,
     unit: String,
     itemcode: String,
     hsn: String,
     saleprice: String,
     purchaseprice: String,
     taxrate: String,
     img: String

 
});