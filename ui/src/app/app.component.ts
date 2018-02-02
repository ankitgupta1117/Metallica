import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar color="primary"> 
  
  <span [routerLink]="['/']" ><b>Metallica</b> </span>
  <span class="toolbar-spacer"></span>
  <i class="material-icons pad10" [routerLink]="['/']">home</i>
  <i class="material-icons pad10">perm_identity</i>
  <i class="material-icons pad10">power_settings_new</i>
  </mat-toolbar>
  <market-ticker> </market-ticker>
  <tab-comp> </tab-comp>
  `,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'Mettalica';
}
