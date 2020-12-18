import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [UserCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule
  ],
  exports: [
    UserCardComponent
  ]
})
export class UserCardModule { }
