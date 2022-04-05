import { Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ThemeService } from './core/services/theme.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  isDarkTheme!: Observable<boolean>;
  dataAtual!: Date;
  title = 'termo-coleta';
  clickedTab = 'Coordenadoria'

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
    this.dataAtual =  new Date();
  }

}
