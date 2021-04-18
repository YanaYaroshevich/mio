import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	selector: 'mio-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	signIn() {}
}
