import { Injectable } from '@angular/core';
import { DataService } from "../data.service";

@Injectable({
	providedIn: 'root'
})
export class DataService {

	//   constructor() { }
	constructor(
		private dataService: DataService
	) { }
}
// для получение данных
this.dataService.getData().subscribe((answer) => {
	this.Cord = answer.cord;
	answer.cord.forEach((data: any) => {
		console.log(data);
	})
});

// для отправки данных
this.dataService.SendDataForm(data).subscribe((data) => {
	if (data.name) {
		alert('успех');
	} else {
		alert('проблема');
	}
});
