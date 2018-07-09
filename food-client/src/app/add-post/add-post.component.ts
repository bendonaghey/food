import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { PostService } from '../services/post-services/post.service';
import { Post } from '../models/post.model';

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
    private postService: PostService
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

    this.postService
      .addPost(
        this.postId,
        this.userId,
        this.title.value,
        this.description.value,
        this.location.value,
        this.pickUpTime.value,
        Date.now(),
        0,
        0,
        true,
        this.expirationDate.value,
        this.url
      )
      .subscribe(res => {
        this.post = res;
      });
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
