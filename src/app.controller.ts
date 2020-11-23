import { Controller, Req, Post, UseGuards, Get, CacheInterceptor, UseInterceptors, CacheKey, CacheTTL } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
//import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './users/local-auth.guard';
import { AuthService } from './auth/auth.service';
import {  MessagePattern,Payload} from '@nestjs/microservices';
import { SendGridService } from '@ntegral/nestjs-sendgrid';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(private readonly appService: AppService,) {}

  
  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('auth/google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req)
    console.log(this.appService.googleLogin(req));
  }

  @Post('email')
@MessagePattern('notification-email')
async sendEmail(@Payload() data:any): Promise<void> {
  await this.appService.sendEmail(data.value.email, data.value.name)
 console.log(data.value);
}
@MessagePattern('notification-phone')
async sendPhone(@Payload() data:any): Promise<void>{
  await this.appService.sendEmail
 console.log(data.value)
}

 // @UseGuards( JwtAuthGuard)
 // @Post('auth/register')
//  async register(@Request() req) {
  //  return this.appService.register(req.user);
  @CacheKey('custom_key')
  @CacheTTL(20)
  findAll(): string[] {
    return [];
  }

}

 

 // @UseGuards( JwtAuthGuard)
 // @Post('auth/login')
 // async login(@Request() req) {
 //   return this.authService.login(req.user);

//}
//@UseGuards(JwtAuthGuard)
//@Get('profile')
//getProfile(@Request() req) {
 // return req.user;
//}
//}
