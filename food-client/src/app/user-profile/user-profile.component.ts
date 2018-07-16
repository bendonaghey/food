import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public postId: string;
  public url: string;
  public userId: string;
  public isDisabled = false;

  public userProfileForm: FormGroup;
  public emailAddress: FormControl;
  public firstName: FormControl;
  public surname: FormControl;
  public password: FormControl;
  public confirmPassword: FormControl;
  public telNo: FormControl;
  public dob: MatDatepickerModule;
  public address1: FormControl;
  public address2: FormControl;
  public address3: FormControl;
  public postCode: FormControl;
  public bio: FormControl;
  public totalPosts: FormControl;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  toggleTopPanel(): void {
    this.userProfileForm.get('bio')[!this.isDisabled ? 'enable' : 'disable']();
    this.isDisabled = !this.isDisabled;
  }

  toggleMidPanel(): void {
    this.userProfileForm
      .get('firstName')
      [!this.isDisabled ? 'enable' : 'disable']();
    this.userProfileForm
      .get('surname')
      [!this.isDisabled ? 'enable' : 'disable']();
    this.userProfileForm.get('dob')[!this.isDisabled ? 'enable' : 'disable']();
    this.userProfileForm
      .get('telNo')
      [!this.isDisabled ? 'enable' : 'disable']();
    this.userProfileForm
      .get('password')
      [!this.isDisabled ? 'enable' : 'disable']();
    this.userProfileForm
      .get('confirmPassword')
      [!this.isDisabled ? 'enable' : 'disable']();
    this.isDisabled = !this.isDisabled;
  }

  toggleBottomPanel(): void {
    this.userProfileForm
      .get('address1')
      [!this.isDisabled ? 'enable' : 'disable']();
    this.userProfileForm
      .get('address2')
      [!this.isDisabled ? 'enable' : 'disable']();
    this.userProfileForm
      .get('address3')
      [!this.isDisabled ? 'enable' : 'disable']();
    this.userProfileForm
      .get('postCode')
      [!this.isDisabled ? 'enable' : 'disable']();
    this.isDisabled = !this.isDisabled;
  }

  private buildForm(): void {
    this.bio = new FormControl({
      value: '',
      disabled: !this.isDisabled
    });
    this.emailAddress = new FormControl({
      value: '',
      disabled: !this.isDisabled
    });
    this.firstName = new FormControl({
      value: '',
      disabled: !this.isDisabled
    });
    this.surname = new FormControl({
      value: '',
      disabled: !this.isDisabled
    });
    // this.dob = new MatDatepickerModule({
    //   disabled: !this.isDisabled
    // });
    this.dob = new MatDatepickerModule();

    this.telNo = new FormControl({
      value: '',
      disabled: !this.isDisabled
    });
    this.password = new FormControl({
      value: '',
      disabled: !this.isDisabled
    });
    this.confirmPassword = new FormControl({
      value: '',
      disabled: !this.isDisabled
    });
    this.address1 = new FormControl({
      value: '',
      disabled: !this.isDisabled
    });
    this.address2 = new FormControl({
      value: '',
      disabled: !this.isDisabled
    });
    this.address3 = new FormControl({
      value: '',
      disabled: !this.isDisabled
    });
    this.postCode = new FormControl({
      value: '',
      disabled: !this.isDisabled
    });

    this.userProfileForm = this.formBuilder.group({
      emailAddress: this.emailAddress,
      firstName: this.firstName,
      surname: this.surname,
      password: this.password,
      confirmPassword: this.confirmPassword,
      telNo: this.telNo,
      dob: this.dob,
      address1: this.address1,
      address2: this.address2,
      address3: this.address3,
      postCode: this.postCode,
      bio: this.bio,
      totalPosts: this.totalPosts
    });
  }
}
