import { NgModule } from '@angular/core';
import { LoadingspinnerComponent } from './loading-spinner/loading-spinner.component';
import { Alertcomponent } from './alert/alert.component';
import { Dropdowndirective } from './dropdown.directive';

import { CommonModule } from '@angular/common';
import { PlaceholderDirective } from './placeholder/placeholder.directive';

@NgModule({
    declarations : [ 
        LoadingspinnerComponent,
        Alertcomponent,
        Dropdowndirective,
        PlaceholderDirective
    ],
    imports : [
        CommonModule
    ],
    exports : [
        Alertcomponent,
        LoadingspinnerComponent,
        Dropdowndirective,
        PlaceholderDirective,
        CommonModule
    ],
    entryComponents : [Alertcomponent]
})
export class SharedModule{

}