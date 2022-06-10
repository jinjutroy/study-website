import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  constructor() { }
  checkTeacher = false;
  form = new FormGroup({
    mshs: new FormControl(), 
  });  
  ngOnInit(): void {
  }
  handlerSearchTeacher(){
      console.log(this.form.value.mshs);
      this.checkTeacher = true;
  }
  setCheck(){
    if(this.checkTeacher = true) this.checkTeacher = false;

  }
}
