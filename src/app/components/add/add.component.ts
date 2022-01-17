import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  text!: string;
  time!: string;

  constructor() { }

  ngOnInit(): void {
  }

  toogleAddTask() {
    console.log('add');
  } 

  onSubmit() {
    if (!this.text) {
      alert('Please type something')
      return
    }

    const newTask = {
      text: this.text,
      hour: this.time
    }

    TASKS.push(newTask);

    this.text = '';
    this.time = '';
  }

}
