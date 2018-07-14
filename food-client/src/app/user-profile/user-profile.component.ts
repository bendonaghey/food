import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public postId: string;
  public url: string;
  public userId: string;

  public userProfileForm: FormGroup;
  public emailAddress: FormControl;
  public firstName: FormControl;
  public surname: FormControl;
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

  addPost(): void {
    // !Removed when getting logged in userId
    this.userId = '1000';
    this.postId = '10000';
    // Tried pasting through an post object instead of all this
    // this.post.title = this.title.value;
    // this.post.description = this.description.value;
    // this.post.location = this.location.value;
    // this.post.pickUpTime = this.pickUpTime.value;
    // this.post.datePosted = Date.now();
    // this.post.likes = 0;
    // this.post.interest = 0;
    // this.post.active = true;
    // this.post.expirationDate = this.expirationDate.value;
    // this.post.image = this.url;
  }

  private buildForm(): void {
    this.emailAddress = new FormControl('');
    this.firstName = new FormControl('');
    this.surname = new FormControl('');
    this.telNo = new FormControl('');
    this.dob = new MatDatepickerModule();
    this.address1 = new FormControl('');
    this.address2 = new FormControl('');
    this.address3 = new FormControl('');
    this.postCode = new FormControl('');
    this.bio = new FormControl('');
    this.totalPosts = new FormControl('');

    this.userProfileForm = this.formBuilder.group({
      emailAddress: this.emailAddress,
      firstName: this.firstName,
      surname: this.surname,
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
