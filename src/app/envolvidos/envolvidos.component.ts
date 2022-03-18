import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultaPessoaService } from '../Services/consulta-pessoa';



interface TestemunhaProps {
  id: number,
  nome: string
  identidade: string
  
}


@Component({
  selector: 'app-envolvidos',
  templateUrl: './envolvidos.component.html',
  styleUrls: ['./envolvidos.component.css']
})
export class EnvolvidosComponent implements OnInit {
  




  

  isOpentestemunha:boolean=false;


  
  private _appForm!: FormGroup;
  appService: any;
  public get appForm(): FormGroup {
    return this._appForm;
  }
  public set appForm(v: FormGroup) {
    this._appForm = v;
  }

  testemunhas: TestemunhaProps[] =[
    {
      id: 1,
      nome: "",
      identidade: ""
    },
    {
      id: 2,
      nome: "",
      identidade: ""
    },
    {
      id: 3,
      nome: "",
      identidade: ""
    },
  ]





  
  constructor(


    private Masp1: ConsultaPessoaService,   
    private formBuilder: FormBuilder

  ) {


    this.appForm = this.formBuilder.group({


      
      numeromasp: ['', Validators.required],
      nome: ['', Validators.required],
      cargo: ['', Validators.required],
      nome1: ['', Validators.required],
      identidade: ['', Validators.required],
     
      
      

    });   


  }

  


 

  ngOnInit(): void {

    
    throw new Error('Method not implemented.');
  }

  opentestemunha(){
  
      this.testemunhas = [
        {
          id: 1,
          nome: "",
          identidade: ""
        },
        {
          id: 2,
          nome: "",
          identidade: ""
        },
        {
          id: 3,
          nome: "",
          identidade: ""
        },
      ]

    this.isOpentestemunha = !this.isOpentestemunha


  }

  public onBlur3(): void {
    const numeromasp = this.appForm.get("numeromasp")?.value;

    console.log("BLUR3", numeromasp);

    this.Masp1.getPessoamasp(numeromasp).subscribe(
      ({  }) => {
        
const{numeromasp}=this.Masp1
const{idPessoa,nunMaspOuRegInstituicaoConveniada,Cargo}=numeromasp

console.log(idPessoa,nunMaspOuRegInstituicaoConveniada,Cargo);


    
        this.appForm.get("nome3")?.patchValue(idPessoa);
        this.appForm.get("cargo1")?.patchValue(Cargo);
        this.appForm.get("cargo1")?.patchValue(nunMaspOuRegInstituicaoConveniada);

      });






}



}
  

