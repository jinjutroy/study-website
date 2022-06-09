import { Component, OnInit } from '@angular/core';
import {MarkService} from "../../../core/services/pagemark/mark.service";
import {HocSinh} from "../../../core/model/hocSinh"; 
import {AuthService} from "../../../core/services/pagelogin/auth.service"; 

@Component({
  selector: 'app-update-mark-student',
  templateUrl: './update-mark-student.component.html',
  styleUrls: ['./update-mark-student.component.scss']
})
export class UpdateMarkStudentComponent implements OnInit {
listHocSinh!:HocSinh[]; 
  constructor(private markService:MarkService,private auth:AuthService) { }

  ngOnInit(): void {
this.markService.getListStudentByidTeacher(this.auth.getUser()!.toUpperCase()).subscribe( 
  data=>{
    console.log(data);
  this.listHocSinh=data;
  }
)
  }

}
