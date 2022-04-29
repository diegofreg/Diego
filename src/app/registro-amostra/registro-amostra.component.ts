import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ReturnCodeDialogComponent} from '../return-code-dialog/return-code-dialog.component';

@Component({
  selector: 'app-registro-amostra',
  templateUrl: './registro-amostra.component.html',
  styleUrls: ['./registro-amostra.component.css']
})
export class RegistroAmostraComponent implements OnInit {
	clickedButton = ""

  constructor(
		public dialog:MatDialog,
	) { }

  ngOnInit(): void {
  }

	finalize(){
		this.dialog.open(ReturnCodeDialogComponent,{width:'auto'})
	}

}
