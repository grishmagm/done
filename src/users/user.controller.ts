import { Controller, Get ,Post,Body,Req,Res,Param, Delete, Put,UseGuards} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {Request , Response}from 'express';
import { ApiForbiddenResponse } from '@nestjs/swagger';
import { UsersService } from '../users/users.service';
import { User } from './interfaces/user.interface';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './local-auth.guard';



@Controller('user')
export class UserController {
    constructor(private readonly  usersService:UsersService){}
    @Get()
    findAll():Promise<User[]>{
      return this.usersService.findAll();
    }
    //}
    //@Post()
 //async findOne(@Param('id') id):Promise<User>{
//return this.usersService.findOne();
   // }
  
    @Post('login')
    async login(@Req() req) {
      return this.usersService.login(req.name,req.password);
      
      console.log(req.user)
    }
    @Get()
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req) {}
  
    @Get('auth/google/callback')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req) {
      return this.usersService.googleLogin(req)
      console.log(this.usersService.googleLogin(req));
    }
  

    @Post()
    create(@Body()CreateUserDto:CreateUserDto):Promise<User>{
        return this.usersService.create(CreateUserDto);
        console.log('post ', CreateUserDto);
    }
    //@Post()
    //find(@Body()CreateUserDto:CreateUserDto):Promise<User>{
     //   return this.usersService.findOne(CreateUserDto);
    //    console.log('post ', CreateUserDto);
    //}
    @Delete(':id')
    delete(@Param('id') id ){
   return `Delete ${id}`
    }
    @Put(':id')
    update(@Body() updateItemDto:CreateUserDto,@Param('id') id):string{
   return `Update ${id}-Name:${updateItemDto}`;
    }
}
