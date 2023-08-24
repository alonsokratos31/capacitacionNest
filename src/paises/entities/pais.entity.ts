import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // sql table
export class Pais {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @Column()
  poblacion: number;
  @Column('json', { nullable: true })
  ciudades: string[];
}
