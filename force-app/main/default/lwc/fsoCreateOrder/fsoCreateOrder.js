import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class FsoCreateOrder extends NavigationMixin(LightningElement) {
    @api recordId;

    handleButtonClick(event) {
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
            pageName: 'order-page'
            },
            state: {
                'leadId': this.recordId
            }    
        },
            true // Replaces the current page in your browser history with the URL
        );
         
    }       
}