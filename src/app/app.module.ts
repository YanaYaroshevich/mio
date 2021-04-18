import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from './shared/components/header/header.module';
import {MainComponent} from './pages/main/main.component';
import {TopComponent} from './pages/main/top/top.component';

@NgModule({
	imports: [BrowserModule, AppRoutingModule, HeaderModule],
	declarations: [AppComponent, MainComponent, TopComponent],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
