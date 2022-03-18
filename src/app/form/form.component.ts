import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']

})
export class FormComponent implements OnInit {

	public dataService: any; //добавила св-во dataService, та как была ошибка
	constructor() { }

	ngOnInit(): void {
	}

	SendForm(name: string, tel: string, adres: any): void {
		const data = {     // объект
			name: name,  // под ключом "name" хранится значение "John"
			tel: tel,        // под ключом "age" хранится значение 30
			adres: adres,
		};

		this.dataService.SendDataForm(data).subscribe((data: any) => {
			if (data.name) {
				alert('успех');
			} else {
				alert('проблема');
			}
		});


	}

}
