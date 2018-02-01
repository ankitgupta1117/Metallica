import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar color="primary"> <b>Metallica</b></mat-toolbar>
  <market-ticker> </market-ticker>
  <tab-comp> </tab-comp>
  `,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'Mettalica';
}
