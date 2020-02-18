import { Exclude } from 'class-transformer'
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
} from 'typeorm'
import { Task } from 'src/modules/tasks/task/task.entity'

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Exclude()
  @Column()
  password: string

  @Exclude()
  @Column()
  salt: string

  @Exclude()
  @OneToMany(
    () => Task,
    task => task.user,
    { eager: false }
  )
  tasks: Task[]
}
