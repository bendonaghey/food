import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { PostService } from '../services/post-services/post.service';
import { Post } from '../models/post.model';
// import 'firebase/auth';
import * as firebase from 'firebase/app';
import { UserService } from '../services/user-services/user.service';
import { Router } from '@angular/router';

export interface Day {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  public post: Post;
  public email: string;
  public postId: string;
  public url: string;
  public userId: string;

  public addPostForm: FormGroup;
  public title: FormControl;
  public description: FormControl;
  public location: FormControl;
  public pickUpTime: FormControl;
  public expirationDate: FormControl;

  // !Probably not right
  days: Day[] = [
    { value: 'day-1', viewValue: '1 Day' },
    { value: 'day-2', viewValue: '2 Days' },
    { value: 'day-3', viewValue: '3 Days' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  selectEvent(file): void {
    if (file.target.files && file.target.files[0]) {
      const fileReader: FileReader = new FileReader();
      fileReader.readAsDataURL(file.target.files[0]);
      fileReader.onload = (event: Event) => {
        this.url = fileReader.result;
      };
    }
  }

  addPost(): void {
    const user = firebase.auth().currentUser;

    this.postService
      .createPost(user.email, this.addPostForm.value, this.url)
      .subscribe(res => {
        this.post = res;
      });

    this.router.navigate(['posts']);
  }

  private buildForm(): void {
    this.title = new FormControl('', Validators.required);
    this.description = new FormControl('');
    this.location = new FormControl('');
    this.pickUpTime = new FormControl('');
    this.expirationDate = new FormControl('day-3');

    this.addPostForm = this.formBuilder.group({
      title: this.title,
      description: this.description,
      location: this.location,
      pickUpTime: this.pickUpTime,
      expirationDate: this.expirationDate
    });
  }
}
