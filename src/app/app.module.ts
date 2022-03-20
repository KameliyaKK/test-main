import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapComponent } from './map/map.component';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


const mapConfig: YaConfig = {
	apikey: '9e387b2c-464a-4c77-b4dc-34cd5f950664',  // API_KEY
	lang: 'ru_RU',
};

@NgModule({
	declarations: [
		AppComponent,
		MapComponent,
		FormComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		AngularYandexMapsModule.forRoot(mapConfig),
		HttpClientModule,
		FormsModule,

	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
