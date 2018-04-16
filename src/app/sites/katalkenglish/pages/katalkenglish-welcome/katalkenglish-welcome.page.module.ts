import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Route } from '@angular/router';
import { TranslatePipeModule } from '../../../../modules/firelibrary/pipes/translate/translate.pipe.module';
import { KatalkEnglishWelcomePage } from './katalkenglish-welcome.page';

const appRoutes: Array<Route> = [
    { component: KatalkEnglishWelcomePage, path: '' }
];
@NgModule({
    declarations: [
        KatalkEnglishWelcomePage
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild(appRoutes),
        TranslatePipeModule
    ],
    entryComponents: [
        KatalkEnglishWelcomePage
    ],
    bootstrap: [KatalkEnglishWelcomePage]
})
export class KatalkEnglishWelcomePageModule { }

