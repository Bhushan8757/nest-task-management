"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const tasks_model_1 = require("./tasks.model");
const uuid = require("uuid/v1");
let TasksService = class TasksService {
    constructor() {
        this.tasks = [];
    }
    getAllTasks() {
        return this.tasks;
    }
    getTaskById(id) {
        return this.tasks.find((task) => task.id === id);
    }
    getTaskWithFilter(filterDto) {
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
    deleteTaskById(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
    updateTaskStatus(id, status) {
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    }
    createTask(createTaskDto) {
        const { title, description } = createTaskDto;
        const task = {
            id: uuid(),
            title,
            description,
            status: tasks_model_1.TaskStatus.OPEN
        };
        this.tasks.push(task);
        return task;
    }
};
TasksService = __decorate([
    common_1.Injectable()
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map