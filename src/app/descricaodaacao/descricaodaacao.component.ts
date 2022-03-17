import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




interface Local {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-descricaodaacao',
  templateUrl: './descricaodaacao.component.html',
  styleUrls: ['./descricaodaacao.component.scss']
})
export class DescricaodaacaoComponent implements OnInit {


  


  private _appForm!: FormGroup;
  public get appForm(): FormGroup {
    return this._appForm;
  }
  public set appForm(v: FormGroup) {
    this._appForm = v;
  }


  
  local1: Local[] = [
    {value: 'DF', viewValue: 'Brasilia'},
    {value: 'MG', viewValue: 'Minas'},
    {value: 'RJ', viewValue: 'Cabo Frio'},
    {value: 'MT', viewValue: 'Mato Grosso'},
    
    
    
  ];

  constructor(

    private formBuilder: FormBuilder
    



  ) { 


    this.appForm = this.formBuilder.group({
      
      data: ['', Validators.required],
      horas: ['', Validators.required],
      ação: ['', Validators.required],
      local1: ['', Validators.required],
      numerodeamostras: ['', Validators.required],
      local: ['', Validators.required],
      
      

    });   


  }

  ngOnInit(): void {
  }

}
