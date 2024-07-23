import { TodosService } from './todos.service';
export interface TodoDTO {
    description: string;
    done: boolean;
}
export declare class TodosController {
    private todoService;
    constructor(todoService: TodosService);
    findAll(): Promise<any>;
    create(todo: TodoDTO): Promise<any>;
    update(id: number, todo: TodoDTO): Promise<any>;
    delete(id: number): Promise<any>;
}
