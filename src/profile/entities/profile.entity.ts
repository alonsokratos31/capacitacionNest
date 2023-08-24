import { User } from '../../user/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  photo: string;

  @OneToMany(() => User, (user) => user.profile)
  user: User[];

  @DeleteDateColumn()
  deletedAt: Date;
}
