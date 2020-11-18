import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe} from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UsersModule } from './users/users.module';
import { CompanyModule } from './company/company.module';
import { VendorModule } from './vendor/vendor.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes( new ValidationPipe());
  app.enableCors();










  //swagger option
  let Options;
  if(process.env.Noce_ENV ==='production'){
    Options = new DocumentBuilder().setTitle("captain api").addServer('/').setVersion('v1').addCookieAuth().build()
  }
  else{
Options = new  DocumentBuilder().setTitle("captain ").addServer('/').setVersion('v1').addBearerAuth().build()
  }
 const document = SwaggerModule.createDocument(app,Options,{ignoreGlobalPrefix:true,include:[AppModule,UsersModule,CompanyModule,VendorModule]});
 SwaggerModule.setup('/explorer',app,document);

 
 
 
  await app.listen(process.env.PORT || 3000);
  console.log('http://localhost:3000/explorer/#/')
}
bootstrap();
