import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { PostService } from '../services/post-services/post.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';
import { FirebaseStorageService } from '../firebase/storage/firebase-storage.service';
import { finalize, takeUntil } from 'rxjs/operators';
import { AngularFireStorageReference } from '../../../node_modules/angularfire2/storage';
import { Subject } from '../../../node_modules/rxjs';
import { InjectableFileReader } from '../core/utilities/injectable-file-reader';
export interface Day {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit, OnDestroy {
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

  public imageFile: File;
  public uploadPercent: number;

  private destroy$ = new Subject<any>();

  days: Day[] = [
    { value: 'day-1', viewValue: '1 Day' },
    { value: 'day-2', viewValue: '2 Days' },
    { value: 'day-3', viewValue: '3 Days' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private firebaseStorageService: FirebaseStorageService,
    private postService: PostService,
    private router: Router
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public selectEvent(file): void {
    const fileReader: FileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event: Event) => {
      this.url = fileReader.result;
      this.imageFile = file;
    };

    // if (file.target.files && file.target.files 0]) {
    //   const fileReader: FileReader = new FileReader();
    //   fileReader.readAsDataURL(file.target.files[0]);
    //   fileReader.onload = (event: Event) => {
    //     this.url = fileReader.result;
    //     this.imageFile = file.target.files[0];
    //   };
    // }
  }

  public isValidPost(): boolean {
    return this.addPostForm.valid && this.url !== null;
  }

  public remove() {
    this.url = null;
  }

  public addPost(): void {
    const uid = this.firebaseStorageService.createImageId();
    const fileRef = this.firebaseStorageService.getFileRef(
      `post-images/${uid}/`
    );
    const uploadTask = this.firebaseStorageService.uploadImage(
      this.imageFile,
      uid
    );

    uploadTask
      .percentageChanges()
      .pipe(takeUntil(this.destroy$))
      .subscribe(percent => {
        this.uploadPercent = percent;
      });

    uploadTask
      .snapshotChanges()
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.onUploadComplete(fileRef))
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  private onUploadComplete(fileRef: AngularFireStorageReference) {
    fileRef
      .getDownloadURL()
      .pipe(takeUntil(this.destroy$))
      .subscribe(url => {
        this.postService
          .addPost(this.buildPost(url))
          .valueChanges()
          .pipe(takeUntil(this.destroy$))
          .subscribe(() => {
            this.router.navigate(['/posts']);
          });
      });
  }

  private buildPost(imageUrl: string): Post {
    return {
      title: this.title.value,
      description: this.description.value,
      pickUpTime: this.pickUpTime.value,
      datePosted: Date.now().toString(),
      active: true,
      expirationDate: this.expirationDate.value,
      imageUrl: imageUrl,
      id: '',
      userRef: ''
    };
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
