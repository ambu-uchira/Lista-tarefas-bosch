import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task = new Task();
  // tslint:disable-next-line: no-inferrable-types
  title: string = 'Nova tarefa';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      // tslint:disable-next-line: radix
      this.task = this.taskService.getById( parseInt(id) );
      this.title = 'Alterando tarefa';
    }
  }

  // tslint:disable-next-line: typedef
  onSubmit() {
    this.taskService.save(this.task);
    this.router.navigate(['']);
  }

}
