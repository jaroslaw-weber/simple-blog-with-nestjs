
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/** user */
@Entity("user")
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  /** hashed password (with salt & using bcrypt) */
  @Column()
  password: string

}
