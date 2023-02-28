import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Bidyanda!, This is github webhook ready I Love U Reji Devi Kambam';
  }
}
