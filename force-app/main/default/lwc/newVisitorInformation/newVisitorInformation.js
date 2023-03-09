import { LightningElement } from 'lwc';

export default class NewVisitorInformation extends LightningElement {

    userName
    userEmail;

    handleNameChange(event){
        console.log('name entered')
        this.userName = event.detail.value;
    }

    handleEmailChange(event){
        this.userEmail = event.detail.value
    }

    handleSubmit(){
        console.log('submit')
        console.log(this.userName)
       const newEvent = new CustomEvent('formsubmit', {
            detail : {
                name : this.userName,
                email : this.userEmail
            }
        })
        this.dispatchEvent(newEvent);
    }
}