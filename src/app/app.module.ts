import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardContentComponent } from './card-content/card-content.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { SelectCardContentComponent } from './select-card-content/select-card-content.component';
import { BarsComponent } from './bars/bars.component';
import { GenerateLabelsComponent } from './generate-labels/generate-labels.component';
import { RangeBlockComponent } from './range-block/range-block.component';
import { MainExchangesComponent } from './main-exchanges/main-exchanges.component';
import { ChargeContentComponent } from './charge-content/charge-content.component'
import {NgApexchartsModule} from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    CardContentComponent,
    MainContentComponent,
    SelectCardContentComponent,
    BarsComponent,
    GenerateLabelsComponent,
    RangeBlockComponent,
    MainExchangesComponent,
    ChargeContentComponent
  ],
  imports: [
    BrowserModule,
		MatIconModule,
		MatButtonModule,
		MatGridListModule,
    NoopAnimationsModule,
		NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
