import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { GetUser } from 'src/modules/auth/user/user.decorator'
import { User } from 'src/modules/auth/user/user.entity'
import { CreateDTO, GetFilterDTO } from 'src/modules/tasks/task/task.dto'
import { Task } from 'src/modules/tasks/task/task.entity'
import { TaskStatus } from 'src/modules/tasks/task/task.types'
import { TaskStatusValidationPipe } from 'src/modules/tasks/task/task.validation'
import { TasksService } from 'src/modules/tasks/tasks.service'

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(
    @Query(ValidationPipe) filterDTO: GetFilterDTO,
    @GetUser() user: User
  ): Promise<Task[]> {
    return this.tasksService.getTasks(filterDTO, user)
  }

  @Get('/:id')
  getTaskById(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User
  ): Promise<Task> {
    return this.tasksService.getTaskById(id, user)
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(
    @Body() createDTO: CreateDTO,
    @GetUser() user: User
  ): Promise<Task> {
    return this.tasksService.createTask(createDTO, user)
  }

  @Delete('/:id')
  deleteTask(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User
  ): Promise<Task> {
    return this.tasksService.deleteTask(id, user)
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', TaskStatusValidationPipe) status: TaskStatus,
    @GetUser() user: User
  ): Promise<Task> {
    return this.tasksService.updateTaskStatus(id, status, user)
  }
}
