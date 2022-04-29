import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

	forms:any = []
	alreadySet = 0

  constructor() { }
	
	getData(){
		return this.forms
	}

	setData(form:any){
		if(this.forms.length >= 4){
			return
		}else{
			this.forms.push(form)
		}
	}

}
