import { Component } from '@angular/core';
import { UsersDataService } from './services/users-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'motel';
  users:any;

  constructor(private userData: UsersDataService){
    this.userData.users().subscribe((data)=>{
      console.log(data)
    })
  }

  getFormData(data:any){
    this.userData.postUsers(data).subscribe((data)=>{
      console.log(data)
    })
  }
}
