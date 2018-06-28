import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../../services/user-services/user.service';
import { User } from '../../models/user.model';
import { filter } from 'rxjs/operators';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { FirebaseService } from '../../authentication/services/firebase.service';

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
  ) {}

  ngOnInit() {
    this.buildForm();
    this.firebaseService.authState$
      .pipe(filter(res => res === true))
      .subscribe(res => {
        console.log('authState sub', res);
      });
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
