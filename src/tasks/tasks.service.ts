import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import * as uuid from 'uuid/v1';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetClassFilterDto } from './dto/get-task-filter.dto';

@Injectable()
export class TasksService {
	private tasks: Task[] = [];

	getAllTasks() {
		return this.tasks;
	}

	getTaskById(id: string): Task {
		return this.tasks.find((task) => task.id === id);
	}

	getTaskWithFilter(filterDto: GetClassFilterDto): Task[] {
		const { status, search } = filterDto;
		let tasks = this.getAllTasks();
		if (status) {
			tasks = tasks.filter((task) => task.status === status);
		}
		if (search) {
			tasks = tasks.filter((task) => task.title.includes(search) || task.description.includes(search));
		}
		return tasks;
	}

	deleteTaskById(id: string): void {
		this.tasks = this.tasks.filter((task) => task.id !== id);
	}

	updateTaskStatus(id: string, status: TaskStatus): Task {
		const task = this.getTaskById(id);
		task.status = status;
		return task;
	}

	// createTask(title: string, description: string): Task {
	//   const task: Task = {
	//     id: uuid(),
	//     title,
	//     description,
	//     status: TaskStatus.OPEN,
	//   };
	//   this.tasks.push(task);
	//   return task;
	// }

	createTask(createTaskDto: CreateTaskDto) {
		const { title, description } = createTaskDto;
		const task: Task = {
			id: uuid(),
			title,
			description,
			status: TaskStatus.OPEN
		};
		this.tasks.push(task);
		return task;
	}
}
