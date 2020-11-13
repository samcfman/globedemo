import { LightningElement, api } from 'lwc';
import GLOBE100 from '@salesforce/resourceUrl/globe100';
import GLOBE50 from '@salesforce/resourceUrl/globe50';
import GLOBE30 from '@salesforce/resourceUrl/globe30';
import PLUS599 from '@salesforce/resourceUrl/plus599';
import PLUS799 from '@salesforce/resourceUrl/plus799';

export default class FsoProduct extends LightningElement {
    selected;

    globe100Url = GLOBE100;
    globe50Url = GLOBE50;   
    globe30Url = GLOBE30;   
    plus599Url = PLUS599;
    plus799Url = PLUS799;  
    //pictureurl;
    @api productCode;

    standardProdDesc = 'Maximum browsing speed Unlimited Internal Data No data cap FREE two TP Link WiFi Mesh Access to VIP Hotline FREE Tech Squad Service Vissit 3-month access to Miant and Amazon Prime Video FREE Landline with Link calls to Globe';

    get pictureURL () {
        var url;
        switch (this.productCode) {
            case "globe100":
                url = this.globe100Url;
                break;
            case "globe50":
                url = this.globe50Url;
                break;
            case "globe30":
                url = this.globe30Url;
                break;
            case "plus599":
                url = this.plus599Url;
                break;                
            case "plus799":
                    url = this.plus799Url;
                    break;                
                     
            default:
                url="";     
        }
        return url;
    } 

    get price () {
        var ret;
        switch (this.productCode) {
            case "globe100":
                ret = "$ P2899";
                break;
            case "globe50":
                ret = "$ P2499";
                break;
            case "globe30":
                ret = "$ P1899";
                break;
            case "plus599":
                    ret = "$ P599";
                break;                
            case "plus799":
                    ret = "$ P799";
                break;                 
            default:
                ret="";     
        }
        return ret;
    }     

    get prodDesc () {
        var ret;
        switch (this.productCode) {
            case "globe100":
                ret = "100Mbps " + this.standardProdDesc;
                break;
            case "globe50":
                ret = "50Mbps " + this.standardProdDesc;
                break;
            case "globe30":
                ret = "30Mbps " + this.standardProdDesc;
                break;
            case "plus599":
                ret = "3GB mobile internet 100 Mins. All Net Calls Uni All-Net Text Free 1G Facebook per month";
                break;
            case "plus799":
                ret = "6GB mobile internet 100 Mins. All Net Calls Uni All-Net Text Free 1G Facebook per month";
                break;
        
            default:
                ret="";     
        }
        return ret;
    }         

    handleSelectClick () {
        this.selected = true;
    }

    handleUnSelectClick () {
        this.selected = false;
    }    
}