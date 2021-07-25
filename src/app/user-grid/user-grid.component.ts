import { Component, OnInit } from "@angular/core";
import { SortType } from "@swimlane/ngx-datatable";
import { UserService } from "../services/user.services";

@Component({
  selector: 'user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css']
})
export class UserGridComponent implements OnInit {

  loadingIndicator = true;
  reorderable = true;
  
  SortType=SortType;
  rows: any[] = [];

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {

    this.userService.getUsers().subscribe((data: any) => {
      this.rows = data.data;
      this.loadingIndicator = false;
    }, (err) => {
      console.log(err);
    });
  }

}
