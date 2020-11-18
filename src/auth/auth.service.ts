import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { from, Observable, of } from 'rxjs';
import { User } from '../users/interfaces/user.interface';
import{bcrypt} from  'bcrypt'


@Injectable()
export class AuthService {
  usersService: any;
  constructor(
  private readonly  JwtService:JwtService
  ) {}
  generateJWT(user:User): Observable<string>{
return from(this.JwtService.signAsync({user}));
  }
  hashPassword(password:string):Observable<string>{
    return from<string>(bcrypt.hash(password,12));
  }


  comparePasswords(newPassword:string,passwordHash:string):Observable<any|boolean>{
return of<any| boolean>(bcrypt.compare(newPassword,passwordHash));
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.name === pass) {
      const { name, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.JwtService.sign(payload),
    };
  }
}