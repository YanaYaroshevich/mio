import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
	declarations: [HeaderComponent],
	exports: [HeaderComponent],
	providers: [],
	imports: [MatButtonModule],
})
export class HeaderModule {}
