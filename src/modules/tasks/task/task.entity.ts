import { ApiProperty } from '@nestjs/swagger'
import { Exclude } from 'class-transformer'
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
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty()
  @Column()
  title: string

  @ApiProperty()
  @Column()
  description: string

  @ApiProperty()
  @Column()
  status: TaskStatus

  @Exclude()
  @ManyToOne(
    type => User,
    user => user.tasks,
    { eager: false }
  )
  user: User

  @ApiProperty()
  @Column()
  userId: number
}
