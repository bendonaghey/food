import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore } from '../../../../node_modules/angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  constructor(private angularFireStorage: AngularFireStorage, private angularFirestore: AngularFirestore) { }

  public uploadImage(file: File, uid: string): AngularFireUploadTask {
    const ref = this.angularFireStorage.ref(`post-images/${uid}`);
    return ref.put(file);
  }

  public createImageId(): string {
    return this.angularFirestore.createId();
  }

  public getFileRef(path: string) {
    return this.angularFireStorage.ref(path);
  }
}
