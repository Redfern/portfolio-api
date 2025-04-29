import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { WorkPlace } from './types/workPlace';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('work-history')
  getWorkHistory(): WorkPlace[] {
    return this.appService.getWorkHistory();
  }
}
