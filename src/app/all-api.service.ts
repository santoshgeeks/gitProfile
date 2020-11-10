import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AllApiService {
  userList="https://api.github.com/users/santoshgeeks"
  repoListUrl="https://api.github.com/users/santoshgeeks/repos"
  constructor(private http: HttpClient) { }

  getList(){
    return this.http.get(this.userList)
  }
  repoList(){
    return this.http.get(this.repoListUrl)
  }

}
