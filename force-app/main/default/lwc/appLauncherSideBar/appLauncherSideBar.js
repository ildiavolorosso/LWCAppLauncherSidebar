import { LightningElement, api } from 'lwc';

export default class AppLauncherSideBar extends LightningElement {
    @api tabText = 'My Apps';
    @api menuHeader = 'Key Tools';
}