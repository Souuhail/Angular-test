import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user-service.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  users: User[] = [];
  ngOnInit(): void {
    this.service.getUsers().subscribe(list => this.users = list);
  }

  constructor(private service: UserService, private router: Router) { }

  delete(uuid: string | undefined) {
    this.service.deleteUser(uuid as string).subscribe(() => {
      this.service.getUsers().subscribe(list => this.users = list);
    });
  
  }
  

}
