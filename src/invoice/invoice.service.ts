//import { UserService } from './../user/user.service';
//import { InvoiceModel } from './invoice.model';
//import { Injectable } from '@nestjs/common';
//import { InjectRepository } from '@nestjs/typeorm';
//import { Repository } from 'typeorm';
//import { CreateInvoiceDTO } from './dto/invoice.dto';

//@Injectable()
export class InvoiceService {
   UserService: any;

  constructor(
  //  @InjectRepository(InvoiceModel)
  //  private invoiceRepository: Repository<InvoiceModel>,
  //  private customerService: UserService
) { }

 //async create(invoice: CreateInvoiceDTO): Promise<InvoiceModel> {
  //  const customer = await this.UserService.findOne(invoice.user);
  //  const subTotal = invoice.items.reduce((acc, curr) => {
   //   return acc + Number((curr.rate * curr.quantity).toFixed(2))
   // }, 0)

  //  const taxAmount = subTotal * Number((invoice.taxRate / 100).toFixed(2));
  //  const total = subTotal + taxAmount;
   // const outstandingBalance = total;
   // return this.invoiceRepository.save({
    //  ...invoice,
    //  customer,
    //  subTotal,
   //   taxAmount,
    //  total,
    //  outstandingBalance
   // } as any);

 // }

 // findAll(): Promise<InvoiceModel[]> {
  //  return this.invoiceRepository.find();
 // }

 // findByCustomer(id: string): Promise<InvoiceModel[]>{
  //  return this.invoiceRepository.createQueryBuilder("invoice")
  //  .where("invoice.customer = :id", { id })
  //  .getMany();
 // }

 // findOne(id: string): Promise<InvoiceModel> {
   // return this.invoiceRepository.findOne(id);
  //}
  const invoice.data = {
    //"documentTitle": "RECEIPT", //Defaults to INVOICE
    "currency": "USD",
    "taxNotation": "vat", //or gst
    "marginTop": 25,
    "marginRight": 25,
    "marginLeft": 25,
    "marginBottom": 25,
    "logo": "https://www.easyinvoice.cloud/img/logo.png", //or base64
    //"logoExtension": "png", //only when logo is base64
    "sender": {
        "company": "Sample Corp",
        "address": "Sample Street 123",
        "zip": "1234 AB",
        "city": "Sampletown",
        "country": "Samplecountry"
        //"custom1": "custom value 1",
        //"custom2": "custom value 2",
        //"custom3": "custom value 3"
    },
    "client": {
       	"company": "Client Corp",
       	"address": "Clientstreet 456",
       	"zip": "4567 CD",
       	"city": "Clientcity",
       	"country": "Clientcountry"
        //"custom1": "custom value 1",
        //"custom2": "custom value 2",
        //"custom3": "custom value 3"
    },
    "invoiceNumber": "2020.0001",
    "invoiceDate": "05-01-2020",
    "products": [
        {
            "quantity": "2",
            "description": "Test1",
            "tax": 6,
            "price": 33.87
        },
        {
            "quantity": "4",
            "description": "Test2",
            "tax": 21,
            "price": 10.45
        }
    ],
    "bottomNotice": "Kindly pay your invoice within 15 days."
};
}
