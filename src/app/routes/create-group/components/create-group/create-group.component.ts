import { Component, OnInit, Inject } from '@angular/core';
import { CreateServiceService } from '../../services/create-service.service';
import { UserConfig } from 'src/app/interfaces/userConfig';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {
  constructor(private configService: CreateServiceService,
    private service: CreateServiceService,
    private _bottomSheet: MatBottomSheet) { }

  userConfig: UserConfig[] = []
  groupName: string | undefined = undefined
  groupDescription: string | undefined = undefined
  error: boolean = false

  ngOnInit() {
    this.getUserConfig()
  }

  getUserConfig() {
    this.configService.getUserConfig()
      .subscribe((data: any) =>
        this.userConfig = data
      );
  }
  loadFile(event: any) {
    let image = <any>document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
  };
  sortUserConfig(val: any) {
    if (val == true) {
      //ascending sort
      this.userConfig = this.userConfig.sort((a: any, b: any) => a.name.localeCompare(b.name))
    }
    else if (val == false) {
      //descending sort
      this.userConfig = this.userConfig.sort((a: any, b: any) => b.name.localeCompare(a.name))
    }
  }
  reset() {
    this.getUserConfig()
    this.groupDescription = ''
    this.groupName = ''
    this.service.selectedUsersList = []
    this.error = false
  }
  openBottomSheet(): void {
    this.error = false
    if (this.groupName != '' && this.groupDescription != '' && this.service.selectedUsersList.length != 0) {

      this._bottomSheet.open(BottomSheetOverviewExampleSheet, {
        data:
        {
          name: this.groupName,
          description: this.groupDescription,
          users: this.service.selectedUsersList
        }
      }
      );
    }
    else {
      this.error = true
    }
  }


}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: './updated-group-overview.component.html'
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { name: string, description: string, users: UserConfig[] }) { }

}
