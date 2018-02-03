import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
// import {ReferenceService} from './reference-service';
import {Configuration} from './Configuration';
import {Location} from '../models/location';
@NgModule({
  /*declarations: [
    ReferenceService
  ],*/
  imports: [
    HttpClientModule
  ],
  providers: [
    Configuration
  ]
})
export class ServicesModule{

}
