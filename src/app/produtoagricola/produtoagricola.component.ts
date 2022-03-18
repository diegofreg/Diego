import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ThemeService } from '../core/services/theme.service';




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

  public get appForm(): FormGroup {
    return this._appForm;
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
    {value: 'DF', viewValue: 'Brasilia'},
    {value: 'MG', viewValue: 'Minas'},
    {value: 'RJ', viewValue: 'Cabo Frio'},
    {value: 'MT', viewValue: 'Mato Grosso'},
    
    
    
  ];


  
  constructor(



    private themeService: ThemeService



  ) {





    
   }

 }
