import { Controller, Get, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetClassFilterDto } from './dto/get-task-filter.dto';

@Controller('tasks')
export class TasksController {
	constructor(private tasksService: TasksService) {}

	@Get()
	getTasks(@Query() filterDto: GetClassFilterDto): Task[] {
		if (Object.keys(filterDto).length) {
			return this.tasksService.getTaskWithFilter(filterDto);
		} else {
			return this.tasksService.getAllTasks();
		}
		// console.log('task is' + filterDto);
	}

	@Get('/:id')
	getTaskById(@Param('id') id: string): Task {
		return this.tasksService.getTaskById(id);
	}

	@Delete('/:id')
	deleteTaskById(@Param('id') id: string): void {
		this.tasksService.deleteTaskById(id);
	}

	@Patch('/:id/status')
	updateTaskStatus(@Param('id') id: string, @Body('status') status: TaskStatus): Task {
		return this.tasksService.updateTaskStatus(id, status);
	}

	// @Post()
	// createTask(@Body('title') title, @Body('description') description) {
	//   return this.tasksService.createTask(title, description);
	// }

	@Post()
	createTask(@Body() createTaskDto: CreateTaskDto) {
		return this.tasksService.createTask(createTaskDto);
	}
}
