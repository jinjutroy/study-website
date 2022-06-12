import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {finalize} from "rxjs";
import {formatDate} from "@angular/common";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {StudentsService} from "../../../core/services/pageManagerStudent/students.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {

  constructor(private fb: FormBuilder,
              @Inject(AngularFireStorage) private storage: AngularFireStorage,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private studentService: StudentsService,
              private sanitizer: DomSanitizer,
              private snackbar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateStudentComponent>,) {
  }

  studentForm!: FormGroup;
  selectedImage: any = null;
  link!: string;
  ngay!: string;

  ngOnInit(): void {
    this.studentForm = this.fb.group(
      {
        id: [this.data.idhocsinh],
        ten: ['', Validators.required],
        diaChi: ['', Validators.required],
        gioiTinh: ['', Validators.required],
        danToc: ['', Validators.required],
        tenBo: ['', Validators.required],
        tenMe: ['', Validators.required],
        tonGiao: ['', Validators.required],
        sdtBoMe: ['', [Validators.required]],
        hinhAnh: [''],
        ngaySinh: ['', Validators.required],
        idLop: [this.data.idlop, Validators.required]
      })

    this.studentService.getStudentByid(this.data.idhocsinh).subscribe(data => {
      this.ngay = data.ngaySinh;
      this.link = data.hinhAnh;
      this.studentForm.patchValue({ten: data.ten});
      this.studentForm.patchValue({diaChi: data.diaChi});
      this.studentForm.patchValue({gioiTinh: data.gioiTinh});
      this.studentForm.patchValue({danToc: data.danToc});
      this.studentForm.patchValue({tenBo: data.tenBo});
      this.studentForm.patchValue({tenMe: data.tenMe});
      this.studentForm.patchValue({tonGiao: data.tonGiao});
      this.studentForm.patchValue({sdtBoMe: data.sdtBoMe});
      this.studentForm.value.hinhAnh = 'a';
      this.studentForm.value.ngaySinh = this.ngay;
      this.studentForm.value.ngaySinh = data.ngaySinh;
      this.link = data.hinhAnh
    })


  }

  transform() {
// @ts-ignore
    let url = this.link;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  updateStudent() {
    this.studentService.updateStudent({
      id: this.studentForm.value.id,
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
    }).subscribe(value => {
      this.dialogRef.close();
      this.snackbar.open("Bạn đã cập nhật thành công", "ok", {duration: 3000})
    }, e => {
      console.log(e);
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

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }
}


