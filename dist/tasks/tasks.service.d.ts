import { Task, TaskStatus } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetClassFilterDto } from './dto/get-task-filter.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    getTaskById(id: string): Task;
    getTaskWithFilter(filterDto: GetClassFilterDto): Task[];
    deleteTaskById(id: string): void;
    updateTaskStatus(id: string, status: TaskStatus): Task;
    createTask(createTaskDto: CreateTaskDto): Task;
}
