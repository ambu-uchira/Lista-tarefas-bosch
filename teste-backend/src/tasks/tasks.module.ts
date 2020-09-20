import { MongooseModule } from '@nestjs/mongoose';
import { TaskController } from './../task/task.controller';
import { Module } from '@nestjs/common';
import { TaskService } from './shared/task.service';
import { TaskSchema } from './schemas/task.schema';


@Module({
    imports: [
    MongooseModule.forFeature ([{ name: 'Task', schema: TaskSchema}])
    ],
    controllers: [TaskController],
    providers: [TaskService]
})
export class TasksModule {}
