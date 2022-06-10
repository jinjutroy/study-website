import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor() { }
  checkStudent = false;
  form = new FormGroup({
    mshs: new FormControl(), 
  });  
  ngOnInit(): void {
  }
  handlerSearchStudent(){
      console.log(this.form.value.mshs);
      this.checkStudent = true;
  }
  setCheck(){
    if(this.checkStudent = true) this.checkStudent = false;

  }
}
