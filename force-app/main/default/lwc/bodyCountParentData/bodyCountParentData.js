import { LightningElement } from 'lwc';

export default class BodyCountParentData extends LightningElement {
    name;
    email;

    handleChildFormSubmit(event){
        this.name = event.detail.name;
       this.email = event.detail.email;
    }
}