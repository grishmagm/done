import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Item } from 'src/item/interfaces/item.interface';
import { UsersService } from 'src/users/users.service';
import { ItemService } from './item.service';
import {CreateItemDto} from 'src/item/dto/create-item.dto';

@Controller('item')
export class ItemController {
    constructor(private readonly  ItemService:ItemService){}
   
    @Post()
    create(@Body()CreateItemDto:CreateItemDto):Promise<Item>{
        return this.ItemService.create(CreateItemDto);
    }
}
