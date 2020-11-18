import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { async } from 'rxjs';

@Module({
  imports:[
JwtModule.registerAsync({
  imports:[ConfigModule],
  inject:[ConfigService],
  useFactory: async(ConfigService:ConfigService)=>({
    secret:ConfigService.get('JWT_SECRET '),
    signOptions:{expiresIn:'100s'}
  })
})
  ],
  providers:[AuthService],
  exports:[AuthService]
})
  
export class AuthModule {}