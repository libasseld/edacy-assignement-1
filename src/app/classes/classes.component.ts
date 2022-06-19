import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   classes = [
    {id:'1', designation:'Seconde S2 A' },
    {id:'2', designation:'Seconde L2 2' },
    {id:'3', designation:'Premiere S2 A' },
    {id:'4', designation:'Premiere L2 A' }
  ];
}
