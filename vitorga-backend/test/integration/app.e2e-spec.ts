import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('Vitorga API (integration)', () => {
  let app: INestApplication;
  let accessToken: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({ whitelist: true, transform: true }),
    );
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('GET /health', () => {
    it('should return healthy status', async () => {
      const res = await request(app.getHttpServer()).get('/health');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('ok');
    });
  });

  describe('POST /auth/register', () => {
    it('should register a new user', async () => {
      const res = await request(app.getHttpServer())
        .post('/auth/register')
        .send({
          firstname: 'Jean',
          lastname: 'Dupont',
          email: 'jean.dupont@vitorga.fr',
          password: 'password123',
        });

      expect(res.status).toBe(201);
      expect(res.body.email).toBe('jean.dupont@vitorga.fr');
      expect(res.body.password).toBeUndefined();
    });

    it('should return 409 when email already exists', async () => {
      await request(app.getHttpServer()).post('/auth/register').send({
        firstname: 'A',
        lastname: 'B',
        email: 'double@test.fr',
        password: '123456',
      });

      const res = await request(app.getHttpServer())
        .post('/auth/register')
        .send({
          firstname: 'A',
          lastname: 'B',
          email: 'double@test.fr',
          password: '123456',
        });

      expect(res.status).toBe(409);
    });

    it('should return 400 when email is invalid', async () => {
      const res = await request(app.getHttpServer())
        .post('/auth/register')
        .send({
          firstname: 'A',
          lastname: 'B',
          email: 'pasunemail',
          password: '123456',
        });

      expect(res.status).toBe(400);
    });
  });

  describe('POST /auth/login', () => {
    beforeAll(async () => {
      await request(app.getHttpServer()).post('/auth/register').send({
        firstname: 'Marie',
        lastname: 'Martin',
        email: 'marie@vitorga.fr',
        password: 'password123',
      });

      const res = await request(app.getHttpServer())
        .post('/auth/login')
        .send({ email: 'marie@vitorga.fr', password: 'password123' });

      accessToken = res.body.accessToken;
    });

    it('should return accessToken on valid credentials', async () => {
      const res = await request(app.getHttpServer())
        .post('/auth/login')
        .send({ email: 'marie@vitorga.fr', password: 'password123' });

      expect(res.status).toBe(200);
      expect(res.body.accessToken).toBeDefined();
    });

    it('should return 401 on wrong password', async () => {
      const res = await request(app.getHttpServer())
        .post('/auth/login')
        .send({ email: 'marie@vitorga.fr', password: 'mauvaismdp' });

      expect(res.status).toBe(401);
    });

    it('should return 401 for unknown email', async () => {
      const res = await request(app.getHttpServer())
        .post('/auth/login')
        .send({ email: 'inconnu@test.fr', password: 'password123' });

      expect(res.status).toBe(401);
    });
  });

  describe('GET /ressources', () => {
    it('should return 401 without token', async () => {
      const res = await request(app.getHttpServer()).get('/ressources');
      expect(res.status).toBe(401);
    });

    it('should return list of ressources with token', async () => {
      const res = await request(app.getHttpServer())
        .get('/ressources')
        .set('Authorization', `Bearer ${accessToken}`);

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  describe('POST /ressources', () => {
    it('should create a ressource', async () => {
      const res = await request(app.getHttpServer())
        .post('/ressources')
        .set('Authorization', `Bearer ${accessToken}`)
        .send({
          nom: 'Soufre micronisé',
          unite_mesure: 'kg',
          stock_actuel: 80,
          seuil_alerte: 30,
        });

      expect(res.status).toBe(201);
      expect(res.body.nom).toBe('Soufre micronisé');
      expect(res.body.stock_actuel).toBe(80);
    });

    it('should return 400 when nom is missing', async () => {
      const res = await request(app.getHttpServer())
        .post('/ressources')
        .set('Authorization', `Bearer ${accessToken}`)
        .send({ unite_mesure: 'kg', stock_actuel: 80, seuil_alerte: 30 });

      expect(res.status).toBe(400);
    });
  });

  describe('GET /ressources/stock-projection', () => {
    it('should return projections with alerte flag', async () => {
      const res = await request(app.getHttpServer())
        .get('/ressources/stock-projection')
        .set('Authorization', `Bearer ${accessToken}`);

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      if (res.body.length > 0) {
        expect(res.body[0]).toHaveProperty('stockProjecte');
        expect(res.body[0]).toHaveProperty('isAlerte');
        expect(res.body[0]).toHaveProperty('criticite');
      }
    });
  });

  describe('GET /users', () => {
    it('should return 401 without token', async () => {
      const res = await request(app.getHttpServer()).get('/users');
      expect(res.status).toBe(401);
    });

    it('should return users list with token', async () => {
      const res = await request(app.getHttpServer())
        .get('/users')
        .set('Authorization', `Bearer ${accessToken}`);

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  describe('POST /equipes', () => {
    it('should create an equipe', async () => {
      const res = await request(app.getHttpServer())
        .post('/equipes')
        .set('Authorization', `Bearer ${accessToken}`)
        .send({ name: 'Équipe Vendange', surface_attribuee: 5.5 });

      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Équipe Vendange');
    });

    it('should return 400 when name is missing', async () => {
      const res = await request(app.getHttpServer())
        .post('/equipes')
        .set('Authorization', `Bearer ${accessToken}`)
        .send({ surface_attribuee: 5.5 });

      expect(res.status).toBe(400);
    });
  });
});
