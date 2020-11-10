import { Component, OnInit } from '@angular/core';
import { AllApiService } from './../all-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isActiveId=false;
  user: Object;
  repogetory
  message="somthing went wrong"
  p: number = 1;
  years=[{name:"2020"},{name:"2019"},{name:"2018"},{name:"2017"},{name:"2016"},{name:"2015"}]
  constructor(private allApi: AllApiService) { }

  ngOnInit(): void {
    this.userList()
    this.getRepoLIst()
  }
  ngAfterContentChecked(){
    
  }
  isActive(id) {
   this.isActiveId=!this.isActiveId
  }
  getRepoLIst(){
    this.allApi.repoList().subscribe(res=>{
      this.repogetory=res
      console.log(this.repogetory);
      
    },
    error => this.message = <any>error
    )
  }
  userList() {
    this.allApi.getList().subscribe(res => {
      this.user=res
      console.log(res);

    },error => this.message = <any>error)
  }
}
