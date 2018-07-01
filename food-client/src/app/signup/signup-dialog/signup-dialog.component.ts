import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../../services/user-services/user.service';
import { User } from '../../models/user.model';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { FirebaseService } from '../../authentication/services/firebase.service';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.scss']
})
export class SignupDialogComponent implements OnInit {
  public newUser: User;

  public signupForm: FormGroup;
  public username: FormControl;
  public email: FormControl;
  public password: FormControl;

  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<SignupDialogComponent>,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService
  ) {}

  // onCloseCancel(): void {
  //   this.dialogRef.close();
  // }

  // onSignup(username: HTMLInputElement, email: HTMLInputElement): void {
  //   this.userService.addUser(username.value, email.value).subscribe(res => {
  //     this.newUser = res;
  //     console.log(res);
  //   });
  // }

  ngOnInit() {
    this.buildForm();
  }

  signup(): void {
    this.firebaseService.signup(this.email.value, this.password.value);
  }

  private buildForm() {
    this.username = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.signupForm = this.formBuilder.group({
      username: this.username,
      email: this.email,
      password: this.password
    });
  }
}
