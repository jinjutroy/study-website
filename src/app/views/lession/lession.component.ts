import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lession-page',
  templateUrl: './lession.component.html',
  styleUrls: ['./lession.component.scss']
})
export class LessionComponent implements OnInit {

  lessionImage: string = "assets/images/lession.png";
  allListLession = [
    {
      name: "Tuần 2: Hình tròng",
      subject: "Toáng",
      block: "Khốy 1",
      teacher: "Nguyễn Thỵ Kim Hạnh ",
      desc: "Bài giảng truyền hình"
    },
    {
      name: "Tuần :3 Hình tam giác",
      subject: "Toáng",
      block: "Khốy 1",
      teacher: "Nguyễn Thỵ Kim Hạnh ",
      desc: "Bài giảng truyền hình"
    },
    {
      name: "Tuần 2: Hình tròng",
      subject: "Toáng",
      block: "Khốy 1",
      teacher: "Nguyễn Thỵ Kim Hạnh ",
      desc: "Bài giảng truyền hình"
    },
    {
      name: "Tuần :3 Hình tam giác",
      subject: "Toáng",
      block: "Khốy 1",
      teacher: "Nguyễn Thỵ Kim Hạnh ",
      desc: "Bài giảng truyền hình"
    },
    {
      name: "Tuần 2: Hình tròng",
      subject: "Toáng",
      block: "Khốy 1",
      teacher: "Nguyễn Thỵ Kim Hạnh ",
      desc: "Bài giảng truyền hình"
    },
    {
      name: "Tuần :3 Hình tam giác",
      subject: "Toáng",
      block: "Khốy 1",
      teacher: "Nguyễn Thỵ Kim Hạnh ",
      desc: "Bài giảng truyền hình"
    },
    {
      name: "Tuần 2: Hình tròng",
      subject: "Toáng",
      block: "Khốy 1",
      teacher: "Nguyễn Thỵ Kim Hạnh ",
      desc: "Bài giảng truyền hình"
    },
    {
      name: "Tuần :3 Hình tam giác",
      subject: "Toáng",
      block: "Khốy 1",
      teacher: "Nguyễn Thỵ Kim Hạnh ",
      desc: "Bài giảng truyền hình"
    },
    {
      name: "Tuần 2: Hình tròng",
      subject: "Toáng",
      block: "Khốy 1",
      teacher: "Nguyễn Thỵ Kim Hạnh ",
      desc: "Bài giảng truyền hình"
    },
    {
      name: "Tuần :3 Hình tam giác",
      subject: "Toáng",
      block: "Khốy 1",
      teacher: "Nguyễn Thỵ Kim Hạnh ",
      desc: "Bài giảng truyền hình"
    },

    {
      name: "Tuần 2: Hình tròng",
      subject: "Toáng",
      block: "Khốy 1",
      teacher: "Nguyễn Thỵ Kim Hạnh ",
      desc: "Bài giảng truyền hình"
    },
    {
      name: "Tuần :3 Hình tam giác",
      subject: "Toáng",
      block: "Khốy 1",
      teacher: "Nguyễn Thỵ Kim Hạnh ",
      desc: "Bài giảng truyền hình"
    },
  ]
  listLession = this.allListLession.splice(0,12);
  constructor() { }

  ngOnInit(): void {
  }

}
