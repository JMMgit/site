import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../app.material.module';

import { OntueEvaluationLatestListComponent } from './ontue-evaluation-latest-list.component';
import { PageNavigatorComponentModule } from '../../../../components/page-navigator/page-navigator.component.module';
import { TranslatePipeModule } from '../../../../pipes/translate/translate.pipe.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        TranslatePipeModule,
        PageNavigatorComponentModule
    ],
    declarations: [
        OntueEvaluationLatestListComponent
    ],
    exports: [
        RouterModule,
        OntueEvaluationLatestListComponent
    ],
    schemas: []
})
export class OntueEvaluationLatestListComponentModule {
}

