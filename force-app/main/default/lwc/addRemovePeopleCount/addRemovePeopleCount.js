import { LightningElement } from 'lwc';

export default class AddRemovePeopleCount extends LightningElement {
  addBtnClicked(){
    const addButtonEvt = new CustomEvent('add');
    this.dispatchEvent(addButtonEvt);
  }

  substractBtnClicked(){
    const subtracrtButtonEvt = new CustomEvent('subtract');
    this.dispatchEvent(subtracrtButtonEvt);
  }
}