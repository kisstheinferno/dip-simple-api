import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TodoEntity } from './todos.entity';
import { TodoDTO } from './todos.controller';

@Injectable()
export class TodosService {
  private todoRepository;

  constructor(private datasource: DataSource) {
    this.todoRepository = this.datasource.getRepository(TodoEntity);
  }

  async findAll() {
    return await this.todoRepository.find();
  }

  async create(todo: TodoDTO) {
    await this.todoRepository.save(todo);
    return await this.findAll();
  }

  async update(id: number, todo: TodoDTO) {
    await this.todoRepository.update(id, todo);
    return await this.findAll();
  }

  async delete(id: number) {
    await this.todoRepository.delete(id);
    return await this.findAll();
  }
}
