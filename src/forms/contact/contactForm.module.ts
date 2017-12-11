import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContactFormComponent } from './contactForm.component';
import { MatCheckboxModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
    declarations: [ContactFormComponent],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        BrowserModule,
        MatRadioModule,
        FormsModule,
        MatButtonModule
    ],
    bootstrap: [ContactFormComponent]
})
export class ContactFormModule{

}