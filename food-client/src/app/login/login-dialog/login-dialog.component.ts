import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { filter } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FirebaseService } from '../../authentication/services/firebase.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  public loginForm: FormGroup;
  public email: FormControl;
  public password: FormControl;

  private authState$: any;
  private userState$: any;

  constructor(
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
  ) {}

  ngOnInit() {
    this.buildForm();
    this.authState$ = this.firebaseService.authState$.pipe(filter(res => res !== null));
    this.userState$ = this.firebaseService.userState$.pipe(filter(res => res !== null));
    combineLatest(this.authState$, this.userState$).subscribe(() => {
      this.dialogRef.close();
    });
  }

  login(): void {
    this.firebaseService.login(this.email.value, this.password.value);
  }

  private buildForm(): void {
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
  }
}
