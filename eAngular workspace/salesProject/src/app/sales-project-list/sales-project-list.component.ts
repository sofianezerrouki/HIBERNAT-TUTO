import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-project-list',
  templateUrl: './sales-project-list.component.html',
  styleUrls: ['./sales-project-list.component.css']
})
export class SalesProjectListComponent implements OnInit {

  //create an array of object 

  salesPersonList : SalesPerson []=[
    new SalesPerson("zerrouki","djamel",45000),
    new SalesPerson("djer","oussama",67000),
    new SalesPerson("Aouad","khaled",56000),
    new SalesPerson("saoudat","ibrahim",35000)
  ];

  constructor() { }



  ngOnInit(): void {
  }

}
