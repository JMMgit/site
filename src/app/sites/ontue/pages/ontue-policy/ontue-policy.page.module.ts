import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OntuePolicyPage } from './ontue-policy.page';
import { TranslatePipeModule } from '../../../../pipes/translate/translate.pipe.module';



const routes: Routes = [
    { path: '', component: OntuePolicyPage }
];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        TranslatePipeModule,
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        OntuePolicyPage
    ],
    entryComponents: [
        OntuePolicyPage
    ],
    bootstrap: [OntuePolicyPage],
    schemas: []
})
export class OntuePolicyPageModule { }
