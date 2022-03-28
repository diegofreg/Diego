import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ThemeService } from '../core/services/theme.service';
import { Validador } from '../helpers/validations.helper';




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
  isDisplayNone: boolean = false;

  private _appForm!: FormGroup;
  appService: any;
  public get appForm(): FormGroup {
    return this._appForm;
  }
  public set appForm(v: FormGroup) {
    this._appForm = v;
  }






  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  


  handleForm(event:any): void {
    if (event.value === '1') {
      this.isDisplayNone = true;
    } else {
      this.isDisplayNone = false;
    }
  }




  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
  


  foods: Food[] = [
    {value: 'Cultura', viewValue: 'Acefato'},
    {value: 'Cultura1', viewValue: 'Aldicarbe'},
    {value: 'Cultura2', viewValue: 'Aldni'},
    {value: 'Cultura 3', viewValue: 'Aletrina'},
    
    
    
  ];


  
  constructor(



    private themeService: ThemeService,
    private formBuilder: FormBuilder


  ) {

  
    this.appForm = this.formBuilder.group({
      cultura: ['', Validators.required],
      numerolacre: ['', Validators.required],
      qual: ['', Validators.required],
      



    });




    
   }

 }
