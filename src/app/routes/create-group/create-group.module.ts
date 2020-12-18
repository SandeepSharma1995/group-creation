import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomSheetOverviewExampleSheet, CreateGroupComponent } from './components/create-group/create-group.component';
import { CreateGroupRoutingModule } from './create-group-routing.module';
import { UserCardModule } from 'src/app/modules/user-card/user-card.module';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [CreateGroupComponent,BottomSheetOverviewExampleSheet],
  imports: [
    CommonModule,
    CreateGroupRoutingModule,
    UserCardModule,
    FormsModule ,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatBottomSheetModule
  ],
  entryComponents: [
    BottomSheetOverviewExampleSheet
  ],
})
export class CreateGroupModule { }
