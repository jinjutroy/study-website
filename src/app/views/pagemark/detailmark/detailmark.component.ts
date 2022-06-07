import { Component, OnInit } from '@angular/core';
import {MarkService} from "../../../core/services/pagemark/mark.service";
import {AuthService} from "../../../core/services/pagelogin/auth.service";
import {Diem} from "../../../core/model/Diem";

@Component({
  selector: 'app-detailmark',
  templateUrl: './detailmark.component.html',
  styleUrls: ['./detailmark.component.scss']
})
export class DetailmarkComponent implements OnInit {
iduser!:string |null;
  constructor(private markservice:MarkService,
              private auth:AuthService) { }
thisData!:Diem[];
  ngOnInit(): void {

    // @ts-ignore
    this.iduser=this.auth.getUser().toLocaleUpperCase();
    this.markservice.getMarkByIdStudent(this.iduser).subscribe(data=>{
      this.thisData=data
    })
  }
calculatorMark(diemgiuaki:number,diemcuoiki:number,tenmonhoc:string):number{
    let diemtb:number=0;
    if(tenmonhoc.toLowerCase()=='toán'||tenmonhoc.toLowerCase()=='tiếng việt'){
        diemtb=(diemgiuaki+diemcuoiki)/2;
    }
  if(tenmonhoc.toLowerCase()=='tiếng anh'||tenmonhoc.toLowerCase()=='lịch sử và địa lí'||tenmonhoc.toLowerCase()=='khoa học'){
    diemtb=diemcuoiki;
  }
  return diemtb;
}
}
