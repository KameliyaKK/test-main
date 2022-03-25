import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { DataService } from "../data.service";



@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']

})
export class FormComponent implements OnInit {
	formSubmited = false;
	form = {
		id: 1,
		inputName: "Name ",
		inputPhone: "892751489",
		inputAddress: "Мира 5"
	};
	constructor(private dataService: DataService) { }

	// ngOnInit(): void {

	// }
	// модель
	ngOnInit() {
		this.formSubmited = false;

	}

	SendForm(name: string, tel: string, adres: any): void {
		const data = {     // объект
			name: name,  // под ключом "name" хранится значение "John"
			tel: tel,        // под ключом "age" хранится значение 30
			adres: adres
		};

		this.dataService.SendDataForm(data).subscribe((data) => {
			if (data.name) {
				alert('успех');
			} else {
				alert('проблема');
			}
		});


	}
}
