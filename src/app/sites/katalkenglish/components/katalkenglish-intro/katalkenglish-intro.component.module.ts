import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslatePipeModule } from '../../../../modules/firelibrary/pipes/translate/translate.pipe.module';
import { FormsModule } from '@angular/forms';
import { KatalkEnglishIntroComponent } from './katalkenglish-intro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    TranslatePipeModule
  ],
  declarations: [
    KatalkEnglishIntroComponent
  ],
  exports: [
    RouterModule,
      KatalkEnglishIntroComponent
  ],
  schemas: []
})
export class KatalkEnglishIntroComponentModule { }
