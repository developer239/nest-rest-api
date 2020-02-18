import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm'
import { User } from 'src/modules/auth/user/user.entity'
import { TaskStatus } from 'src/modules/tasks/task/task.types'

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
