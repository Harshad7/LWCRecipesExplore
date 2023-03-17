import { LightningElement } from 'lwc';

export default class GrandParentComponent extends LightningElement {

    handleChildEvent(event){
        console.log('grandParent recieved the event')
        console.log('GrandParent Event fired ' + event.type)
    }
}