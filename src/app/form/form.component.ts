import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	SendForm(name: any, tel: any, adres: any): void {

	}

}
