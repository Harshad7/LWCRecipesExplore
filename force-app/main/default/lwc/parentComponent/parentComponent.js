import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

    handleChildEvent(event){
        console.log(event.composedPath())
        if(event.type == 'bubblefalse'){
            console.log('Recieved bubble=False ON child Host');
        }else if(event.type == 'bubbletrue'){
            console.log('Recieved Bubble=True ON child Host');
        }else{
            console.log('Event Recieved - but could not identify ON child Host')
        }
        
    }

    handleChildEventOnDiv(event){
        if(event.type == 'bubblefalse'){
            console.log('Recieved bubble=False ON DIV');
        }else if(event.type == 'bubbletrue'){
            console.log('Recieved Bubble=True ON DIV');
        }else{
            console.log('Event Recieved - but could not identify ON DIV')
        }
        
    }
}