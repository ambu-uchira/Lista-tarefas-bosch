import { TaskService } from './../tasks/shared/task.service';

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Task } from 'src/tasks/shared/task';


@Controller('task')
export class TaskController {

   
    constructor( private taskServise: TaskService
        ){}
        @Get()
        async getAll() : Promise<Task[]> {
            return this.taskServise.getAll();

        }
        
        @Get(':id')
        async getById(@Param('id') id: string) : Promise<Task> {
            return this.taskServise.getById(id);

        }
        @Post()
        async create(@Body() task: Task): Promise<Task>{
            return this.taskServise.create(task);
        }

        @Put(':id')
        async update(@Param ('id') id: string, @Body() task: Task) : Promise<Task> {
            return this.taskServise.update(id, task);
        }
        @Delete(':id')
        async delete(@Param ('id') id: string) {
            this.taskServise.delete(id);
        }
}
