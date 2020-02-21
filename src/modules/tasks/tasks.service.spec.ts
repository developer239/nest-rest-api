import { TestingModule } from '@nestjs/testing'
import { AuthTestingEntityService } from 'src/modules/auth/testing-entity.service'
import { CreateTaskDTO, GetFilterDTO } from 'src/modules/tasks/task/task.dto'
import { TaskStatus } from 'src/modules/tasks/task/task.types'
import { TasksModule } from 'src/modules/tasks/tasks.module'
import { TasksService } from 'src/modules/tasks/tasks.service'
import { TasksTestingEntityService } from 'src/modules/tasks/testing-entity.service'
import { bootstrap } from 'src/modules/testing/main'

describe('[service] TaskService', () => {
  let tasksService: TasksService
  let authEntity: AuthTestingEntityService
  let taskEntity: TasksTestingEntityService

  beforeAll(async () => {
    const app: TestingModule = await bootstrap({
      imports: [TasksModule],
      providers: [AuthTestingEntityService, TasksTestingEntityService],
    })

    tasksService = app.get<TasksService>(TasksService)

    authEntity = app.get<AuthTestingEntityService>(AuthTestingEntityService)
    taskEntity = app.get<TasksTestingEntityService>(TasksTestingEntityService)
  })

  describe('getTasks', () => {
    it('should return user 2 tasks', async () => {
      const user = await authEntity.createUser()
      const expectedTasks = await taskEntity.createTasks(2, user)

      const tasks = await tasksService.getTasks({} as GetFilterDTO, user)

      expect(tasks).toStrictEqual(expectedTasks)
    })

    describe('when filter status property', () => {
      it('should return relevant tasks', async () => {
        const expectedStatus = TaskStatus.DONE

        const user = await authEntity.createUser()
        await taskEntity.createTask(user, { status: TaskStatus.OPEN })
        const task1relevant = await taskEntity.createTask(user, {
          status: expectedStatus,
        })
        const task2relevant = await taskEntity.createTask(user, {
          status: expectedStatus,
        })

        const tasks = await tasksService.getTasks(
          { status: expectedStatus } as GetFilterDTO,
          user
        )

        expect(tasks).toStrictEqual([task1relevant, task2relevant])
      })
    })

    describe('when search status property', () => {
      it('should return relevant tasks', async () => {
        const expectedTitle = 'hello'

        const user = await authEntity.createUser()
        await taskEntity.createTask(user, { title: 'some title' })
        const task1relevant = await taskEntity.createTask(user, {
          title: `left ${expectedTitle}`,
        })
        const task2relevant = await taskEntity.createTask(user, {
          title: `${expectedTitle} right`,
        })
        const task3relevant = await taskEntity.createTask(user, {
          description: expectedTitle,
        })

        const tasks = await tasksService.getTasks(
          { search: expectedTitle } as GetFilterDTO,
          user
        )

        expect(tasks).toStrictEqual([
          task1relevant,
          task2relevant,
          task3relevant,
        ])
      })
    })
  })

  describe('createTask', () => {
    it('should create new task', async () => {
      const user = await authEntity.createUser()

      const createDTO: CreateTaskDTO = {
        title: 'some title',
        description: 'some description',
      }

      const task = await tasksService.createTask(createDTO, user)

      expect(task).toMatchObject({
        title: createDTO.title,
        description: createDTO.description,
        status: 'something',
      })
    })
  })
})
