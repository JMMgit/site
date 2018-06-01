import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { KatalkEnglishHomePage } from './katalkenglish-home.page';
// import { UserInfoComponentModule } from '../../../../components/user-info/user-info.component.module';

import { TranslatePipeModule } from '../../../../pipes/translate/translate.pipe.module';
import { KatalkEnglishMainBannerComponentModule } from '../../components/katalkenglish-main-banner/katalkenglish-main-banner.component.module';
import { KatalkEnglishMaiTeacherListComponentModule } from '../../components/katalkenglish-main-teacher-list/katalkenglish-main-teacher-list.component.module';

const routes: Routes = [
    {path: '', component: KatalkEnglishHomePage}
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        // UserInfoComponentModule,
        TranslatePipeModule,
        KatalkEnglishMainBannerComponentModule,
        KatalkEnglishMaiTeacherListComponentModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        KatalkEnglishHomePage
    ],
    entryComponents: [
        KatalkEnglishHomePage
    ],
    bootstrap: [KatalkEnglishHomePage],
    schemas: []
})
export class KatalkEnglishHomePageModule {
}
