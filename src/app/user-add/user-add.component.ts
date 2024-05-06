import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  disabled: boolean = true;
  // put attributes here (Maybe :>)
  form_group!: FormGroup;
  ngOnInit(): void {
    this.form_group = this.fb.group({
      id: ['', [Validators.required]]
      , name: ['', [Validators.required, Validators.pattern("^[A-Z].*$")]]
      , surname: ['', [Validators.required, Validators.maxLength(8)]]
      , email: ['', [Validators.required, Validators.email]]
      , password: ['', [Validators.required, Validators.pattern("[A-Za-z()].*")]]
    });
  }
  check() {
    this.disabled = !this.form_group.valid;
  }
  constructor(private service: UserService, private router: Router, private active_router: ActivatedRoute, private fb: FormBuilder) { }
  create() {
    let new_entity= {
      id: this.form_group.get('id')!.value
      , name: this.form_group.get('name')!.value
      , surname: this.form_group.get('surname')!.value
      , email: this.form_group.get('email')!.value
      , password: this.form_group.get('password')!.value
    };
    if (this.form_group.valid)
      this.service.addUser(new_entity).subscribe(() => {
        this.router.navigate(['/user-list']);
      });
  }
}
