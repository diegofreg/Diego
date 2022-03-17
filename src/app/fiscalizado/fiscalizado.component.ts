import { Component, OnInit } from '@angular/core';
import { ConsultaCepService } from '../Services/consulta-cep.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataFormService } from '../comunica/service';
import { Validador } from '../helpers/validations.helper';
import { Client } from 'src/models/client';
import { ConsultaPessoaService } from '../Services/consulta-pessoa';
import { disableDebugTools } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { ThemeService } from '../core/services/theme.service';
import { TermoColeta } from 'src/models/termoColeta';
import { HttpClient } from '@angular/common/http';




interface Food {
  value: string;
  viewValue: string;
}




@Component({
  selector: 'app-fiscalizado',
  templateUrl: './fiscalizado.component.html',
  styleUrls: ['./fiscalizado.component.scss']
})
export class FiscalizadoComponent {
  

  
  foods: Food[] = [
    {value: 'DF', viewValue: 'Almenara'},
    {value: 'MG', viewValue: 'Bambuí'},
    {value: 'RJ', viewValue: 'Coordenadoria Reginal Curvelo'},
    {value: 'MT', viewValue: 'Coordenadoria Reginal Juiz de Fora'},
    
    
    
  ];




  client: Client = new Client();



  private _appForm!: FormGroup;
  public get appForm(): FormGroup {
    return this._appForm;
  }
  public set appForm(v: FormGroup) {
    this._appForm = v;
    this._appForm.get("local")!.disable();
    this._appForm.get("ufc")!.disable();
    

    
  }




  constructor(
    private appService: ConsultaCepService,
    private formBuilder: FormBuilder,
    private receber: DataFormService,
    private appPessoa: ConsultaPessoaService,
    private enviar: DataFormService,
    private http: HttpClient

  ) {



    this.appForm = this.formBuilder.group({
      cep: "",
      street: "",
      comp: "",
      bair: "",
      local: "",
      ufc: "",
      nomeprodutor: ['', Validators.required],

      cpf: ['', [Validador.ValidaCpf]],




    });



  }


  public onBlur(): void {
    const cep = this.appForm.get("cep")?.value;

    console.log("BLUR", cep);
    this.appService.getAddress(cep).subscribe(
      ({ logradouro, complemento, bairro, localidade, uf, }) => {
        console.log(logradouro, complemento, bairro, localidade, uf);
        this.appForm.get("street")?.patchValue(logradouro);
        this.appForm.get("comp")?.patchValue(complemento);
        this.appForm.get("bair")?.patchValue(bairro);
        this.appForm.get("local")?.patchValue(localidade);
        this.appForm.get("ufc")?.patchValue(uf);

      });



  }
  


  public onSubmit(): void {
    console.warn("Your order has been submitted", this.appForm.value);
    this.appForm.reset();
  }


  getErrorcpf() {

    return '';
  };
  get cpf(): FormControl {

    const form = this.appForm.get('cpf') as FormControl

    return form.value


  }
  storeClient() {
    console.log("Entrando no salvar")
    var termoSalvar = new TermoColeta();
    termoSalvar.acaoTermo = 'F';
    termoSalvar.atualizacao = new Date();
    termoSalvar.nomeProdutor = 'Diego';
    this.http.post('',termoSalvar)
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
  public onBlur2(): void {
    const cpf = this.appForm.get("cpf")?.value;

    console.log("BLUR", cpf);
    this.appPessoa.getPessoa(cpf).subscribe(
      ({ nomePessoa, endereco, }) => {
        
const{cep}=endereco
const{municipio,nomeBairro,nomeLogradouro,numeroCep}=cep


        console.log(nomePessoa, cep,endereco);
        this.appForm.get("nomeprodutor")?.patchValue(nomePessoa);
        this.appForm.get("cep")?.patchValue(numeroCep);
        this.appForm.get("street")?.patchValue(nomeLogradouro);
        
        this.appForm.get("bair")?.patchValue(nomeBairro);
        
        this.appForm.get("ufc")?.patchValue(municipio);

      });

  }
  


  }


