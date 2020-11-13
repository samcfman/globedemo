import { LightningElement, api } from 'lwc';
import {FlowNavigationNextEvent} from 'lightning/flowSupport';

export default class FsoProducts extends LightningElement {

    @api leadId='xxxx';

    connectedCallback() {
        let testURL = window.location.href;
        let newURL = new URL(testURL).searchParams;
        this.leadId = newURL.get('leadId');
    }    

    handleButtonClick (event) {
        const nextNavigationEvent = new FlowNavigationNextEvent();
            this.dispatchEvent(nextNavigationEvent);        
    }
}