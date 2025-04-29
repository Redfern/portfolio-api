import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { WorkPlace } from './../src/types/workPlace';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/work-history (GET)', () => {
    return request(app.getHttpServer())
      .get('/work-history')
      .expect(200)
      .expect((res) => {
        const { body }: { body: WorkPlace[] } = res;

        expect(body).toBeInstanceOf(Array);
        expect(body.length).toBeGreaterThan(0);
        expect(body[0].title).toBe('C# Full Stack Senior Developer');
      });
  });
});
