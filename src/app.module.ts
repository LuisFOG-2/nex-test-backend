import { Module } from '@nestjs/common';
import { ReservationModule } from './reservation/reservation.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ReservationModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: '@dmin2024',
      database: 'postgres_db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      retryAttempts: 5,
      retryDelay: 2000
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
