import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-user';
import {UserService} from '../user.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  
})

export class MainComponent implements OnInit {

  
  users!: User[];
  constructor(private userService: UserService) { }
  
  ngOnInit(){
    this.getUsers();
  }
  selectedUser!: User;
  onSelect(user: User): void {
    
    this.selectedUser = user;
  }
  getUsers():void{
    this.users = this.userService.getUsers();
  }
  
}

