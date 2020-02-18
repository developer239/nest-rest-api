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
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { GetUser } from 'src/modules/auth/user/user.decorator'
import { User } from 'src/modules/auth/user/user.entity'
import { CreateTaskDTO, GetFilterDTO } from 'src/modules/tasks/task/task.dto'
import { Task } from 'src/modules/tasks/task/task.entity'
import { TaskStatus } from 'src/modules/tasks/task/task.types'
import { TaskStatusValidationPipe } from 'src/modules/tasks/task/task.validation'
import { TasksService } from 'src/modules/tasks/tasks.service'

@ApiBearerAuth()
@ApiTags('Tasks')
@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @ApiOkResponse({
    type: [Task],
  })
  @Get()
  getTasks(
    @Query(ValidationPipe) filterDTO: GetFilterDTO,
    @GetUser() user: User
  ): Promise<Task[]> {
    return this.tasksService.getTasks(filterDTO, user)
  }

  @ApiOkResponse({
    type: Task,
  })
  @Get('/:id')
  getTaskById(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User
  ): Promise<Task> {
    return this.tasksService.getTaskById(id, user)
  }

  @ApiOkResponse({
    type: Task,
  })
  @Post()
  @UsePipes(ValidationPipe)
  createTask(
    @Body() createDTO: CreateTaskDTO,
    @GetUser() user: User
  ): Promise<Task> {
    return this.tasksService.createTask(createDTO, user)
  }

  @ApiOkResponse({
    type: Task,
  })
  @Delete('/:id')
  deleteTask(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User
  ): Promise<Task> {
    return this.tasksService.deleteTask(id, user)
  }

  @ApiOkResponse({
    type: Task,
  })
  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', TaskStatusValidationPipe) status: TaskStatus,
    @GetUser() user: User
  ): Promise<Task> {
    return this.tasksService.updateTaskStatus(id, status, user)
  }
}
