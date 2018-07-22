import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegistrationDialogComponent } from './registration-dialog/registration-dialog.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(): void {
    // !Fix
    const dialogRef = this.dialog.open(RegistrationDialogComponent, {
      width: '450px'
    });
  }
}
