import { LightningElement, api } from 'lwc';

export default class AppLauncherSideBar extends LightningElement {
    @api tabText = 'My Apps';
    @api menuHeader = 'Key Tools';
    @api ignoreAppLauncherProfilePerm = false;
    @api showInternalApps = false;
    openNav(){
        this.template.querySelector('[data-id="mySidebar"]').style.width = "250px";
        this.template.querySelector('[data-id="main_menu"]').style.width = "250px";
    }
    closeNav(){
        this.template.querySelector('[data-id="mySidebar"]').style.width = "0";
        this.template.querySelector('[data-id="main_menu"]').style.width = "250";
    }
}

