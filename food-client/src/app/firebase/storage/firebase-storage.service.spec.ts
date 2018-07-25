import { TestBed, inject } from '@angular/core/testing';

import { FirebaseStorageService } from './firebase-storage.service';
import { FirebaseModule } from '../firebase.module';
import { AngularFireStorage } from '../../../../node_modules/angularfire2/storage';
import { AngularFirestore } from '../../../../node_modules/angularfire2/firestore';

describe('FirebaseStorageService', () => {
  let mockAngularFireStorage: any;
  let mockAngularFireStore: any;
  let mockRef: any;
  beforeEach(() => {

    mockRef = jasmine.createSpyObj('ref', ['put']);
    mockAngularFireStorage = jasmine.createSpyObj('angularFireStorage', ['ref']);
    mockAngularFireStorage.ref.and.returnValue(mockRef);

    mockAngularFireStore = jasmine.createSpyObj('angularFirestore', ['createId']);
    mockAngularFireStore.createId.and.returnValue('123123');

    TestBed.configureTestingModule({
      providers: [
        FirebaseStorageService,
        { provide: AngularFireStorage, useValue: mockAngularFireStorage },
        { provide: AngularFirestore, useValue: mockAngularFireStore }
      ],
      imports: [FirebaseModule]
    });
  });

  it('should be created', inject([FirebaseStorageService], (service: FirebaseStorageService) => {
    expect(service).toBeTruthy();
  }));

  describe('uploadImage', () => {
    it('should get the reference to the image', inject([FirebaseStorageService], (service: FirebaseStorageService) => {
      service.uploadImage(<File>{}, '123123');
      expect(mockAngularFireStorage.ref).toHaveBeenCalledWith(`post-images/123123`);
      expect(mockRef.put).toHaveBeenCalledWith(<File>{});
    }));
  });

  describe('createImageId', () => {
    it('should generate a unique id for the image', inject([FirebaseStorageService], (service: FirebaseStorageService) => {
      const uid = service.createImageId();
      expect(mockAngularFireStore.createId).toHaveBeenCalled();
      expect(uid).toEqual('123123');
    }));
  });

  describe('getFileRef', () => {
    it('should get the firestore reference', inject([FirebaseStorageService], (service: FirebaseStorageService) => {
      const ref = service.getFileRef('path/path');
      expect(mockAngularFireStorage.ref).toHaveBeenCalledWith('path/path');
      expect(ref).toEqual(mockRef);
    }));
  });
});
