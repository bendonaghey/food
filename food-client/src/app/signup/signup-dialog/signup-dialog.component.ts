import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { User } from '../../models/user.model';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from '../../authentication/services/firebase.service';
import { filter } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

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
  private authState$: any;
  private userState$: any;

  constructor(
    private dialogRef: MatDialogRef<SignupDialogComponent>,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.buildForm();
    this.authState$ = this.firebaseService.authState$.pipe(filter(res => res !== null));
    this.userState$ = this.firebaseService.userState$.pipe(filter(res => res !== null));
    combineLatest(this.authState$, this.userState$).subscribe(() => {
      this.dialogRef.close();
    });
  }

  signup(): void {
    this.firebaseService.signup(this.email.value, this.password.value, this.username.value);
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
