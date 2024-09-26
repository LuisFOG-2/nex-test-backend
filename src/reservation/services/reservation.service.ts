import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from '../entities/reservation.entity';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation) private repo: Repository<Reservation>,
  ) {}
  async findAll() {
    const reservation = await this.repo.find();
    return reservation
  }
  async createId(body: any) {
    const reservation = await this.repo.create(body);
    await this.repo.save(reservation);
    return { message: 'Reservation created successfully' }
  }
}
