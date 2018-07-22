import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PostService } from '../services/post-services/post.service';
import { Post } from '../models/post.model';
import { UserService } from '../services/user-services/user.service';
import { Router } from '@angular/router';
import { FirebaseStorageService } from '../firebase/storage/firebase-storage.service';
import { finalize } from 'rxjs/operators';
import { AngularFireStorageReference } from '../../../node_modules/angularfire2/storage';
import { FirebaseFirestoreService } from '../firebase/firestore/firebase-firestore.service';
import { FirebaseAuthenticationService } from '../firebase/authentication/firebase-authentication.service';
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

  public imageFile: File;

  // !Probably not right
  days: Day[] = [
    { value: 'day-1', viewValue: '1 Day' },
    { value: 'day-2', viewValue: '2 Days' },
    { value: 'day-3', viewValue: '3 Days' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private firebaseStorageService: FirebaseStorageService,
    private firebaseFirestoreService: FirebaseFirestoreService,
    private firebaseAuthenticationService: FirebaseAuthenticationService,
    private router: Router
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
        this.imageFile = file.target.files[0];
      };
    }
  }

  addPost(): void {
    const fileRef = this.firebaseStorageService.getFileRef(`post-images/${this.imageFile.name}`);
    const uploadTask = this.firebaseStorageService.uploadImage(this.imageFile);

    uploadTask.percentageChanges().subscribe(percent => {
      console.log(percent);
    });

    uploadTask.snapshotChanges().pipe(finalize(() => this.onUploadComplete(fileRef))).subscribe();
  }

  private onUploadComplete(fileRef: AngularFireStorageReference) {
    fileRef.getDownloadURL().subscribe(url => {
      this.firebaseFirestoreService.addPostToUser(this.buildPost(url)).then(res => {
        this.firebaseFirestoreService.addPost(this.buildPost(url)).then((docRef) => {
          docRef.get().then(doc => {
            this.viewPost(doc.id);
          });
        }, error => {
          console.log('create post error ', error.message);
        });
      });
    });
  }

  private viewPost(id: string) {
    this.router.navigate(['posts/', id]);
  }

  private buildPost(imageUrl: string): Post {
    return {
      title: this.title.value,
      description: this.description.value,
      pickUpTime: this.pickUpTime.value,
      datePosted: 'datenow',
      active: true,
      expirationDate: this.expirationDate.value,
      imageUrl: imageUrl
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
