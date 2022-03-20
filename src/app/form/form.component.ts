import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { userInfo } from 'os';
import { DataService } from "../data.service";



@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']

})
export class FormComponent implements OnInit {
	[x: string]: any;

	//	public user: User;  переменую не получилось импортировать

	public dataService: any; //добавила св-во dataService, та как была ошибка

	public formSubmited!: boolean;
	constructor() { }

	// ngOnInit(): void {

	// }
	// модель
	ngOnInit() {
		this.formSubmited = false;
		this.dataService = {
			id: 1,
			inputName: "Name ",
			inputPhone: "892751489",
			inputAddress: "Мира 5"
		}
	}

	// public cleanButtonClicked() {
	// 	//this.user= new User ();
	// }
	public onSubmited() {
		// todo: реализовать логику по отправки данных
		this.formSubmited = true;
	}

	SendForm(name: string, tel: string, adres: any): void {
		const data = {     // объект
			name: name,  // под ключом "name" хранится значение "John"
			tel: tel,        // под ключом "age" хранится значение 30
			adres: adres,
		};

		// this.dataService.SendForm(data).subscribe((data: any) => {
		// 	if (data.name) {
		// 		alert('успех');
		// 	} else {
		// 		alert('проблема');
		// 	}
		// 	if (data.tel) {
		// 		alert('успех');
		// 	} else {
		// 		alert('проблема');
		// 	}
		// 	if (data.adres) {
		// 		alert('успех');
		// 	} else {
		// 		alert('проблема');
		// 	}

		// });


	}

}
