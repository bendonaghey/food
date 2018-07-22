import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  constructor(private firebaseStorage: AngularFireStorage ) { }

  uploadImage(file: File): AngularFireUploadTask {
    const ref = this.firebaseStorage.ref(`post-images/${file.name}`);
    return ref.put(file);
  }

  getFileRef(path: string) {
    return this.firebaseStorage.ref(path);
  }
}
