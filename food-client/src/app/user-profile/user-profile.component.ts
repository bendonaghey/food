import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material';
import { UserService } from '../services/user-services/user.service';
import { FirebaseService } from '../authentication/services/firebase.service';

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
  public currentUser;

  public userProfileForm: FormGroup;
  public emailAddress: FormControl;
  public username: FormControl;
  public firstName: FormControl;
  public lastname: FormControl;
  public telNo: FormControl;
  public dob: MatDatepickerModule;
  public address: FormControl;
  public bio: FormControl;
  public totalPosts: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.buildForm();
    const firebaseUser = this.firebaseService.getCurrentUser();
    this.userService.getUserByEmail(firebaseUser.email).subscribe(res => {
      this.currentUser = res;
      this.setFormValues(this.currentUser);
    });
  }

  toggleTopPanel(): void {
    this.userProfileForm.get('bio')[!this.isDisabled ? 'enable' : 'disable']();
    this.isDisabled = !this.isDisabled;
  }

  toggleMidPanel(): void {
    this.userProfileForm
      .get('username')
      [!this.isDisabled ? 'enable' : 'disable']();
    this.userProfileForm
      .get('firstName')
      [!this.isDisabled ? 'enable' : 'disable']();
    this.userProfileForm
      .get('lastname')
      [!this.isDisabled ? 'enable' : 'disable']();
    // this.userProfileForm.get('dob')[!this.isDisabled ? 'enable' : 'disable']();
    this.userProfileForm
      .get('telNo')
      [!this.isDisabled ? 'enable' : 'disable']();
    this.isDisabled = !this.isDisabled;
  }

  toggleBottomPanel(): void {
    this.userProfileForm
      .get('address')
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
    this.username = new FormControl({
      value: '',
      disabled: !this.isDisabled
    });
    this.firstName = new FormControl({
      value: '',
      disabled: !this.isDisabled
    });
    this.lastname = new FormControl({
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
    this.address = new FormControl({
      value: '',
      disabled: !this.isDisabled
    });

    this.userProfileForm = this.formBuilder.group({
      emailAddress: this.emailAddress,
      username: this.username,
      firstName: this.firstName,
      lastname: this.lastname,
      telNo: this.telNo,
      dob: this.dob,
      address: this.address,
      bio: this.bio,
      totalPosts: this.totalPosts
    });
  }

  private setFormValues(currentUser: any) {
    this.emailAddress.setValue(this.currentUser.email);
    this.bio.setValue(this.currentUser.bio);
    this.username.setValue(this.currentUser.username);
    this.firstName.setValue(this.currentUser.firstname);
    this.lastname.setValue(this.currentUser.lastname);
    //this.dob(this.currentUser.dob);
    this.telNo.setValue(this.currentUser.telNo);
    this.address.setValue(this.currentUser.address.address);
  }
}
