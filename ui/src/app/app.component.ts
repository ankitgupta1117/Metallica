import {Component, ViewEncapsulation} from '@angular/core';
import { ReferenceDataStore } from '../shared/services/ref-data-store';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { UserService } from '../shared/services/user-service/user-service';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar color="primary"> 
  
  <span [routerLink]="['/']" ><b>Metallica</b> </span>
  <span class="toolbar-spacer"></span>
<!--  <i class="material-icons  pad10" [routerLink]="['/']">home</i> -->
  <b> {{ userName }} </b>
  <i class="material-icons pad10">perm_identity</i>
  <!-- <i class="material-icons pad10" (click)="logout()">power_settings_new</i>  -->
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
  private userName:string ="";
  constructor(private refDataStore: ReferenceDataStore, private userService: UserService){
    // this.refDataStore.init();
    let that = this; 
    this.userService.getUserName().subscribe(
      (data: string) =>{
        console.log("USER: "+data );
        that.userName = data;
      }
    )
  }

  public logout(){
    this.userService.logout().subscribe((data) => {console.log("Logout successfull")});
  }
}
