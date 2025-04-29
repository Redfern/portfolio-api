import { Injectable } from '@nestjs/common';
import { workPlaces } from './data/workPlace';
import { WorkPlace } from './types/workPlace';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getWorkHistory(): WorkPlace[] {
    return workPlaces;
  }
}
