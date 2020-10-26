import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    clickedButtonLabel;

    handleClick() {
        this.clickedButtonLabel = 'Success!';
    }
}
