import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})
export class CardContentComponent implements OnInit {

	@Input() tabOn : string = ''

	firstCardContent= [1,2,3,4]
	thirdCardContent = [1,2,3,4,5,6,7,8]


  constructor() { }

  ngOnInit(): void {
  }


}
