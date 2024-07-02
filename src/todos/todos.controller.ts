import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { TodosService } from './todos.service';

export interface TodoDTO {
  description: string;
  done: boolean;
}

@Controller('todos')
export class TodosController {
  constructor(private todoService: TodosService) {}

  @Get()
  async findAll() {
    return await this.todoService.findAll();
  }

  @Post()
  async create(@Body() todo: TodoDTO) {
    return await this.todoService.create(todo);
  }

  @Put()
  async update(@Body('id') id: number, @Body('todo') todo: TodoDTO) {
    return await this.todoService.update(id, todo);
  }

  @Delete()
  async delete(@Body() id: number) {
    return await this.todoService.delete(id);
  }
}
