import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatTabChangeEvent } from '@angular/material';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { FirebaseService } from '../../authentication/services/firebase.service';
import { filter, map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.scss']
})
export class RegistrationDialogComponent implements OnInit {
  public loginForm: FormGroup;
  public signupForm: FormGroup;
  // Signup
  public username: FormControl;
  public signupEmail: FormControl;
  public signupPassword: FormControl;
  // Login
  public loginEmail: FormControl;
  public loginPassword: FormControl;

  private authState$: any;
  private userState$: any;

  constructor(
    private dialogRef: MatDialogRef<RegistrationDialogComponent>,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.buildLoginForm();
    this.buildSignupForm();
    this.authState$ = this.firebaseService.authState$.pipe(
      filter(res => res !== null)
    );
    this.userState$ = this.firebaseService.userState$.pipe(
      filter(res => res !== null)
    );

    combineLatest(this.authState$, this.userState$).subscribe(() => {
      this.dialogRef.close();
    });
  }

  login(): void {
    this.firebaseService.login(this.loginEmail.value, this.loginPassword.value);
  }

  signup(): void {
    this.firebaseService.signup(
      this.signupEmail.value,
      this.signupPassword.value,
      this.username.value
    );
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
