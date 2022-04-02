import { Component, OnInit } from '@angular/core';
import { YaEvent, YaReadyEvent } from 'angular8-yandex-maps';
import { DataService } from "../data.service";


@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


	constructor(
		private dataService: DataService
	) { }

	ngOnInit(): void {
	}

	onMapReady(event: YaReadyEvent<ymaps.Map>): void {
		const objectManagerOptions: ymaps.IObjectManagerOptions = {
			clusterize: true,
			gridSize: 30,
			clusterDisableClickZoom: false,
		};
		const objectManager = new ymaps.ObjectManager(objectManagerOptions);
		objectManager.clusters.options.set('preset', 'islands#yellowClusterIcons');
		event.target.geoObjects.add(objectManager);

		this.dataService.getData().subscribe((data: any) => {
			data.forEach((element: any) => {
				console.log(element);
				objectManager.add({
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [point.lat, point.lon],
					},
					options: {
						"iconLayout": 'default#imageWithContent',
						"iconImageHref": 'assets/img/map_icon_block2.svg',
						"iconImageSize": [30, 42],
						"iconImageOffset": [-3, -42],
					},
					properties: {
						data
					},

				});
			});

		});





	}

}
