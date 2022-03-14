import { Component, OnInit } from '@angular/core';
import { YaEvent, YaReadyEvent } from 'angular8-yandex-maps';
import { DataService } from "../data.service";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
