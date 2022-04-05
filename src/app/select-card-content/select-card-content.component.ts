import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-card-content',
  templateUrl: './select-card-content.component.html',
  styleUrls: ['./select-card-content.component.css']
})
export class SelectCardContentComponent implements OnInit {

  constructor() { }

	@Input() cardPosition: string = '';
	@Output() currentlyTab: EventEmitter<any> = new EventEmitter();

	firstCardOptions = [ 
		{nameTab:'Geração de Vapor' ,isClicked: true},
		{nameTab:'Combustiveis' ,isClicked:false}
	]
	secondCardOptions = [
		{nameTab:'Geração Elétrica' ,isClicked: true},
		{nameTab:'Combustiveis' ,isClicked:false},
		{nameTab:'Condensação/Extração' ,isClicked:false}
	]
	thirdCardOptions = [
		{nameTab:'Redutores' ,isClicked: true},
		{nameTab:'Alívios' ,isClicked:false}
	]
	fourthCardOptions = [{nameTab:'Pré-aquecedores',isClicked:true}]
	fifthCardOptions = [{nameTab:'Resultado Financeiro',isClicked:true}]
	sixthCardOptions = [{nameTab:'Grupos Alternativos',isClicked:true}]

  ngOnInit(): void {
  }

	tab:any = {
		tabName : '',
		card:''
	}

	changeCardTab (nameTab:any,card:any) {
		switch(card){
			case 'firts':
				this.firstCardOptions.forEach((item)=> {
				item.isClicked = false
				if(item.nameTab == nameTab){
					item.isClicked = true
					this.tab.tabName = item.nameTab
					this.tab.card = 'first'
					this.currentlyTab.emit(this.tab)
				}
			})
			break;
			case 'second':
				this.secondCardOptions.forEach((item)=> {
				item.isClicked = false
				if(item.nameTab == nameTab){
					item.isClicked = true
					this.tab.tabName = item.nameTab
					this.tab.card = 'second'
					this.currentlyTab.emit(this.tab)
				}
			})
			break;
			case 'third':
				this.thirdCardOptions.forEach((item)=> {
				item.isClicked = false
				if(item.nameTab == nameTab){
					item.isClicked = true
					this.tab.tabName = item.nameTab
					this.tab.card = 'third'
					this.currentlyTab.emit(this.tab)
				}
			})
			break;
		}

	}

}
