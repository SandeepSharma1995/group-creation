import { Component, OnInit, Input } from '@angular/core';
import { CreateServiceService } from 'src/app/routes/create-group/services/create-service.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  constructor(private service: CreateServiceService) { }

  @Input() content: any

  ngOnInit(): void {
  }
  setInParent() {
    if (this.service.selectedUsersList.find(x => x.id === this.content.id) == undefined) {
      this.service.selectedUsersList.push(this.content)
    }
    else {
      this.service.selectedUsersList = this.service.selectedUsersList.filter(item => item.id !== this.content.id);
    }
    console.log(this.service.selectedUsersList)
  }

}
