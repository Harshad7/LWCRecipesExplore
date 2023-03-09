import { LightningElement } from 'lwc';

export default class BodyCountParentData extends LightningElement {
    name;
    email;

    handleChildFormSubmit(event){
        console.log('event handled')
        console.log(event.detail)
        this.name = event.detail.name;
       this.email = event.detail.email;
    }
}