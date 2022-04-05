import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-range-block',
  templateUrl: './range-block.component.html',
  styleUrls: ['./range-block.component.css']
})
export class RangeBlockComponent implements OnInit {
	@Input() card = ""

	cards = [1,2,3,4,5,6,7,8]

	 reducers = [
		 {
			 arrowName:" linha 1",
			 payload: [
				 {
					 productName:'texto',
					 porcetage:'10%',
					 columnName:'Carga',
					 value:'25'
				 },
				 {
					 productName:'texto',
					 porcetage:'10%',
					 columnName:'Total',
					 value:'35'
				 },
			 ]
		 },
		 {
			 arrowName:" linha 2",
			 porcetage:'10%',
			 productName:'texto',
			 payload: [
				 {
					 porcetage:'10%',
					 productName:'texto',
					 columnName:'Carga',
					 value:'45'
				 },
				 {
					 porcetage:'10%',
					 productName:'texto',
					 columnName:'Total',
					 value:'35'
				 },
			 ]
		 },
		 {
			 arrowName:" linha 3",
			 porcetage:'10%',
			 productName:'texto',
			 payload: [
				 {
					 porcetage:'10%',
					 productName:'texto',
					 columnName:'Carga',
					 value:'85'
				 },
				 {
					 porcetage:'10%',
					 productName:'texto',
					 columnName:'Carga',
					 value:'85'
				 },
				 {
					 porcetage:'10%',
					 productName:'texto',
					 columnName:'Carga',
					 value:'85'
				 },
				 {
					 porcetage:'10%',
					 productName:'texto',
					 columnName:'Carga',
					 value:'85'
				 },
			 ]
		 },
		 {
			 arrowName:" linha 4",
			 porcetage:'12%',
			 productName:'texto',
			 payload: [
				 {
					 porcetage:'12%',
					 productName:'texto',
					 columnName:'Carga',
					 value:'65'
				 },
				 {
					 porcetage:'12%',
					 productName:'texto',
					 columnName:'Total',
					 value:'55'
				 },
			 ]
		 },
	 ]
  constructor() { }

  ngOnInit(): void {
  }

}
