import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ReservationService } from '../services/reservation.service';

@Controller('reservation')
export class ReservationController {
  constructor(private reService: ReservationService) {}
  @Get()
  getMain() {
    return 'Welcome to my Main service!';
  }
  @Get('/show')
  getAll() {
    return this.reService.findAll();
  }

  @Post('/created')
  @HttpCode(HttpStatus.CREATED)
  async createReservation(@Body() body: any) {
    return await this.reService.createId(body);
  }
}
