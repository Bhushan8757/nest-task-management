import { TaskStatus } from '../tasks.model';
export class GetClassFilterDto {
	status: TaskStatus;
	search: string;
}
