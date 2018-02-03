import {Component, ViewEncapsulation} from '@angular/core';
import { ReferenceDataStore } from '../shared/services/ref-data-store';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

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
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // this.refDataStore.init();
  }
  title = 'Mettalica';

  constructor(private refDataStore: ReferenceDataStore){
    // this.refDataStore.init();
  }
}
