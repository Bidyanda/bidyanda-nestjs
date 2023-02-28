import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { exec } from 'child_process';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/webhook')
  webhook(@Body() body:any) {
    return new Promise<string>((resolve, reject) => {
        exec('./../gitpull.sh', (error, stdout, stderr) => {
          if (error) {
            reject(error);
          } else {
            resolve(stdout);
          }
        });
      });
  }
}
