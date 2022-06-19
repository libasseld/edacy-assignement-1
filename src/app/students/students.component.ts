import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  students = [
    {id:'1', name:'Libasse DIOP', class: "Terminal L2 A" },
    {id:'2', name:'Babacar DIANE', class: "Terminal S2 A" },
    {id:'3', name:'Ndioba DIANE', class: "Terminal S2 A" },
    {id:'4', name:'Moustapha DIOP', class: "Terminal L2 A" },
  ];
}
