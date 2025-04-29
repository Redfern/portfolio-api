import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmploymentType } from './types/employmentType';

jest.mock('./app.service', () => ({
  AppService: jest.fn().mockImplementation(() => ({
    getHello: jest.fn(() => 'Hello World!'),
    getWorkHistory: jest.fn(() => [
      {
        title: 'mocked title',
        place: 'mocked',
        years: '2019 - 2021',
        description: 'hard to say...',
        employmentType: EmploymentType.Contract,
      },
    ]),
  })),
}));

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get(AppController);

      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('getWorkHistory', () => {
    it('should return an array of work places', () => {
      const appController = app.get(AppController);
      const result = appController.getWorkHistory();

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
      expect(result[0].title).toBe('mocked title');
    });
  });
});
