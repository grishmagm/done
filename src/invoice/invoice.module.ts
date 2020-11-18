
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
//import { InvoiceService } from './invoice.service';
import { InvoiceResolver } from './invoice.resolver';
import { InvoiceModel } from './invoice.model';
//import { InvoiceResolver } from './invoice.resolver';
var easyinvoice = require('easyinvoice');

@Module({
  imports:[] ,
  providers: [ InvoiceResolver],
  exports: []
})
export class InvoiceModule {}