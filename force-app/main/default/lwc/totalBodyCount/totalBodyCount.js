import { LightningElement } from 'lwc';

export default class TotalBodyCount extends LightningElement {

    peopleCount = 0;

    addPeople(){
        this.peopleCount += 1 ;
    }
    subtractPeople(){
        this.peopleCount > 0 ? this.peopleCount -= 1 : '';
    }
}