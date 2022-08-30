import { Module }        from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService }    from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Offer }         from './entities/offer.entity';
import 'reflect-metadata';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'a1501s0607',
      database: 'freecash-test',
      entities: [Offer],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
