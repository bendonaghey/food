import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material';
import { UserService } from '../services/user-services/user.service';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';
import { TdChipsBase } from '../../../node_modules/@covalent/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public postId: string;
  public url: string;
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
  public location: FormControl;

  private userPosts: Post[];
  private userDob: any;
  private userId: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.buildForm();

    this.userService.user().subscribe(res => {
      this.bio.setValue(res.bio);
      this.emailAddress.setValue(res.email);
      this.username.setValue(res.username);
      this.firstName.setValue(res.firstname);
      this.lastname.setValue(res.lastname);
      //this.dob.setValue(res.dob);
      //this.telNo.setValue(res.telNo);
      //this.address.setValue(res.address);
      this.userId = res.id;
      this.userPosts = res.posts;
      this.userDob = res.dob;
    });
  }

  updateUser(): void {
    this.userService.updateUser(this.userId, this.generateUser());
    this.disableFields();
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

  private generateUser(): User {
    return {
      email: this.emailAddress.value,
      username: this.username.value,
      bio: this.bio.value,
      dob: this.userDob,
      firstname: this.firstName.value,
      lastname: this.lastname.value,
      posts: this.userPosts,
      id: this.userId
    };
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

  private disableFields(): void {
    this.bio.disable();
    this.username.disable();
    this.firstName.disable();
    this.lastname.disable();
    this.telNo.disable();
    this.address.disable();
  }
}
