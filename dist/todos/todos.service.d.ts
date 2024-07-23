import { DataSource } from 'typeorm';
import { TodoDTO } from './todos.controller';
export declare class TodosService {
    private datasource;
    private todoRepository;
    constructor(datasource: DataSource);
    findAll(): Promise<any>;
    create(todo: TodoDTO): Promise<any>;
    update(id: number, todo: TodoDTO): Promise<any>;
    delete(id: number): Promise<any>;
}
