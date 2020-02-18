import { InternalServerErrorException } from '@nestjs/common'
import { EntityRepository, Repository } from 'typeorm'
import { User } from 'src/modules/auth/entities/user'
import { CreateDTO, GetFilterDTO } from 'src/modules/tasks/dtos/task'
import { Task } from 'src/modules/tasks/entities/task'
import { TaskStatus } from 'src/modules/tasks/types'

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async getTasks(filterDto: GetFilterDTO, user: User): Promise<Task[]> {
    const { status, search } = filterDto
    const query = this.createQueryBuilder('task')

    query.where('task.userId = :userId', { userId: user.id })

    if (status) {
      query.andWhere('task.status = :status', { status })
    }

    if (search) {
      query.andWhere(
        '(task.title LIKE :search OR task.description LIKE :search)',
        { search: `%${search}%` }
      )
    }

    try {
      const tasks = await query.getMany()
      return tasks
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }

  async createTask(createDTO: CreateDTO, user: User): Promise<Task> {
    const { title, description } = createDTO

    const task = new Task()
    task.title = title
    task.description = description
    task.status = TaskStatus.OPEN
    task.user = user

    try {
      await task.save()
    } catch (error) {
      throw new InternalServerErrorException()
    }

    delete task.user
    return task
  }
}
