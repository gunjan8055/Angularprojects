import { Component } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
    selector : 'app-loadingspinner',
    template : '<div class="lds-hourglass"></div>',
    styleUrls : ['./loading-spinner.component.css']
})
export class LoadingspinnerComponent {

}