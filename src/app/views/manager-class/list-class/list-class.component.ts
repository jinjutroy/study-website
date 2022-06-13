import { Component, OnInit } from '@angular/core';
import {StudentsService} from "../../../core/services/pageManagerStudent/students.service";
import {ScheduleService} from "../../../services/schedule/schedule.service";
import {MarkService} from "../../../core/services/pagemark/mark.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {NamHoc} from "../../../core/model/NamHoc";
import {Khoi} from "../../../core/model/Khoi";
import {LopGiaoVienReponse} from "../../../core/dto/LopGiaoVienReponse";
import {ClassService} from "../../../core/services/class/class.service";
import {DeleteTeacherComponent} from "../../manager-teacher/delete-teacher/delete-teacher.component";
import {MatDialog} from "@angular/material/dialog";
import {CreateTeacherComponent} from "../../manager-teacher/create-teacher/create-teacher.component";
import {CreateClassComponent} from "../create-class/create-class.component";

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.scss']
})
export class ListClassComponent implements OnInit {

  constructor(private studentService: StudentsService,
              private schedule: ScheduleService,
              private markService:MarkService,
              private snackbar: MatSnackBar,
              private route:Router,
              private classService:ClassService,
              private matDialog: MatDialog) {
  }
  khoiValue: any;
  namhocValue: any;
  listNamHocs: NamHoc[] = []
  listKhois: Khoi[] = []
  listLops: LopGiaoVienReponse[] = [];
  ngOnInit(): void {
    this.studentService.getListNameHoc().subscribe(
      data => {
        this.listNamHocs = data;
      }
    )
    this.schedule.getAllBlock().subscribe(data => {
      this.listKhois = data;
    })
  }
  setValueNamHoc(e: any) {
    this.namhocValue = e.target.value;
  }

  setValueKhoi(e: any) {
    this.khoiValue = e.target.value;
  }

  handlerOnChangeLop() {
    if (this.namhocValue == null && this.khoiValue == null) {
      this.snackbar.open("Vui lòng chọn đầy đủ khôi và năm học");
    }
    if (this.namhocValue != null && this.khoiValue != null) {
      this.markService.getListMarkByidKhoiAndYear(this.khoiValue, this.namhocValue).subscribe(data => {
          console.log(data)
          this.listLops = data;
        }
      )
    }
  }
  moveListStudentByClass(lop:any){
    this.route.navigateByUrl("/students",{ state:{ idlop:lop }})
  }

  upClass(lop:LopGiaoVienReponse){
    console.log(lop)
    this.classService.upClassByidlop({
      ten:lop.tenLop,
      year:lop.niemKhoa,
      idgv:lop.idgv,
      idlop:lop.idLop
    }).subscribe(()=>{
      this.snackbar.open("load thành công ","ok",{duration:3000});
    },error => console.log(error))
  }
  openDialogCreate() {
    const dialogRef = this.matDialog.open(CreateClassComponent, {
      width: '500px',
      height: '250px'
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit()
    })
  }
  move(a:any){
    if(a!=null){
      this.route.navigateByUrl("/updatemark",{ state:{ name:a }})
    }else {
      this.snackbar.open("giáo viên không có nehs","ok",{duration:3000})
    }
  }

}
