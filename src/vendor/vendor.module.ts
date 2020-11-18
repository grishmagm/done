import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { VendorSchema } from './schemas/vendor.schema';
import { VendorController } from './vendor.controller';
import { VendorService } from './vendor.service';

@Module({
  imports: [ MongooseModule.forFeature([{name:'Vendor',schema:VendorSchema}]),AuthModule ],
  controllers: [VendorController],
  providers: [VendorService]
})
export class VendorModule {}
