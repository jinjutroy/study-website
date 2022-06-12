import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; 
import { HocSinh } from 'src/app/core/model/hocSinh';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private _studentService: StudentService) { }
  x = "hee"
  checkStudent = false;
  student: HocSinh[] = []; 
  form = new FormGroup({
    mshs: new FormControl(), 
  });  
  ngOnInit(): void {
  }
  handlerSearchStudent(){
    this.checkStudent = true;
    this._studentService.getStudentByID(this.form.value.mshs).subscribe(response => { 
      // this.student = response; 
    }); 
    
  }
  setCheck(){
    if(this.student) this.checkStudent = false; 
  }
}
