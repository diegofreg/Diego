import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent implements OnInit {

	@Input() index= ""

  constructor() { }

  ngOnInit(): void {
  }

}
