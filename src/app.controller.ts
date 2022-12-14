import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseDto } from './response.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async payload(@Body() payload: ResponseDto<any>) {
    console.log(payload);
    return payload;
  }
}
