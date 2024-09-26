import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  room: string;

  @Column({ type: 'date' })
  checkin: string; // 'YYYY-MM-DD'

  @Column({ type: 'date' })
  checkout: string; // 'YYYY-MM-DD'

  @Column({ type: 'int' })
  people: number;
}
