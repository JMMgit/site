import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OntueMyDayoffPage } from './ontue-my-dayoff.page';

import { MaterialModule } from '../../../../app.material.module';
import { TranslatePipeModule } from '../../../../pipes/translate/translate.pipe.module';


const routes: Routes = [
    { path: '', component: OntueMyDayoffPage }
];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        TranslatePipeModule,
        MaterialModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        OntueMyDayoffPage
    ],
    entryComponents: [
        OntueMyDayoffPage
    ],
    bootstrap: [OntueMyDayoffPage],
    schemas: []
})
export class OntueMyDayoffPageModule { }
