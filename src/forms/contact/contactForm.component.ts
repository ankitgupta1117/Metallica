import { Component } from '@angular/core';
import { Contact } from './contact';


@Component({
    selector: 'contact-form',
    templateUrl: './contactForm.component.html',
    styleUrls: ['./contactForm.component.css']
})
export class ContactFormComponent{
    selectedSide:String = '';
    sides= ['Buy', 'Sell'];
    contact: Contact = new Contact("","","");

    submit(){
        console.log(this.contact);
    }

}