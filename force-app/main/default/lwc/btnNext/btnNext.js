import { LightningElement, api } from 'lwc';
import {FlowNavigationNextEvent} from 'lightning/flowSupport';

export default class BtnNext extends LightningElement {
    @api buttonlabel;

    handleNext(event){
        const nextNavigationEvent = new FlowNavigationNextEvent();
            this.dispatchEvent(nextNavigationEvent);
    }          
}
