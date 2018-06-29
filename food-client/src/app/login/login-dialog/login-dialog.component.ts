import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../../services/user-services/user.service';
import { User } from '../../models/user.model';
import { filter, catchError } from 'rxjs/operators';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { FirebaseService } from '../../authentication/services/firebase.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  @Output() public user: User;

  public loginForm: FormGroup;
  public email: FormControl;
  public password: FormControl;

  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService
  ) {
    console.log('listening to auth state');
    this.firebaseService.authState$.subscribe(res => {

    });
  }

  ngOnInit() {
    this.buildForm();
  }

  login(): void {
    this.firebaseService.login(this.email.value, this.password.value);
  }

  // onCloseCancel(): void {
  //   this.dialogRef.close();
  // }

  // onLogin(email: HTMLInputElement): void {
  //   this.userService.getUserByEmail(email.value).subscribe(res => {
  //     this.user = res;
  //     console.log(this.user);
  //   });
  // }

  private buildForm(): void {
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
  }
}
