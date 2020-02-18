import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm'
import { User } from 'src/modules/auth/entities/user'
import { TaskStatus } from 'src/modules/tasks/types'

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  status: TaskStatus

  @ManyToOne(
    type => User,
    user => user.tasks,
    { eager: false }
  )
  user: User

  @Column()
  userId: number
}
