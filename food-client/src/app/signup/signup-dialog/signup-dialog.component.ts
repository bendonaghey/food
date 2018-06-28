import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../../services/user-services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.scss']
})
export class SignupDialogComponent implements OnInit {
  public newUser: User;
  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<SignupDialogComponent>
  ) {}

  onCloseCancel(): void {
    this.dialogRef.close();
  }

  onSignup(username: HTMLInputElement, email: HTMLInputElement): void {
    this.userService.addUser(username.value, email.value).subscribe(res => {
      this.newUser = res;
      console.log(res);
    });
  }

  ngOnInit() {}
}
