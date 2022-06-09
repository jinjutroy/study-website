import { Component, OnInit } from '@angular/core';
import {MarkService} from "../../../core/services/pagemark/mark.service";
import {HocSinh} from "../../../core/model/hocSinh";

@Component({
  selector: 'app-update-mark-student',
  templateUrl: './update-mark-student.component.html',
  styleUrls: ['./update-mark-student.component.scss']
})
export class UpdateMarkStudentComponent implements OnInit {
listHocSinh!:HocSinh[];
  constructor(private markService:MarkService) { }

  ngOnInit(): void {
this.markService.getListStudentByidTeacher('GV0001').subscribe(
  data=>{
    console.log(data);
  this.listHocSinh=data;
  }
)
  }

}
