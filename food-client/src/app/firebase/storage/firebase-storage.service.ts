import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore } from '../../../../node_modules/angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  constructor(private angularFireStorage: AngularFireStorage, private angularFirestore: AngularFirestore) { }

  uploadImage(file: File): AngularFireUploadTask {
    const uid = this.angularFirestore.createId();
    const ref = this.angularFireStorage.ref(`post-images/${uid}`);
    return ref.put(file);
  }

  getFileRef(path: string) {
    return this.angularFireStorage.ref(path);
  }
}
