import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from "rxjs/operators";
import { ThemeService } from '../core/services/theme.service';
import {FormsService} from '../forms.service';
import {ConsultaPessoaService} from '../Services/consulta-pessoa';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-produtoagricola',
  templateUrl: './produtoagricola.component.html',
  styleUrls: ['./produtoagricola.component.css']
})


export class ProdutoagricolaComponent implements OnInit {

  isDarkTheme!: Observable<boolean>;

  private _appForm!: FormGroup;
  appService: any;
  public get appForm(): FormGroup {
    return this._appForm;
  }
  public set appForm(v: FormGroup) {
    this._appForm = v;
  }
 

  options :any= [];
  variedades:any = [];
  filteredOptions: any; 
  isClickedYes = "none";
  lacreList = 
	[
		{
			numerolacre:new FormControl('',Validators.required)
		},
	];
  ultimoIndex = 0

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
		this.formService.setData(this.appForm)
		 this.consultaPessoa.getCultura().subscribe((data)=>{
		 this.options = data 
     console.log(this.options)
		})

    this.filteredOptions = this.appForm.get('cultura')?.valueChanges.pipe(
			startWith(''),
			map(value => this._filter(value)),
		);

		this.appForm.get('agro')?.valueChanges.subscribe(value => {
			this.isClickedYes = value
			if(value == 'show'){
				this.appForm.controls['qual'].setErrors({'required': true});
			}else{
				this.appForm.controls['qual'].setErrors(null);
			}
		})
  }

	
  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();

    return this.options.filter((option:any) => option.nomeCultura.toLowerCase().includes(filterValue));

	}
  
	buscandoVariedade (culturaId:any){
		this.consultaPessoa.getVariedadePelaCultura(culturaId).subscribe(data => {
			console.log(data)
			this.variedades = data
		})
	}

  novoLacre () {


		const  lacreAdicionado = {
			numerolacre:new FormControl('', Validators.required),
		}

		const index = this.lacreList.push(lacreAdicionado)
		this.appForm.controls['numerolacre'].setValue(this.lacreList)
		this.ultimoIndex = index - 1
  }

	apagarLacre(lacreClicado:any) {
		const indexClicado = this.lacreList.indexOf(lacreClicado)
		this.ultimoIndex = indexClicado - 1
		this.lacreList = this.lacreList.filter((item,index) =>  index != this.ultimoIndex)
		this.appForm.controls['numerolacre'].setValue(this.lacreList)
	}

  foods: Food[] = [
    {value: 'Cultura', viewValue: 'Acefato'},
    {value: 'Cultura1', viewValue: 'Aldicarbe'},
    {value: 'Cultura2', viewValue: 'Aldni'},
    {value: 'Cultura 3', viewValue: 'Aletrina'},
    
  ];

  constructor(
    private themeService: ThemeService,
    private formBuilder: FormBuilder,
		private formService: FormsService,
		private consultaPessoa : ConsultaPessoaService
  ) {

    
    this.appForm = this.formBuilder.group({
      cultura: ['', Validators.required],
      numerolacre: [this.lacreList],
			variedade:[''],
      qual: [''],
			agro:['none'],
			tabAtual:['Descrição do Produto Agrícola'],
    });

   }

	 validar(field:any){
		 return this.appForm.get(field)?.hasError('required')
	 }

 }
