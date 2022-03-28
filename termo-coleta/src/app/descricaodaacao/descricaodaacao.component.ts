import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TermoColeta } from 'src/models/termoColetaAcao';


interface Outros {
  id:number
  nome: string
  
  
}


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


  localselecionado:string | undefined;


  isOpenoutros:boolean=false;


  private _appForm!: FormGroup;
  public get appForm(): FormGroup {
    return this._appForm;
  }
  public set appForm(v: FormGroup) {
    this._appForm = v;
  }


  
  local1: Local[] = [
    {value: 'DF', viewValue: 'Cantinho dos Bebuns.'},
    {value: 'MG', viewValue: 'Quintal da Boa Ventura '},
    {value: 'RJ', viewValue: 'Flor-de-lis'},
    {value: 'Outros', viewValue: 'Outros'},
  
  ];



  local2: Outros[] =[
    {
      id: 1,
      nome: "",
      
    },
  ]

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

  openoutros1(){
  
    this.localselecionado=this.appForm.value.localselecionado
    console.log(this.appForm)

}

  


  public onSubmit(): void {
    console.warn("Your order has been submitted", this.appForm.value);
    this.appForm.reset();
  }



  // storeClient() {
  //   console.log("Entrando no salvar")
  //   var termoSalvar = new TermoColeta();
  //   termoSalvar.acaoTermo = 'F';
  //   termoSalvar.atualizacao = new Date();
  //   termoSalvar.nomeProdutor = 'Diego';
  //   this.http.post('http://localhost:8080/rada-laboratorios/termoColeta/gravarTermoColeta',termoSalvar)
  //   .subscribe(
  //     resultado => {
  //       console.log(resultado)
  //     },
  //     erro => {
  //       if(erro.status >= 400) {
  //         console.log(erro);
  //       }
  //     }
  //   );

  //   console.log("Passou salvar")

  ngOnInit(): void {
  }

}
