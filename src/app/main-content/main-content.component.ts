import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor() { }

	mainSection = true
	currentlyTabOnFirstCard = 'Geração de Vapor'
	currentlyTabOnSecondCard = 'Geração Elétrica'
	currentlyTabOnThirdCard = 'Redutores'
	currentlyTabOnFourthCard = 'Pré-aquecedores'
	currentlyTabOnFifthCard = 'Resultado Financeiro'
	currentlyTabOnSixthCard = 'Grupos Alternativos'

  ngOnInit(): void {
  }

	getTab(tab:any) {
		switch(tab.card){
			case 'first':
				this.currentlyTabOnFirstCard = tab.tabName
			break;
			case 'second':
				this.currentlyTabOnSecondCard = tab.tabName
			break;
			case 'third':
				this.currentlyTabOnThirdCard = tab.tabName
			break;

		}
	}

}
