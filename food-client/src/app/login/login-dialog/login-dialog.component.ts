import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../../services/user-services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  @Output() public user: User;

  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<LoginDialogComponent>
  ) {}

  onCloseCancel(): void {
    this.dialogRef.close();
  }

  onLogin(email: HTMLInputElement): void {
    this.userService.getUserByEmail(email.value).subscribe(res => {
      this.user = res;
      console.log(this.user);
    });
  }

  ngOnInit() {}
}
