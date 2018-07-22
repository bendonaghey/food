import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatTabChangeEvent } from '@angular/material';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { FirebaseAuthenticationService } from '../../firebase/authentication/firebase-authentication.service';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.scss']
})
export class RegistrationDialogComponent implements OnInit {
  public loginForm: FormGroup;
  public signupForm: FormGroup;
  public username: FormControl;
  public signupEmail: FormControl;
  public signupPassword: FormControl;
  public loginEmail: FormControl;
  public loginPassword: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<RegistrationDialogComponent>,
    private firebaseAuthenticationService: FirebaseAuthenticationService
  ) {}

  ngOnInit() {
    this.buildLoginForm();
    this.buildSignupForm();
  }

  login(): void {
    this.firebaseAuthenticationService.login(this.loginEmail.value, this.loginPassword.value).then(res => {
      this.dialogRef.close();
    }, error => {
      console.warn('login error', error.message);
    });
  }

  signup(): void {
    this.firebaseAuthenticationService.signup(this.signupEmail.value, this.signupPassword.value).then(res => {
      this.dialogRef.close();
    }, error => {
      console.warn('sign up error', error.message);
    });
  }

  private buildLoginForm(): void {
    this.loginEmail = new FormControl('', Validators.required);
    this.loginPassword = new FormControl('', Validators.required);

    this.loginForm = this.formBuilder.group({
      loginEmail: this.loginEmail,
      loginPassword: this.loginPassword
    });
  }

  private buildSignupForm() {
    this.username = new FormControl('', Validators.required);
    this.signupEmail = new FormControl('', Validators.required);
    this.signupPassword = new FormControl('', Validators.required);

    this.signupForm = this.formBuilder.group({
      username: this.username,
      signupEmail: this.signupEmail,
      signupPassword: this.signupPassword
    });
  }

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log(tabChangeEvent);
  }
}
