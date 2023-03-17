import { LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {

    handlebubblefalse(){
        const evt = new CustomEvent('bubblefalse', {bubbles : false});
        this.dispatchEvent(evt);
    }

    handlebubbletrue(){
        const evt = new CustomEvent('bubbletrue', {bubbles : true, composed : true});
        this.dispatchEvent(evt);
    }

}