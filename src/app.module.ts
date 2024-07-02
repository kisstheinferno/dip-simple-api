import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from './datasource/typeorm.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TodosModule, ConfigModule.forRoot(), TypeOrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
