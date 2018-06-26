import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>) {}

  onCloseCancel(): void {
    this.dialogRef.close();
  }

  onLogin(): void {}

  ngOnInit() {}
}
