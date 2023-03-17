import { LightningElement } from 'lwc';

export default class NewVisitorInformation extends LightningElement {

    userName
    userEmail;

    handleNameChange(event){
        this.userName = event.detail.value;
    }

    handleEmailChange(event){
        this.userEmail = event.detail.value
    }

    handleSubmit(){
       const newEvent = new CustomEvent('formsubmit', {
            detail : {
                name : this.userName,
                email : this.userEmail
            }
        })
        this.dispatchEvent(newEvent);
    }
}