import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { KatalkEnglishSessionEvaluationPage } from './katalkenglish-session-evaluation.page';
import { TranslatePipeModule } from '../../../../pipes/translate/translate.pipe.module';
import { MaterialModule } from '../../../../app.material.module';

const routes: Routes = [
    { path: '', component: KatalkEnglishSessionEvaluationPage }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TranslatePipeModule,
        MaterialModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        KatalkEnglishSessionEvaluationPage
    ],
    entryComponents: [
        KatalkEnglishSessionEvaluationPage
    ],
    bootstrap: [KatalkEnglishSessionEvaluationPage],
    schemas: []
})
export class KatalkEnglishSessionEvaluationPageModule { }
