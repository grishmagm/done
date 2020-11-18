import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from 'src/users/interfaces/user.interface';
import { UsersService } from 'src/users/users.service';
import { CompanyService } from './company.service';
import {CreateCompanyDto} from 'src/company/dto/create-company.dto';

@Controller('company')
export class CompanyController {
    usersService: any;
    constructor(private readonly  CompanyService:CompanyService){}

    @Get()
    findAll():Promise<User[]>{
      return this.CompanyService.findAll();
    }
    @Post()
    create(@Body()CreateUserDto:CreateCompanyDto):Promise<User>{
        return this.CompanyService.create(CreateUserDto);
    }
    @Delete(':id')
    delete(@Param('id') id ){
   return `Delete ${id}`
    }
    @Put(':id')
    update(@Body() updateCompanyDto:CreateCompanyDto,@Param('id') id):string{
   return `Update ${id}-Name:${updateCompanyDto}`;
    }
}
