import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { Vendor } from './schemas/vendor.schema';
import { VendorService } from './vendor.service';
@Controller('vendor')
export class VendorController {
    constructor(private readonly  VendorService:VendorService){}

    @Get()
    findAll():Promise<Vendor[]>{
      return this.VendorService.findAll();
    }
    @Post()
    create(@Body()CreateVendorDto:CreateVendorDto):Promise<Vendor>{
       
        return this.VendorService.create(CreateVendorDto);
    }
    @Delete(':id')
    delete(@Param('id') id ){
   return `Delete ${id}`
    }
    @Put(':id')
    update(@Body() CreateVendorDto:CreateVendorDto,@Param('id') id):string{
   return `Update ${id}-Name:${CreateVendorDto}`;
    }
}
