import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Bidyanda!, Testing for deploy app on node js, Thank You. I love You Reji. Love Love';
  }
}
