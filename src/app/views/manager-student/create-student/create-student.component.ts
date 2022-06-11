import {Component, Inject, OnInit} from '@angular/core';
import {finalize} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {formatDate} from "@angular/common";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {StudentsService} from "../../../core/services/pageManagerStudent/students.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {

  constructor(private fb: FormBuilder,
              @Inject(AngularFireStorage) private storage: AngularFireStorage,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private studentService: StudentsService,
              private snackbar: MatSnackBar,
              private dialogRef: MatDialogRef<CreateStudentComponent>,
  ) {
  }

  selectedImage: any = null;
  link!: string;
  studentForm!: FormGroup;

  ngOnInit(): void {

    this.studentForm = this.fb.group(
      {
        ten: ['', Validators.required],
        diaChi: ['', Validators.required],
        gioiTinh: ['', Validators.required],
        danToc: ['', Validators.required],
        tenBo: ['', Validators.required],
        tenMe: ['', Validators.required],
        tonGiao: ['', Validators.required],
        sdtBoMe: ['', [Validators.required]],
        hinhAnh: ['', Validators.required],
        ngaySinh: ['', Validators.required],
        idLop: [this.data, Validators.required]
      })
  }

  isdisplay: boolean = false

  showPreview(event: any) {
    this.isdisplay = true
    // this.isDisplay = true;
    this.selectedImage = event.target.files[0];
    const nameImg = this.getCurrentDateTime() + this.selectedImage.name;
    const fileRef = this.storage.ref(nameImg);
    this.storage.upload(nameImg, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          // this.lessionForm.patchValue({"fileVideo":url})
          this.isdisplay = false
          this.link = url;
        });
      })
    ).subscribe();

  }

  createStudent() {
    // this.studentForm.patchValue({"hinhAnh":this.link})
    console.log(this.studentForm.value)
    this.dialogRef.close();
    this.studentService.createStudent({
      ten: this.studentForm.value.ten,
      diaChi: this.studentForm.value.diaChi,
      gioiTinh: this.studentForm.value.gioiTinh,
      danToc: this.studentForm.value.danToc,
      tenBo: this.studentForm.value.tenBo,
      tenMe: this.studentForm.value.tenMe,
      tonGiao: this.studentForm.value.tonGiao,
      sdtBoMe: this.studentForm.value.sdtBoMe,
      hinhAnh: this.link,
      ngaySinh: this.studentForm.value.ngaySinh,
      idLop: this.studentForm.value.idLop
    }).subscribe(data => {
      this.snackbar.open("thêm mới học sinh thành công", "", {duration: 3000})
    })
  }

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }
}
