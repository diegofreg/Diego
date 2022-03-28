import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultaPessoaService } from '../Services/consulta-pessoa';
import { TermoColeta } from 'src/models/termoColetaEnvolvidos';
import { HttpClient } from '@angular/common/http';



export interface TestemunhaProps {
  id: number,
  nome: string
  identidade: string
  
}

let formData = {
  nome: '',
  cargo: '',
  masp: null,
}

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-envolvidos',
  templateUrl: './envolvidos.component.html',
  styleUrls: ['./envolvidos.component.css']
})
export class EnvolvidosComponent implements OnInit {
  




  
  foods: Food[] = [
    {value: 'DF', viewValue: 'Fiscal Assistente Agropecuário '},
    {value: 'MG', viewValue: 'Fiscal Agropecuário'},
    
    
    
    
  ];

  isOpentestemunha:boolean=false;


  
  private _appForm!: FormGroup;
  appService: any;
  public get appForm(): FormGroup {
    return this._appForm;
  }
  public set appForm(v: FormGroup) {
    this._appForm = v;
    this._appForm.get("nome")!.disable();
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
    private formBuilder: FormBuilder,
    private http: HttpClient

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

  this.Masp1.getPessoamasp(numeromasp,).subscribe(
    (data) => { //Alterei aqui

const{}=this.Masp1
const{idPessoa,nunMaspOuRegInstituicaoConveniada,}=numeromasp

console.log({ data })
const { nomePessoa, usuario } = data
const { usuarioLocalizacaoList } = usuario
const { papel } = usuarioLocalizacaoList[1]
const { nome: nomeCargo } = papel

    formData.nome = nomePessoa
    formData.cargo = nomeCargo
    formData.masp = numeromasp
      

      this.appForm.get("nome")?.patchValue(nomePessoa);
      this.appForm.get("cargo")?.patchValue(nomeCargo);      
      this.appForm.get("Condigo")?.patchValue(nunMaspOuRegInstituicaoConveniada);
      
    });

}

public storeData() {
  const json = JSON.stringify(formData)

  localStorage.setItem('envolvidos', json)
}

public verifyData(): boolean {
  const envolvidos = localStorage.getItem('envolvidos')
  const slaoq = localStorage.getItem('slaoq')
  const slaoqmais = localStorage.getItem('slaoqmais')

  if (
    !envolvidos ||
    !slaoq ||
    !slaoqmais
  ) throw new Error('Some data is missing')

  const { nome, cargo, masp } = JSON.parse(envolvidos)
  const { data, data1, data2 } = JSON.parse(slaoq)

  if (
    !nome || !cargo || !masp ||
    !data || !data1 || !data2
  ) return false

  return true
}

public finalizar() {
  const isValid = this.verifyData
  if (!isValid) return
  
  this.appForm.get("nome")?.patchValue(null);
}

storeClient() {
  console.log("Entrando no salvar")
  var termoSalvar = new TermoColeta();

  termoSalvar.numeromasp = this.appForm.get('numeromasp')?.value as number
  termoSalvar.nome = this.appForm.get('nome')?.value as string
  termoSalvar.cargo = this.appForm.get('cargo')?.value as string
  termoSalvar.representante = this.appForm.get('nome1')?.value as string
  termoSalvar.identidade = this.appForm.get('identidade')?.value as string
  termoSalvar.assinado = !this.isOpentestemunha
  termoSalvar.testemunhas = []

  for (const testemunha of this.testemunhas.filter(t => t.nome !== '')) {
    termoSalvar.testemunhas.push(testemunha)
  }

  console.log({ dados: termoSalvar })
  // if (!termoSalvar.assinado && termoSalvar.testemunhas.length < 1) throw new Error('Nenhuma testemunha inserida')



  this.http.post('http://localhost:8080/rada-laboratorios/termoColetaEnvolvidos/gravar',termoSalvar)
  .subscribe(
    resultado => {
      console.log(resultado)
    },
    erro => {
      if(erro.status >= 400) {
        console.log(erro);
      }
    }
  );

  console.log("Passou salvar")
}
}
  

