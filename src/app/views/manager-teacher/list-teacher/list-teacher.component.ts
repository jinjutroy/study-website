import {Component, OnInit} from '@angular/core';
import {StudentsService} from "../../../core/services/pageManagerStudent/students.service";
import {TeacherService} from "../../../core/services/pageManagerTeacher/teacher.service";
import {GiaoVien} from "../../../core/model/GiaoVien";

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.scss']
})
export class ListTeacherComponent implements OnInit {

  constructor(private studentService: StudentsService,
              private teacherService: TeacherService) {
  }


  listgv!: GiaoVien[];
  ngOnInit(): void {
    this.studentService.getListGV().subscribe(data => {
      this.listgv = data
      console.log(this.listgv)
    })

}}
