import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetClassFilterDto } from './dto/get-task-filter.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTasks(filterDto: GetClassFilterDto): Task[];
    getTaskById(id: string): Task;
    deleteTaskById(id: string): void;
    updateTaskStatus(id: string, status: TaskStatus): Task;
    createTask(createTaskDto: CreateTaskDto): Task;
}
