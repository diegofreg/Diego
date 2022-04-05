import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-labels',
  templateUrl: './generate-labels.component.html',
  styleUrls: ['./generate-labels.component.css']
})
export class GenerateLabelsComponent implements OnInit {
@Input() card  = ""

  constructor() { }

  ngOnInit(): void {
  }

}
